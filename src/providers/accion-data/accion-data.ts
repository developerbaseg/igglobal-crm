import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AccionDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AccionDataProvider {

  constructor(public http: HttpClient) {
    //console.log('Hello AccionDataProvider Provider');
  }
  //--------------allAsync--------------
  allAsync(filters?: any) {
    let params = new HttpParams().set('id', 'MK-12');
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

}