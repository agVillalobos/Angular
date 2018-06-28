import { Component, OnInit } from '@angular/core';
import {ContactoUsuario} from '../Models/contacto.usuario'

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public usuario: ContactoUsuario;

  constructor() {
    this.usuario = new ContactoUsuario('','','','');
   }

  ngOnInit() {
  }

  onSubmit(formContacto){
    formContacto.reset();
    console.log("submit lanzadao");
    console.log(this.usuario);
  }

}
