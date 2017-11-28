import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { LoginDataVM } from '../../shared/models/LoginDataVM';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginData: LoginDataVM = new LoginDataVM();

  constructor(private router:Router, private authService:AuthService, private toaster:ToasterService) { }

  ngOnInit() {
  }

  login() {

    this.authService.login(this.loginData).then((result) => {
      this.toaster.pop('success','Logged','Benvenuto!');
      this.router.navigate(['/fulllayout/users']);
    }).catch((error) => {
      console.log(error);
      this.toaster.pop('error','Errore!',error.error.message);
    });


  }

}
