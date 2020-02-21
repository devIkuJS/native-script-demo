import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { UsuarioService } from '../services/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../models/usuario';


@Component({
  selector: 'ns-detalle-usuario',
  templateUrl: './detalle-usuario.component.html'
})
export class DetalleUsuarioComponent implements OnInit {


  public usuario: Usuario[] = [];

  public id: string;

  

  constructor(private _usuarioService: UsuarioService, private router: RouterExtensions , private route: ActivatedRoute) {

    // Recibe el parametro id de la vista home 

    this.id =  this.route.snapshot.paramMap.get('id');

   }

  ngOnInit(): void {
    this.detalleUsuario();
  }

  onBack(){
    this.router.back();
  }

  detalleUsuario(){

    this._usuarioService.detailUsuario(this.id).subscribe(response => {
      

      this.usuario = response["data"];

      console.dir(this.usuario);

    },
    error =>{
      console.log(error);
    })
  }

}
