import {Component, OnInit, DoCheck, OnDestroy} from '@angular/core'

@Component({
    selector: 'videojuego',
    // template: `
    //     <h2>Componente de videojuegos</h2>
    //     <ul>
    //         <li>GTA</li>
    //         <li>POF</li>
    //         <li>Tekken</li>
    //         <li>GTA</li>
    //     </ul>
    // `
    templateUrl: './videojuego.component.html'
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
    public titulo:string;
    public listado: string;

    constructor(){
        this.titulo= "Componente de videojuegos";
        this.listado= "listado de videojuegos mas populares";
        console.log("Se ha cargado el compoenente");
    }

    ngOnInit(){
        console.log("OnInit ejecutado");
    }

    ngDoCheck(){
        console.log("Do check ejecutado");
    }

    ngOnDestroy(){
        console.log("OnDestroy ejecutado");
    }

    cambiarTitulo(){
        this.titulo="Nuevo titulo del component";
    }
}