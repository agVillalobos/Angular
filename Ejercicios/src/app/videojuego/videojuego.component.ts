import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {
    public titulo: string;
    public listado: string;

    constructor() {
        this.titulo = "Componente de videojuegos";
        this.listado = "Listado de los juegos:";
        // console.log("se ha cargado el componente");
    }

    ngOnInit() {
        // console.log("OnInit iniciado");
    }

    ngDoCheck() {
        // console.log("Do check ejecutad");
    }

    ngOnDestroy(){
        // console.log("Ondestroy ejecutado");
    }

    cambiarTitulo() {
        this.titulo = "Nuevo Titulo del componente";
    }
}