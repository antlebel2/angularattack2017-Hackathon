import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { EmployeeDto } from './employeeDto';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmployeeApiPromiseService {
    private APIKEY = 'fdcae57b2e5a562b';
    private _employeeEmail = '&email=';
    private _employeeEndpoint = 'https://api.fullcontact.com/v2/person.json?apiKey=' + this.APIKEY;
    
    headers: Headers;
    options: RequestOptions;

    constructor(private http: Http, private route: ActivatedRoute) {
        this.headers = new Headers({ 'Content-Type': 'application/json', 
                                     'Accept': 'q=0.8;application/json;q=0.9' });
        this.options = new RequestOptions({ headers: this.headers });
    }

    getService(): Promise<any> {
        this._employeeEmail += this.route.snapshot.queryParams['employeeEmail'];
        this._employeeEndpoint += this._employeeEmail;
        return this.http
            .get(this._employeeEndpoint, this.options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }
    
    getQueryParam(){
        return this.route.snapshot.queryParams['employeeEmail'];
    }

    private extractData(res: Response) {
        let body = res.json();
        if(!body || body.status != '200'){
            return null;
        }
            
        //hydrate
        var _employeeDetail = new EmployeeDto();
        
        var fullName = body.contactInfo.fullName;
        var location = body.demographics.locationGeneral;
        var gender = body.demographics.gender;
        var photos = body.photos;
        var socialProfiles = body.socialProfiles;
        var websites = body.contactInfo.websites;
        
        _employeeDetail.fullName = typeof fullName != 'undefined'
            ? fullName : 'N/A'; 
            
        _employeeDetail.location = typeof location != 'undefined'
            ? location : 'N/A';
            
        _employeeDetail.gender = typeof gender != 'undefined'
            ? gender : 'N/A';
            
        _employeeDetail.photoUrl = typeof photos != 'undefined'
            ? photos[0].url : 'app/assets/images/defaultPerson.png'; //todo - place a default person image (faceless facebook)

        //social media urls we care about
        if(typeof socialProfiles !== 'undefined'){
            _employeeDetail.facebookUrl = socialProfiles.forEach(function(element:any){
                if(element.type === 'facebook'){
                    return element.url;
                }     
                return '';  
            });
            
            _employeeDetail.twitterUrl = socialProfiles.forEach(function(element:any){
                if(element.type === 'twitter'){
                    return element.url;
                }     
                return '';  
            });
            
            _employeeDetail.linkedInUrl = socialProfiles.forEach(function(element:any){
                if(element.type === 'linkedin'){
                    return element.url;
                }     
                return '';  
            });
        }
        
        _employeeDetail.websites = typeof websites != 'undefined'
            ? websites : [];
        
        return _employeeDetail;
        //end hydrate;
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}