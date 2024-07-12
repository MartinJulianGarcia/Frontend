import { Articulo } from "./Articulo";
import { Usuario } from "./Usuario";



export class Compra {
    private id?: number;
    private importe: number;
    private articulos: Array<Articulo>;
    private nombreusuario:String;
    

    // los nombres deben ser los mismos que tienen en el backend, no importa tanto el orden pero si que sea el mismo nombre


    constructor(  importe: number,  nombreusuario: string, arts: Array<Articulo>,) {


        this.importe=importe;
       // this.id=id;
         this.nombreusuario=nombreusuario;
        this.articulos=arts;
        


        //compras= new ArrayList<>();
    }

    static fromJson(json: any, c:Compra | undefined): Compra {
        
        c= new Compra(
          
          
          json.importe,
          json.nombredeusuario,
          json.articulos
          
        );
     c.setId(json.id);
     return c;

      }


    // Métodos getter y setter para acceder a los atributos privados

  

    getId(): number | undefined {
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
        return this.articulos;
    }

    setArts(arts: Array<Articulo>): void {
        this.articulos = arts;
    }

    getUsuario(): String {
        return this.nombreusuario;
    }

    setUsuario(nombreusuario: string): void {
        this.nombreusuario = nombreusuario;
    }

    
    //getfecha(): number {
    //    return this.fecha;
    //}

    //setfecha(fecha: number): void {
    //    this.fecha = fecha;
    //}

   //Tienepermiso():boolean {
   //     return this.email.endsWith('@supervisor.com');
   // }
}