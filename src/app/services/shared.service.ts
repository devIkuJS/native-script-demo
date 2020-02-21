import { Injectable } from '@angular/core';
import {throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {


  errorHandl(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Error lado cliente
      errorMessage = error.error.message;
    } else {
      // Error lado servidor
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }


}
