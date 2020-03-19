import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { DropDownDirective } from '../app/shared/dropdown.directive';
import { EmployeeManagenentService } from './employee.service';
import { Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from 'auth-guard.service';
import { AuthService } from './auth.service';

const appRoutes : Routes = [
  { path: '', component: LoginComponent},
  { path: 'newemployee', canActivate: [AuthGuard], component: NewEmployeeComponent},
  { path: 'employeeDetails', component: EmployeeDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeeDetailsComponent,
    NewEmployeeComponent,
    DropDownDirective,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
 ],
  providers: [EmployeeManagenentService,AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
