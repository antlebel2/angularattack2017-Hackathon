import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { EmployeeDto } from './employeeDto';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmployeeApiPromiseService {
    private APIKEY = 'c0402b24ca6234';
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
        if(!body)
            return {};
            
        //hydrate - todo null if moved to function??!!??
        var _employeeDetail = new EmployeeDto();

        return _employeeDetail;
        //end hydrate;
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}