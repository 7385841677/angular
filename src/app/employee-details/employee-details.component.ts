import { Component, OnInit, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../Employee.model';
import { URL_CONSTANTS } from '../shared/URL_CONSTANTS.model';
import { EmployeeManagenentService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
  providers: [EmployeeManagenentService]
})
export class EmployeeDetailsComponent {

  departments: Array<any>;
  title = 'test-rest-api';
  myJSON = '';
  employee : Employee[]; 
  baseUrl: string = URL_CONSTANTS.GET_EMPLOYEE_URL;
  
  constructor(private http : HttpClient,private employeeManagenentService: EmployeeManagenentService) {  
    this.http.get(this.baseUrl).subscribe((res : any)=>{
      this.employeeManagenentService.employee=res;
      });
   }

  deleteEmployee(id:string){
    console.log("Deletion ID="+ id);
    this.employeeManagenentService.deleteEmployee(id);
    this.employeeManagenentService.employee = this.employeeManagenentService.employee.filter( e => e.empId !== id);
  }
}
