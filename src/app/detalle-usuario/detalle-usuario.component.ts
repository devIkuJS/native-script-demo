import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { UsuarioService } from '../services/usuario.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'ns-detalle-usuario',
  templateUrl: './detalle-usuario.component.html'
})
export class DetalleUsuarioComponent implements OnInit {

  id_usuario : string;
  imagen: string;
  nombres_completos: string;
  correo: string;

  constructor(private _usuarioService: UsuarioService, private router: RouterExtensions , private route: ActivatedRoute) {

   // let nombreproducto = {nombre:this.route.snapshot.paramMap.get('id')};


   this.id_usuario =  this.route.snapshot.paramMap.get('id');

   }

  ngOnInit(): void {
    this.detalleUsuario();
  }

  onBack(){
    this.router.back();
  }

  detalleUsuario(){

    this._usuarioService.detailUsuario(this.id_usuario).subscribe(response => {
      console.dir(response);

      this.imagen = response["data"]["avatar"];
      this.nombres_completos = response["data"]["first_name"] + " " +response["data"]["last_name"];
      this.correo = response["data"]["email"];

    },
    error =>{
      console.log(error);
    })
  }

}
