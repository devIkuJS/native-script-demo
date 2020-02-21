import { Component, OnInit } from "@angular/core";
import { UsuarioService } from '../services/usuario.service';
import { RouterExtensions } from "nativescript-angular/router";
import { Usuario } from '../models/usuario';

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    public listaUsuarios:  Usuario[] = [];
   


    constructor(private _usuarioService: UsuarioService , private router: RouterExtensions) {
     }
        // Use the component constructor to inject providers.}


    ngOnInit(): void {
        // Init your component properties here.
        this.listarUsuario();
    }

    listarUsuario() : void{
       this._usuarioService.getUsuarios().subscribe(response => {
            
            this.listaUsuarios = response["data"]; 

        }, error =>{
            console.log(error);
        })
        
       
       
    }

    onTap(id : string) : void{

       this.router.navigate(["/detalle-usuario", id]);
        
    }

   

    
}
