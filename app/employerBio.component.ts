import { Component, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployerDto } from './shared/employerDto';

@Component({
    templateUrl: 'app/employerBio.component.html'
})

@Injectable()
export class EmployerBioComponent{
    
    constructor(private route: ActivatedRoute){ }

}