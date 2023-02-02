import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoService } from './egresoService.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit{

  egresos: Egreso[] = [];

  @Input() ingresoTotal: number = 0;

  constructor( private egresoService: EgresoService ){}

  ngOnInit(): void {
    this.egresos = this.egresoService.egresos;
  }

  calcularPorcentaje(egreso: Egreso){
    return egreso.valor/this.ingresoTotal;
  }
  
  elimiarEgreso(egreso: Egreso){
    this.egresoService.eliminar(egreso)
  }


}
