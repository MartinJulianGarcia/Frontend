import { Compra } from "./Compra";


export class Usuario {
    private username: string;
    private password: string;
    private mail: string;
    private miscompras: Array<Compra>;
    private id?: number;

    constructor(nombre: string, contra: string, email: string, compras: Array<Compra>=[]) {
        this.username = nombre;
        this.password = contra;
        this.mail = email;
        this.miscompras= compras;
        
        
       

    }

    static fromJson(json: any): void {
        
        const isAdmin = json.authorities.some((auth: any) => auth.authority === 'ADMIN');
  
        if (isAdmin) {
          sessionStorage.setItem('Rango', 'Administrador');
        } else {
          sessionStorage.setItem('Rango', 'Cliente');
        }
        

      }

    // Métodos getter y setter para acceder a los atributos privados

    getNombre(): string {
        return this.username;
    }

    setNombre(nombre: string): void {
        this.username = nombre;
    }

    getContra(): string {
        return this.password;
    }

    setContra(contra: string): void {
        this.password= contra;
    }

    getTipo(): string {
        return this.password;
    }

    setTipo(contraseña: string): void {
        this.password= contraseña;
    }


    getEmail(): string {
        return this.mail;
    }

    setEmail(mail: string): void {
        this.mail = mail;
    }

      getId(): number | undefined {
        return this.id;
    }

    setId(id:number ): void {
        this.id = id;
    }

    Tienepermiso():boolean {
        return this.mail.endsWith('@supervisor.com');
    }
}