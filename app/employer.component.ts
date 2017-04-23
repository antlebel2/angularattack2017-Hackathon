import { Component, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    templateUrl: 'app/employer.component.html'
})

@Injectable()
export class EmployerComponent{
    private APIKEY = 'c0402b24ca6234';
    private _companyDomain = '&domain=';
    private _companyEndpoint = 'https://api.fullcontact.com/v2/company/lookup.json?apiKey=' + this.APIKEY;
    private _companyDetailJson:any;
    
    constructor(private _http: Http, private route: ActivatedRoute){ 
    }
    
    ngOnInit() {
        this._companyDomain += this.route.snapshot.queryParams['companyDomain'];
        this._companyEndpoint += this._companyDomain;
        this.getCompanyDetail();
    }
    
    private getCompanyDetail() {
        return this._http.get(this._companyEndpoint)
        .map((res:Response) => res.json())
        .subscribe(data => this.companyDetail = data);
    }
    
    companyDetail = {};
}