import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { EmployerDto } from './employerDto';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmployerApiPromiseService {
    private APIKEY = 'fdcae57b2e5a562b';
    private _companyDomain = '&domain=';
    private _companyEndpoint = 'https://api.fullcontact.com/v2/company/lookup.json?apiKey=' + this.APIKEY;
    
    headers: Headers;
    options: RequestOptions;

    constructor(private http: Http, private route: ActivatedRoute) {
        this.headers = new Headers({ 'Content-Type': 'application/json', 
                                     'Accept': 'q=0.8;application/json;q=0.9' });
        this.options = new RequestOptions({ headers: this.headers });
    }

    getService(): Promise<any> {
        this._companyDomain += this.route.snapshot.queryParams['companyDomain'];
        this._companyEndpoint += this._companyDomain;
        return this.http
            .get(this._companyEndpoint, this.options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }
    
    getQueryParam(){
        return this.route.snapshot.queryParams['companyDomain'];
    }

    private extractData(res: Response) {
        let body = res.json();
            
        if(!body || body.status != '200'){
            return null; //no company found for that domain
        }
        
        //hydrate
        var _companyDetail = new EmployerDto();
        
        //---summary---
        var name = body.organization.name;
        var addresses = body.organization.contactInfo.addresses;
        var logoUrl = body.logo;
        var phoneNumbers = body.organization.contactInfo.phoneNumbers;
        
        _companyDetail.summary = {   
            name: typeof name != 'undefined' 
                ? name : 'N/A',
            city: typeof addresses[0].locality != 'undefined'
                ? addresses[0].locality : 'N/A',
            stateCode: typeof addresses[0].region.code != 'undefined'
                ? addresses[0].region.code : 'N/A',
            //todo - traverse through photos for logo label and reference that
            logoUrl: typeof logoUrl != 'undefined' 
                ? logoUrl : 'app/assets/images/defaultLogo.png', //todo - place a default assets image for falsy logo
            phoneNumber: typeof phoneNumbers != 'undefined'
                ? phoneNumbers[0]['number'] : 'N/A'
        };
        
        //---web stats---
        var onlineSince = body.onlineSince;
        var trafficRanking = body.traffic.ranking;
        var keywords = body.organization.keywords;
        
        _companyDetail.webStats = {     
            onlineSince: typeof onlineSince != 'undefined'
                ? onlineSince : 'N/A', //todo - parse date to nice UI
            keywords: typeof keywords != 'undefined'
                ? keywords : [],
            trafficRanking: typeof trafficRanking != 'undefined'
                ? trafficRanking : []
        }; 
         
       //---social media---
        var socialProfiles = body.socialProfiles;
        
        _companyDetail.socialMedia = {     
            profiles: typeof socialProfiles != 'undefined' 
                ? socialProfiles : []
       };
       
        //---extended summary---
        var founded = body.organization.founded;
        var overview = body.organization.overview;
        var numberOfEmployees = body.organization.approxEmployees;
        
        _companyDetail.extendedSummary = {
            addresses: typeof addresses != 'undefined'
                ? addresses : [],
            founded: typeof founded != 'undefined'
                ? founded : 'N/A',            
            numberOfEmployees: typeof numberOfEmployees != 'undefined'
                ? numberOfEmployees : 'N/A',
            overview: typeof overview != 'undefined'
                ? overview : 'Sorry, no overview found.'
        };
        return _companyDetail;
        //end hydrate;
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}