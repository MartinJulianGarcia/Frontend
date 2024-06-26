import { Articulo } from "./Articulo";
import { Usuario } from "./Usuario";


export class Compra {
    private id: number;
    private fecha: Date;
    private importe: number;
    private mediodepago: string;
    private Arts: Array<Articulo>;
    private usuario:Usuario;

    constructor(mediodepago: string, id: number, importe: number, arts: Array<Articulo>, user:Usuario, fecha: Date) {


        this.fecha=fecha;
        this.importe=importe;
        this.mediodepago =mediodepago;
        this.id=id;
        this.Arts=arts;
        this.usuario=user;


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

    getUsuario(): Usuario {
        return this.usuario;
    }

    setUsuario(user: Usuario): void {
        this.usuario = user;
    }

    
    getfecha(): Date {
        return this.fecha;
    }

    setfecha(fecha: Date): void {
        this.fecha = fecha;
    }

   //Tienepermiso():boolean {
   //     return this.email.endsWith('@supervisor.com');
   // }
}