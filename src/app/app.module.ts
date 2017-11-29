import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FilterPipe } from './shared/pipes/filter.pipe';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { AppRoutingModule } from './app.routing';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import {ToasterModule, ToasterService} from 'angular2-toaster';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ProductsComponent } from './products/products.component';
import { AuthguardService, ProductsService, AuthService, UserService, AuthinterceptorService } from './shared/services';



@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    FullLayoutComponent,
    LoginComponent,
    UsersComponent,
    UserDetailComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    ToasterModule
  ],
  providers: [UserService,AuthService,ToasterService,ProductsService,AuthguardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthinterceptorService,
      multi:true
    }],


  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
