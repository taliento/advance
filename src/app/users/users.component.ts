import { Component, OnInit } from "@angular/core";
import { UserDto } from "../../shared/models";
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"]
})
export class UsersComponent implements OnInit {
  users: Array<UserDto> = [];

  p: number = 1;
  pageSize: number = 15;
  total: number = 0;
  skip: number = 0;

  search :string ="";

  constructor(private userService:UserService) {
  }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getAll(this.skip, this.pageSize).then((resp) => {
      this.users = resp;
      this.total = this.users[0].count;
    }).catch();
  }

  pageChanged($event: number) {
    this.p = $event;
    this.skip = ($event -1 ) * this.pageSize;
    this.loadUsers();
  }
}
