import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PlanificacionesDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PlanificacionesDataProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PlanificacionesDataProvider Provider');
  }
  
  allAsync(filters?: any) {
    let params = new HttpParams().set('id', 'MK-22');
    alert('');
    if (filters) {
      //recorrer las claves del objeto y set a los params
    }

    return this.http.get('api/request', {
      params: params
    }).map((result: any) => {
      console.log(result);
      return result['results'];
    });
    //return this.http.get('https://conduit.productionready.io/api/profiles/eric');

    // return this.http.get(`https://conduit.productionready.io/api/profiles/eric`)
    // .map((res:Response) => res.json());

    // return this.http.get('/api', {
    //   params: params
    // }).map((result: any) => {
    //   alert('');
    //   return result;
    // });
  }

  saveAsync() {
    console.log('guardar en el servidor...');
  }
}
