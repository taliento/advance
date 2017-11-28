import { Injectable } from '@angular/core';
import { ProductDto } from '../models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ProductsService {

  constructor(private _http: HttpClient) { }

  /**
   *
   *
   * @returns {Promise<Array<UserDto>>}
   * @memberof UserService
   */
  public async getAll(skip: number = 0, take: number = 30): Promise<Array<ProductDto>> {

    return this._http.get<Array<ProductDto>>(environment.api + `product/find?skip=${skip}&take=${take}`).toPromise();


  }

  /**
   *
   *
   * @param {number} id
   * @returns {Promise<UserDto>}
   * @memberof UserService
   */
  public async getById(id: number): Promise<ProductDto> {

    return this._http.get<ProductDto>(environment.api + `product/FindByID/${id}`).toPromise();

  }

  /**
   *
   *
   * @param {UserDto} user
   * @returns {Promise<UserDto>}
   * @memberof UserService
   */
  public async update(user: ProductDto): Promise<ProductDto> {

    return this._http.put<ProductDto>(environment.api + `product/Put`,user).toPromise();

  }

}
