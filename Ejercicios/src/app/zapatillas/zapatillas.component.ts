import {Component, OnInit} from '@angular/core'
import{Zapatilla} from '../Models/zapatilla'
import {ZapatillaService} from '../services/zapatilla.service'

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    providers: [ZapatillaService]
})

export class ZapatillasComponent implements OnInit{
    public titulo: string ="componente de zapatillas";
    public zapatillas: Array<Zapatilla>;
    public marcas: String[];
    public color: string;
    public mi_marca: string;

    constructor(
        private _zapatillaService: ZapatillaService
    ){
        this.mi_marca = "FILE";
        this.color = "red";
        this.marcas = new Array();
    }

    ngOnInit(){
        this.zapatillas = this._zapatillaService.getZapatillas();
        this.getMarcas();
    }

    getMarcas(){
        this.zapatillas.forEach((zapatilla, index) => {
            if(this.marcas.indexOf(zapatilla.marca) < 0){
                this.marcas.push(zapatilla.marca);
            }
        });
        console.log(this.marcas);
    }

    getMarca(){
        alert(this.mi_marca);
    }

    addMarca(){
        this.marcas.push(this.mi_marca);
    }

    borrarMarca(index){
        //delete this.marcas[index];
        this.marcas.splice(index, 1);
    }

    onBlur(){
        console.log("Has salido del input");
    }

    mostrarPalabra(){
        console.log(this.mi_marca);
    }
}