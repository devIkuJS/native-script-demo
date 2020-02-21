import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { SharedService } from './shared.service';
import { URL_API} from '../config/config';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  

  constructor(private http: HttpClient , private sharedService: SharedService) {  }


  getUsuarios(){
   return this.http.get<Usuario[]>(`${URL_API}users?page=2`).pipe(retry(1),catchError(this.sharedService.errorHandl));
   
  }

  detailUsuario(id : string){
    return this.http.get<Usuario[]>(`${URL_API}users/${id}`).pipe(retry(1),catchError(this.sharedService.errorHandl));
  }



  
 
}
