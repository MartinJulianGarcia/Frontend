import { Articulo } from "./Articulo";
import { Usuario } from "./Usuario";


export class Compra {
    private id: number;
    private fecha: number;
    private importe: number;
    private mediodepago: string;
    private Arts: Array<Articulo>;
    private idusuario:number;

    constructor(mediodepago: string, id: number, importe: number, arts: Array<Articulo>, iduser:number, fecha: number) {


        this.fecha=fecha;
        this.importe=importe;
        this.mediodepago =mediodepago;
        this.id=id;
        this.Arts=arts;
        this.idusuario=iduser;


        //compras= new ArrayList<>();
    }

    // Métodos getter y setter para acceder a los atributos privados

  

    getmediodepago(): string {
        return this.mediodepago;
    }

    setmediodepago(nombre: string): void {
        this.mediodepago = nombre;
    }

    getId(): number {
        return this.id;
    }

    setId(id: number): void {
        this.id= id;
    }


    getImporte(): number {
        return this.importe;
    }

    setImporte(importe: number): void {
        this.importe = importe;
    }

    getArts(): Array<Articulo> {
        return this.Arts;
    }

    setArts(arts: Array<Articulo>): void {
        this.Arts = arts;
    }

    getUsuario(): number {
        return this.idusuario;
    }

    setUsuario(user: number): void {
        this.idusuario = user;
    }

    
    getfecha(): number {
        return this.fecha;
    }

    setfecha(fecha: number): void {
        this.fecha = fecha;
    }

   //Tienepermiso():boolean {
   //     return this.email.endsWith('@supervisor.com');
   // }
}