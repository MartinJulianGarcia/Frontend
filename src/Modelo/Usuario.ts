import { Compra } from "./Compra";


export class Usuario {
    private nombre: string;
    private contraseña: string;
    private email: string;
    private compras: Array<Compra>;

    constructor(nombre: string, contra: string, email: string, compras: Array<Compra>=[]) {
        this.nombre = nombre;
        this.contraseña = contra;
        this.email = email;
        this.compras= compras;
    }

    // Métodos getter y setter para acceder a los atributos privados

    getNombre(): string {
        return this.nombre;
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;
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

    Tienepermiso():boolean {
        return this.email.endsWith('@supervisor.com');
    }
}