import { Component } from '@angular/core';
import {Http} from '@angular/http';

@Component({
    templateUrl: 'app/employee.component.html'
})
export class EmployeeComponent {
  $scope.data = true;
  $scope.social = true;
  $scope.facebook = true;
  $scope.twitter = true;
  $scope.linkedin = true;
}
