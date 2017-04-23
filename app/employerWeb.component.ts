import { Component, Injectable } from '@angular/core';
import { EmployerApiPromiseService } from './shared/employerApiPromiseService';
import { EmployerDto } from './shared/employerDto';

@Component({
    templateUrl: 'app/employerWeb.component.html',
    providers: [ EmployerApiPromiseService ]
})

@Injectable()
export class EmployerWebComponent { 
    private _companyDetail:EmployerDto;
    private _companyDomain:any;
    
    constructor(private _employerPromiseService: EmployerApiPromiseService){ }
    
    ngOnInit() {
        this._companyDetail = new EmployerDto();

        this._employerPromiseService.getService()
        .then(companyDetail => this._companyDetail = companyDetail)
        .catch(error => console.log(error));
        
        this._companyDomain = this._employerPromiseService.getQueryParam();
    }
}