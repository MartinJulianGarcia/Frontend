import { Compra } from "./Compra";

export class Articulo {
    private nombre: string;
    private tipo: string;
    private precio: number;
    private id?: number;
    private stock: number;
    private temporada: string;
    comprasconesteart: Array<Compra>;

    constructor( nombre: string, stock: number, precio: number, temporada: string, tipo: string, comprasconesteart:Array<Compra>=[]  ) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.precio = precio;
      //  this.id = id;
        this.stock = stock;
        this.temporada = temporada;

        this.comprasconesteart= comprasconesteart;
        
    }

    static fromJson(json: any): Articulo {
        return new Articulo(
         // json.id,
          json.nombre,
          json.precio,
          json.stock,
          json.temporada,
          json.tipo
        );
      }
   
    // Métodos getter y setter para acceder a los atributos privados

    getNombre(): string {
        return this.nombre;
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    getTipo(): string {
        return this.tipo;
    }

    setTipo(tipo: string): void {
        this.tipo = tipo;
    }

    getprecio(): number {
        return this.precio;
    }

    setprecio(precio: number): void {
        this.precio = precio;
    }

    getId(): number | undefined {
        return this.id;
    }

    setId(id: number): void {
        this.id = id;
    }

    getStock(): number {
        return this.stock;
    }

    setStock(stock: number): void {
        this.stock = stock;
    }

    getTemporada(): string {
        return this.temporada;
    }

    setTemporada(temporada: string): void {
        this.temporada = temporada;
    }

    puedeMostrarse():boolean {
        return this.stock > 0;
    }
}