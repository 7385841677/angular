import { User } from '../app/shared/User.model';
import { HttpClient } from '@angular/common/http';
import { URL_CONSTANTS } from '../app/shared/URL_CONSTANTS.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService{
    loggedIn = false;

    loginUrl: string = URL_CONSTANTS.LOGIN_URL;
    constructor(private http: HttpClient, private router:Router){

    }
    login(user:User){
        const req =  this.http.post(this.loginUrl,user,{responseType: 'text'})
            .subscribe(
                (response: any) => {
                  console.log("lOGIN response =");
                  console.log(JSON.stringify(response))
              }, 
              (error: any) => {
                  console.log("login error =");
                  console.log(JSON.stringify(error))
              });
        
        this.loggedIn=true;
        this.router.navigate(['employeeDetails']);
    }
    logout(){
        this.loggedIn=false;
    }
    isAuthenticate(){
        const promise= new Promise(
        (resolve,reject) =>{
            setTimeout(() => {
                resolve(this.loggedIn);
            }, 800);
        }
        )
        return promise;
    }
}