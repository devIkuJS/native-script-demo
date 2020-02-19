import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    public variable_entorno: string;
   


    constructor() {
        // Use the component constructor to inject providers.}
        this.variable_entorno = "Mi variable";
        console.log("esta es la variable de entorno " + this.variable_entorno)
        console.dir({
            type: "Apple",
            color: "Red"
          })


    

    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    
}
