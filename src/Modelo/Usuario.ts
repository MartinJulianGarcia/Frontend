import { Compra } from "./Compra";


export class Usuario {
    private nombre: string;
    private contraseña: string;
    private email: string;
    private compras: Array<Compra>;
    private id: number;

    constructor(nombre: string, contra: string, email: string, compras: Array<Compra>=[], id:number=0) {
        this.nombre = nombre;
        this.contraseña = contra;
        this.email = email;
        this.compras= compras;
        this.id=id;

    }

    // Métodos getter y setter para acceder a los atributos privados

    getNombre(): string {
        return this.nombre;
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    getContra(): string {
        return this.contraseña;
    }

    setContra(contra: string): void {
        this.contraseña= contra;
    }

    getTipo(): string {
        return this.contraseña;
    }

    setTipo(contraseña: string): void {
        this.contraseña= contraseña;
    }


    getEmail(): string {
        return this.email;
    }

    setEmail(email: string): void {
        this.email = email;
    }

    getId(): number {
        return this.id;
    }

    setId(id:number ): void {
        this.id = id;
    }

    Tienepermiso():boolean {
        return this.email.endsWith('@supervisor.com');
    }
}