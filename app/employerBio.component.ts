import { Component, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebApiPromiseService } from './shared/webApiPromiseService';
import { EmployerDto } from './shared/employerDto';

@Component({
    templateUrl: 'app/employerBio.component.html',
    providers: [ WebApiPromiseService ]
})

@Injectable()
export class EmployerBioComponent{
    private APIKEY = 'c0402b24ca6234';
    //private domainReference = JSON.parse(localStorage.getItem('company'));
    private _companyDomain = '&domain=google.com';
    private _companyEndpoint = 'https://api.fullcontact.com/v2/company/lookup.json?apiKey=' + this.APIKEY;
    private _companyDetail:EmployerDto;
    
    constructor(private _moviePromiseService: WebApiPromiseService, private route: ActivatedRoute){ }
    
    ngOnInit() {
        //this._companyDomain += this.route.snapshot.queryParams['companyDomain'];
        //console.log(this._companyDomain);
        this._companyEndpoint += this._companyDomain;
        this._moviePromiseService.getService(this._companyEndpoint)
        .then(result => this.hydrate(result))
        .catch(error => console.log(error));
        
        this._companyDetail = new EmployerDto();
    }
    
    private hydrate(data:any) {
        
        this._companyDetail.name = data.organization.name;
        if(data.organization.contactInfo.addresses){
            this._companyDetail.city = data.organization.contactInfo.addresses[0].locality;
            this._companyDetail.stateCode = data.organization.contactInfo.addresses[0].region.code;
            this._companyDetail.address = data.organization.contactInfo.addresses[0].addressLine1;
        }

        if(data.organization.contactInfo.phoneNumbers)
            this._companyDetail.phoneNumber = data.organization.contactInfo.phoneNumbers[0]['number'];

        if(data.logo)
            this._companyDetail.logoPic = data.logo;

        if(data.organization.founded)
            this._companyDetail.founded = data.organization.founded;
        
        if(data.organization.approxEmployees)
            this._companyDetail.numEmployees = data.organization.approxEmployees;

        if(data.organization.overview)
            this._companyDetail.summary = data.organization.overview;
    }
}