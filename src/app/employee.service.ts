import { Employee } from './Employee.model';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { URL_CONSTANTS } from './shared/URL_CONSTANTS.model';

@Injectable()
export class EmployeeManagenentService{
  
  createBaseUrl:string = URL_CONSTANTS.CREATE_EMPLOYEE_URL;
  deleteUrl: string = URL_CONSTANTS.DELETE_EMPLOYEE_URL;
  getBaseUrl: string = URL_CONSTANTS.GET_EMPLOYEE_URL;
  employee : Employee[]; 
 
  constructor(private http:HttpClient) {
    this.getEmployee();
  }
  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
          responseType: 'text' as 'json'
      })
    };

    getEmployee(){
      this.http.get(this.getBaseUrl).subscribe((res : any)=>{
        this.employee = res;
        return this.employee;
    });
    return this.employee;
    }
    saveEmployee(employee: Employee){
        console.log("In employee.service.ts");
        const req = this.http.post(this.createBaseUrl,employee,{responseType: 'text'})
          .subscribe(
            (response: any) => {
              console.log("save employee response =");
              console.log(JSON.stringify(response))
          }, 
          (error: any) => {
              console.log("save employee error =");
              console.log(JSON.stringify(error))
          });
      }

    deleteEmployee(id:String){
      console.log("In employee.service.ts delete()");
      this.http.delete(this.deleteUrl+"/" + id,this.httpOptions)
     .subscribe(
        (response: any) => {
          console.log("delete employee response =");
          console.log(JSON.stringify(response))
       }, 
        (error: any) => {
          console.log("delete employee error =");
          console.log(JSON.stringify(error))
       });
      
    }


   

    
}