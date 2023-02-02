import { Ingreso } from "./ingreso.model";

export class IngresoService{

    ingresos: Ingreso[] = [ new Ingreso('Salario', 1500), new Ingreso('Venta Auto', 5000) ];

    eliminar( ingreso: Ingreso ){
        const indice = this.ingresos.indexOf( ingreso );
        this.ingresos.splice( indice, 1 );
    }

}