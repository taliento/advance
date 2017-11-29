import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AuthVM,LoginDataVM } from '../models';
import {URLSearchParams} from '@angular/http';

@Injectable()
export class AuthService {

  constructor(private _http: HttpClient) { }

  public login(data:LoginDataVM): Promise<AuthVM>{

    return new Promise<AuthVM>((resolve,reject) =>{
      let headers = new HttpHeaders();
      headers.append('content-type','application/x-www-form-urlencoded');

      let body = new URLSearchParams();
      body.append('userName',data.userName);
      body.append('password',data.password);
      body.append('grant_type',data.grant_type);

      let bodyString = body.toString();

      this._http.post<AuthVM>(environment.api+"Token",bodyString,{headers: headers}).subscribe((result) => {
        localStorage.setItem('AuthData', JSON.stringify(result));
        resolve(result);
      },(err)=>reject(err));
    });


  }

  public isLoggedIn(): boolean {
    let token = JSON.parse(localStorage.getItem('AuthData')) as AuthVM;
    return (token && token.access_token != null);
  }

  public logOut(){
    localStorage.clear();
  }
}
