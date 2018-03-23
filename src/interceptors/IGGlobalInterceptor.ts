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
                .set('Authorization','Bearer isLEx2vUwdgjOSPynUt5zZ2WzQ47vFN_gNYF_NXVJpboFKBKZRuFRv9JDaj5WpaiBTFt5gnIaPHgf4taUNLT44bzFAI4qLjTPMfzPznZRFwXQjzmqRFzsOAOlORZV6XMczAdZ6DPzmn96G_C5itgRhh5lq644F21RHlE8ZT_CFJcNXmOnBB1Gt8Iqub2nZOfeROzxkzFqOofKIA69t7mSKrj0ZVe7_Vm2PDtPSKaqhSz6Si-I2GZaXduZgqVqTaR5K80QxpNt2C9u7jYEqfPNiWSexCrR5WKxeAdbdmz9-fnBeuqPXNUFmu4uorjelYBHIQgZxDpyWAf1ahkmyAeQMxQJgvG_5KTRXbDuDu12E7vhzcoJgI20xAhI1dAoFs8R2YgbsI-HnOQhnAL8A7VLJfhLRWEHCI9qsDlU8TWwvlx7hW_oL8I1oJNUOIeRAd124576XxQNIMmqCMfSJ7PJg'),
            params: req.params
                .set('cid','DATOS_DESA'),
            url: 'http://73f4ad63.ngrok.io/' + req.url
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