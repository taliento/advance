import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FilterPipe } from '../shared/pipes/filter.pipe';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { AppRoutingModule } from './app.routing';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserService } from '../shared/services/user.service';
import { HttpClientModule } from '@angular/common/http';

import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import {ToasterModule, ToasterService} from 'angular2-toaster';



@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    FullLayoutComponent,
    LoginComponent,
    UsersComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ToasterModule
  ],
  providers: [UserService,ToasterService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
