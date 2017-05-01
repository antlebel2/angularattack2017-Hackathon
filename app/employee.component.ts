import { Component, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeApiPromiseService } from './shared/EmployeeApiPromiseService';
import { EmployeeDto } from './shared/employeeDto';

@Component({
    templateUrl: 'app/employee.component.html',
    providers: [ EmployeeApiPromiseService ]
})

@Injectable()
export class EmployeeComponent {
  private _personDetail:EmployeeDto;
  private _personEmail:any;

  constructor(private _employeePromiseService: EmployeeApiPromiseService){ }

  ngOnInit() {
      this._personDetail = new EmployeeDto();

      this._employeePromiseService.getService()
      .then(personDetail => this._personDetail = personDetail)
      .catch(error => console.log(error));

      this._personEmail = this._employeePromiseService.getQueryParam();
      }
}
