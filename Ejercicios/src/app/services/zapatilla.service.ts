import {Injectable} from '@angular/core'
import { Zapatilla } from '../Models/zapatilla';


@Injectable()
export class ZapatillaService{
    public zapatillas: Array<Zapatilla>;
    
    constructor(){
        this.zapatillas = [
            new Zapatilla('reebok', 'Reebol', 'blanco', 90, true),
            new Zapatilla('addidas', 'addidas', 'blanco', 30, false),
            new Zapatilla('some', 'some', 'blanco', 30, true),
            new Zapatilla('some', 'some', 'blanco', 30, false)
        ];
    }

    getTexto(){
        return "Hola mundo";
    }

    getZapatillas(): Array<Zapatilla>{
        return this.zapatillas;
    }
}