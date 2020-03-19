import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { AuthService } from '../auth.service';
import { User} from '../shared/User.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild('userName') userNameRef: ElementRef;
  @ViewChild('password') passwardRef: ElementRef;

  loggedInStatus=false;
  user : User;
  constructor(private authService: AuthService){
  }
  setLoggedInStatus(){
    this.loggedInStatus=this.authService.loggedIn;
  } 
  login(){
    const id_userName=this.userNameRef.nativeElement.value;
    const id_passward=this.passwardRef.nativeElement.value;
    this.user={
      userName : id_userName,
      password : id_passward
    };
    this.authService.login(this.user);
  }
  logout(){
    this.authService.logout();
  }

}
