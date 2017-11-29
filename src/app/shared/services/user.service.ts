import { Injectable } from '@angular/core';
import { UserDto } from '../models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class UserService {

  private users = [
    new UserDto({
      id: "1",
      name: "dade",
      surname: "talents",
      email: "dade.talents@mail.it"
    }),
    new UserDto({
      id: "2",
      name: "dade2",
      surname: "talents2",
      email: "dade.talents@mail.it2"
    }),
    new UserDto({
      id: "3",
      name: "dade3",
      surname: "talents3",
      email: "dade.talents@mail.it3"
    }),
    new UserDto({
      id: "4",
      name: "dade4",
      surname: "talents4",
      email: "dade.talents@mail.it4"
    })
  ];

  constructor(private _http: HttpClient) { }

  /**
   *
   *
   * @returns {Promise<Array<UserDto>>}
   * @memberof UserService
   */
  public async getAllMock(): Promise<Array<UserDto>> {

    return new Promise<Array<UserDto>>((resolve,reject) => {
      try {
        resolve(this.users);
      } catch (error) {
        reject(error);
      }

    });

  }

  /**
   *
   *
   * @returns {Promise<Array<UserDto>>}
   * @memberof UserService
   */
  public async getAll(skip: number = 0, take: number = 30): Promise<Array<UserDto>> {

    return this._http.get<Array<UserDto>>(environment.api + `User/Find?skip=${skip}&take=${take}`).toPromise();


  }

  public async find(txt: string, skip: number = 0, take: number = 30): Promise<Array<UserDto>> {
    return this._http.get<Array<UserDto>>(environment.api + `User/Find?skip=${skip}&take=${take}&search=${txt}`).toPromise();
  }

  /**
   *
   *
   * @param {number} id
   * @returns {Promise<UserDto>}
   * @memberof UserService
   */
  public async getByIdMock(id: number): Promise<UserDto> {

    return new Promise<UserDto>((resolve,reject) => {
      try {
        resolve(this.users.find(xx => xx.id == id));
      } catch (error) {
        reject(error);
      }

    });

  }

  /**
   *
   *
   * @param {number} id
   * @returns {Promise<UserDto>}
   * @memberof UserService
   */
  public async getById(id: number): Promise<UserDto> {

    return this._http.get<UserDto>(environment.api + `User/FindByID/${id}`).toPromise();

  }

  /**
   *
   *
   * @param {UserDto} user
   * @returns {Array<UserDto>}
   * @memberof UserService
   */
  insert(user:UserDto): Array<UserDto> {
    this.users.push(user);
    return this.users
  }

  /**
   *
   *
   * @param {UserDto} user
   * @returns {Promise<UserDto>}
   * @memberof UserService
   */
  public async update(user: UserDto): Promise<UserDto> {

    return this._http.put<UserDto>(environment.api + `User/Put`,user).toPromise();

  }

}
