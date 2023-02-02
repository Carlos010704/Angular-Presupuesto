import { Egreso } from "./egreso.model";

export class EgresoService{

    egresos: Egreso[] = [ new Egreso('Ropa', 200), new Egreso('viaje', 600) ];

    eliminar(egreso: Egreso){
        const indice = this.egresos.indexOf(egreso);
        this.egresos.splice(indice, 1);
    }

}