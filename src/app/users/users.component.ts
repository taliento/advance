import { Component, OnInit } from "@angular/core";
import { UserDto } from "../../shared/models";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"]
})
export class UsersComponent implements OnInit {
  users: Array<UserDto> = [];

  search: string = "";

  constructor() {
    this.users = [
      new UserDto({
        id: "1",
        name: "dade",
        surname: "talents",
        email: "dade.talents@mail.it"
      }),
      new UserDto({
        id: "1",
        name: "dade",
        surname: "talents",
        email: "dade.talents@mail.it"
      }),
      new UserDto({
        id: "1",
        name: "dade",
        surname: "talents",
        email: "dade.talents@mail.it"
      }),
      new UserDto({
        id: "1",
        name: "dade",
        surname: "talents",
        email: "dade.talents@mail.it"
      })
    ];
  }

  ngOnInit() {}
}
