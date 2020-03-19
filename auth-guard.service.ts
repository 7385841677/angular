import { ActivatedRouteSnapshot, RouterStateSnapshot, Router,CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from 'src/app/auth.service';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private authService: AuthService, private router : Router){}

    canActivate(route: ActivatedRouteSnapshot, 
                state:RouterStateSnapshot): Observable<boolean> |Promise<boolean> | boolean {

                   return this.authService.isAuthenticate().then(
                        (authenticated: boolean)=>  {
                            if(authenticated){
                                return true;
                            }else{
                                this.router.navigate(['/']);
                            }
                        }
                    );                 
    }

}