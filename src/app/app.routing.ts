import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { UsersComponent } from './users/users.component';
import { NgModule, Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

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
      },
      {
        path: "user/:id",
        component: UserDetailComponent
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
