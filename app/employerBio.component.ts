import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    templateUrl: 'app/employerBio.component.html'
})
export class EmployerBioComponent { 
    private _companyEndpoint = '';
    
    constructor(private _http: Http){ }
    
    getProducts() {
        return this._http.get(this._companyEndpoint);
    }
}