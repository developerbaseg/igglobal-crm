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
    console.log('Constructor CuentasDataProvider');
  }
  //--------------allAsync--------------
  allAsync(filters?: any) {
    let params = new HttpParams().set('id', 'MK-22').set('columns','NoInterno,RazonSocial,_state_code,_state_text,_state_color');
    if (filters) {
      //recorrer las claves del objeto y set a los params
    }
    return this.http.get('api/request', {
      params: params
    }).map((result: any) => {
      console.log(result);
      return result.data;
    });
  }
  //--------------oneAsync--------------
  oneAsync(filters?: any) {
    let params = new HttpParams().set('id', 'MK-52');

    if (filters) {
      Object.keys(filters).forEach(function (key) {
        params = params.set(key, filters[key]);
      });
    }
    return this.http.get('api/request', {
      params: params
    }).map((result: any) => {
      console.log(result);
      return result.data;
    });
  }
  //--------------saveAsync--------------
  saveAsync() {
    console.log('guardar en el servidor...');
  }
}
