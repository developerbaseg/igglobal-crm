import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CuentasDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CuentasDataProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CuentasDataProvider Provider');
  }

  allAsync(filters?: any) {
    let params = new HttpParams().set('id', 'MK-22');
    if (filters) {
      //recorrer las claves del objeto y set a los params
    }

    return this.http.get('api/request', {
      params: params
    }).map((result: any) => {
      console.log(result);
      return result['results'];
    });

  }

}
