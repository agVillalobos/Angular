import { Component } from '@angular/core';
import { Configuracion } from './Models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'master de JS';
  public mostrar_videojuegos: boolean = true;
  public descripcion: string;
  public config;

  constructor() {
    this.config = Configuracion;
    this.title = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;
  }

  ocultarV(value: boolean) {
    this.mostrar_videojuegos = value;
  }
}
