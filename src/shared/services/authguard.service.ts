import {CanActivate, RouterStateSnapshot,  ActivatedRouteSnapshot} from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthguardService implements CanActivate{

  constructor(private authService:AuthService, private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {

    return new Promise<boolean>((resolve,reject) => {
      try {
        let isLogged =this.authService.isLoggedIn();
        if(!isLogged) {
          this.router.navigate(['/login']);
          resolve(isLogged)
          return;
        }
        resolve(this.authService.isLoggedIn());
      } catch (error) {
        reject(error);
      }

    });

  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise<boolean>((resolve,reject) => {
      try {
        let isLogged =this.authService.isLoggedIn();
        if(!isLogged) {
          this.router.navigate(['/login']);
          resolve(isLogged)
          return;
        }
        resolve(this.authService.isLoggedIn());
      } catch (error) {
        reject(error);
      }

    });
  }

}
