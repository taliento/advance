import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { UsersComponent } from './users/users.component';
import { NgModule, Component } from '@angular/core';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: "",
    redirectTo:"fulllayout/users",
    pathMatch: "prefix"
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "fulllayout",
    component: FullLayoutComponent,
    children: [
      {
        path: "users",
        component: UsersComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
