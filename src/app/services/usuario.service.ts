import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import {throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  public dominio: string;

  constructor(private http: HttpClient) { 
    this.dominio = "https://reqres.in/api/";
  }


  getUsuarios(){
   return this.http.get<Object[]>(`${this.dominio}users?page=2`).pipe(retry(1),catchError(this.errorHandl));
   
  }

  detailUsuario(id){
    return this.http.get<Object[]>(`${this.dominio}users/${id}`).pipe(retry(1),catchError(this.errorHandl));
  }



  
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
