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
<<<<<<< HEAD
        localStorage.setItem('company', JSON.stringify({companyDomain: this._companyDomain}));
    }
    
    private hydrate(data:any) {
        
        this._companyDetail.name = data.organization.name;
        if(data.organization.contactInfo.addresses){
            this._companyDetail.city = data.organization.contactInfo.addresses[0].locality;
            this._companyDetail.stateCode = data.organization.contactInfo.addresses[0].region.code;
        }
        if(data.organization.contactInfo.phoneNumbers)
            this._companyDetail.phoneNumber = data.organization.contactInfo.phoneNumbers[0]['number'];
        if(data.logo)
            this._companyDetail.logoPic = data.logo;
=======
        this._employerPromiseService.getService()
        .then(companyDetail => this._companyDetail = companyDetail)
        .catch(error => console.log(error));
>>>>>>> 6663159d6b43581f2c691ab67ae641e3c80ffabb
    }
}