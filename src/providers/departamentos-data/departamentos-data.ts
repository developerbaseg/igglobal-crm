import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DepartamentosDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DepartamentosDataProvider {

  constructor(public http: HttpClient) {
    //console.log('Hello CargosDataProvider Provider');
  }
  //--------------allAsync--------------
  allAsync(filters?: any) {
    let params = new HttpParams().set('id', 'MK-3');
    //alert('Alert de Departamentos-Data');
    if (filters) {
      //recorrer las claves del objeto y set a los params
    }
    return this.http.get('api/request', {
      params: params
    }).map((result: any) => {
      console.log(result);
      return result;
      //return result['results'];
    });
  }
  //--------------saveAsync--------------
  saveAsync() {
    console.log('guardar en el servidor...');
  }
}
