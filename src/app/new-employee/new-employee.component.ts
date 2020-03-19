import { Component, OnInit, Output,EventEmitter,ViewChild,ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../Employee.model';
import { URL_CONSTANTS } from '../shared/URL_CONSTANTS.model';
import { EmployeeManagenentService } from '../employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-employee',
  templateUrl: './new-Employee.component.html',
  styleUrls: ['./new-Employee.component.css'],
  providers: [EmployeeManagenentService]
})
export class NewEmployeeComponent{
  @Output() newFeatureEmitter = new EventEmitter<string>();
  @Output() newEmployeeEmitter = new EventEmitter<Employee>();
  departments: Array<any>;
  employee: Employee;
  baseUrl:string = URL_CONSTANTS.CREATE_EMPLOYEE_URL;

  @ViewChild('empId') empIdInputRef: ElementRef;
  @ViewChild('empName') empNameInputRef: ElementRef;
  @ViewChild('empDes') empDesInputRef: ElementRef;

  constructor(private http: HttpClient, 
    private employeeManagementService : EmployeeManagenentService,
    private router:Router) {
   
  }
   
  saveEmployee(){
   
    const id_empId=this.empIdInputRef.nativeElement.value;
    const id_empName=this.empNameInputRef.nativeElement.value;
    const id_des=this.empDesInputRef.nativeElement.value;
    this.employee = {
      empId:  id_empId,
      empName:  id_empName,
      empDeign: id_des
    }
    console.log(this.employee);
    this.employeeManagementService.saveEmployee(this.employee);
    this.newFeatureEmitter.emit('DISPLAY_EMPLOYEE');
    this.employeeManagementService.employee.push(this.employee);
    this.router.navigate(['employeeDetails']);
  }
  
}
