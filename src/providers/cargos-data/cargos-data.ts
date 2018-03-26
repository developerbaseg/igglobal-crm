import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CargosDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CargosDataProvider {

  constructor(public http: HttpClient) {
    //console.log('Constructor CargosDataProvider');
  }
  //--------------allAsync--------------
  allAsync(filters?: any) {
    let params = new HttpParams().set('id', 'MK-1');
    if (filters) {
      //recorrer las claves del objeto y set a los params
    }
    return this.http.get('api/request', {
      params: params
    }).map((result: any) => {
      console.log(result);
      return result;
    });
  }
//--------------oneAsync--------------
// oneAsync(filters?: any) {
//   let params = new HttpParams().set('id', 'MK-??');

//   if (filters) {
//     Object.keys(filters).forEach(function (key) {
//       params = params.set(key, filters[key]);
//     });
//   }
//   return this.http.get('api/request', {
//     params: params
//   }).map((result: any) => {
//     console.log(result);
//     return result.data;
//   });
// }
//--------------saveAsync--------------
  saveAsync() {
    console.log('guardar en el servidor...');
  }
}
