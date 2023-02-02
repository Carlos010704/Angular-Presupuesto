import { Component } from '@angular/core';
import { Egreso } from './egreso/egreso.model';
import { EgresoService } from './egreso/egresoService.service';
import { Ingreso } from './ingreso/ingreso.model';
import { IngresoService } from './ingreso/ingresoService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'presupuesto-app';

  ingresos: Ingreso[] = [];
  egresos: Egreso[] = [];

  constructor( private ingresoService: IngresoService, private egresoService: EgresoService ){
    this.ingresos = this.ingresoService.ingresos;
    this.egresos = this.egresoService.egresos;
  }

  getIngresoTotal(){
    let ingresoTotal:number = 0;
    this.ingresos.forEach( ingreso => {
      ingresoTotal += ingreso.valor;
    });
    return ingresoTotal;
  }

  getEgresoTotal(){
    let egresoTotal = 0;
    this.egresos.forEach( egreso => {
      egresoTotal += egreso.valor;
    });
    return egresoTotal;
  }

  getPresupuesto(){
    return this.getIngresoTotal() - this.getEgresoTotal();
  }
  
  getPorcentajeTotal(){
    return this.getEgresoTotal() / this.getIngresoTotal();
  }

}
