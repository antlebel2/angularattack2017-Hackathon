import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { EmployerDto } from './employerDto';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmployerApiPromiseService {
    private APIKEY = 'c0402b24ca6234';
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

    private extractData(res: Response) {
        let body = res.json();
        if(!body)
            return {};
            
        //hydrate - todo null if moved to function??!!??
        var _companyDetail = new EmployerDto();
        _companyDetail.name = body.organization.name;
        
        if(body.organization.contactInfo.addresses){
            _companyDetail.city = body.organization.contactInfo.addresses[0].locality;
            _companyDetail.stateCode = body.organization.contactInfo.addresses[0].region.code;
        }
        
        if(body.organization.contactInfo.phoneNumbers)
            _companyDetail.phoneNumber =body.organization.contactInfo.phoneNumbers[0]['number'];
            
        return _companyDetail;
        //end hydrate;
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}