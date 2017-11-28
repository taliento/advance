import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDto } from '../../shared/models/UserDto';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';
import { ToasterService} from 'angular2-toaster';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: UserDto = new UserDto();

  private idUser: number;

  constructor(private _route:ActivatedRoute, private userService:UserService, private router:Router, private toaster:ToasterService) { }

  ngOnInit() {
    this._route.params.subscribe((param) => {
      this.idUser = param["id"];
      this.userService.getById(this.idUser).then(result => this.user = result).catch();
    });
  }

  update() {
    this.userService.update(this.user).then((result) => {
      console.log("updated!! "+result);
      this.toaster.pop('success','Updated!',result.name);
      this.router.navigate(['/fulllayout/users']);
    }).catch((err) => {
      console.log("error!! "+JSON.stringify(err));
      this.toaster.pop('error','Error!',err.error.message);
    });
  }

}
