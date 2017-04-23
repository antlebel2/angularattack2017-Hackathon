import { Component, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebApiPromiseService } from './shared/webApiPromiseService';
import { EmployerDto } from './shared/employerDto';

@Component({
    templateUrl: 'app/employer.component.html',
    providers: [ WebApiPromiseService ]
})

@Injectable()
export class EmployerComponent{
    private APIKEY = 'c0402b24ca6234';
    private _companyDomain = '&domain=';
    private _companyEndpoint = 'https://api.fullcontact.com/v2/company/lookup.json?apiKey=' + this.APIKEY;
    private _companyDetail:EmployerDto;
    
    constructor(private _moviePromiseService: WebApiPromiseService, private route: ActivatedRoute){ }
    
    ngOnInit() {
        this._companyDomain += this.route.snapshot.queryParams['companyDomain'];
        this._companyEndpoint += this._companyDomain;
        this._moviePromiseService.getService(this._companyEndpoint)
        .then(result => this.hydrate(result))
        .catch(error => console.log(error));
        
        this._companyDetail = new EmployerDto();
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
    }
}