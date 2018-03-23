import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';


@Injectable()
export class IGGlobalInterceptor implements HttpInterceptor {
   constructor() { }

   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

       console.log("intercepted request ... ");

       // Clone the request to add the new header.
       //.set("headerName", "headerValue")
       const authReq = req.clone({
            headers: req.headers
                .set('Authorization','Bearer DJQBq1WSrUboXj0TOD2RrFaEKKGYL-Hmq7q5pgQIy_v3eyNyv0QlgVSca5zFaAf3cb0IzxZZJfDX8QhQWRQCl93Q4d5Ojtx9JfQ4kQOp42EbwW_PfIaSL-klbbDVwbyp9S7ikER1fl4DJtrvM4jjff-ppGF4j-hSDudSm2TxYOOuUkNyRTOtQ3rVJMoWalxh5HxcKtTgu3fMfgKBu1a0rw37s61_qgId8BY2wzA5a-nEIKc8fRQvph3Ero5n5KcqOvHi6RyBQAQStIgeSWiBVV91rsDTLfMRfoOq_99xAlqC5Dnk37Pz6Yy5yOWf5JHXblCq-X2O8k850j_u0_zBcICFmILgxCQO0iVT7fba3YHqSLNB1iNHZNRZz7zVv_oKV2G1LwZMRud1joehfgPslEWYCjpQM3ZQxMfiKeFvJDNqbqbIS_LoNkYUMTD0R2doRPpQcUJ4TfXkOIxwAWrGTQ'),
            params: req.params
                .set('cid','DATOS_DESA'),
            url: 'http://10.12.13.7:9292/' + req.url
        });

       console.log("Sending request with new header now ...");

       //send the newly created request
       return next.handle(authReq)
           .catch((error, caught) => {
               //intercept the respons error and displace it to the console
               console.log("Error Occurred");
               console.log(error);
               console.log(caught);
               //return the error to the method that called it
               return Observable.throw(error);
           }) as any;
   }
}