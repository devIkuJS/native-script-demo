import { Component, OnInit } from "@angular/core";
import { UsuarioService } from '../services/usuario.service';
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    listaPosts: any = [];
   


    constructor(private _usuarioService: UsuarioService , private router: RouterExtensions) {
        // Use the component constructor to inject providers.}

    }

    ngOnInit(): void {
        // Init your component properties here.
        this.listaUsuario();
    }

    listaUsuario(){
       this._usuarioService.getUsuarios().subscribe(response => {
            
            this.listaPosts = response["data"]; 

        }, error =>{
            console.log(error);
        })
        
       
       
    }

    onTap(id){
        console.log(id);
   
        this.router.navigate(["/detalle-usuario", id]);
        
    }

   

    
}
