import { Component } from '@angular/core';
import { Egreso } from '../egreso/egreso.model';
import { EgresoService } from '../egreso/egresoService.service';
import { Ingreso } from '../ingreso/ingreso.model';
import { IngresoService } from '../ingreso/ingresoService.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  tipo: string = 'ingresoOperacion';
  descripcionInput: string = '';
  valorInput: number = 0;

  constructor( private ingresoService: IngresoService, private egresoService: EgresoService ){}

  tipoOperacion( event: any ){
    this.tipo = event.target.value;
  }

  agregarValor(){
    if( this.tipo === 'ingresoOperacion')
      this.ingresoService.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput));
     else  
      this.egresoService.egresos.push(new Egreso(this.descripcionInput, this.valorInput));
    
  }
}
