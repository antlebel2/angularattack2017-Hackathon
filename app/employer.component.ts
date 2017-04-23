import { Component, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployerApiPromiseService } from './shared/employerApiPromiseService';
import { EmployerDto } from './shared/employerDto';

@Component({
    templateUrl: 'app/employer.component.html',
    providers: [ EmployerApiPromiseService ]
})

@Injectable()
export class EmployerComponent{
    private _companyDetail:EmployerDto;
    
    constructor(private _employerPromiseService: EmployerApiPromiseService){ }
    
    ngOnInit() {
        this._companyDetail = new EmployerDto();

        this._employerPromiseService.getService()
        .then(companyDetail => this._companyDetail = companyDetail)
        .catch(error => console.log(error));
    }
}