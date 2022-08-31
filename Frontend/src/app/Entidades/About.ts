export class About{
    id!: number;
    apellido!: string;
    descripcion!: string;
    nombre!: string;
    titulo!: string;
    url!: string;
    apodo!:string;
    saludo!:string;

    constructor(apellido: string,descripcion: string,nombre: string,titulo: string,url: string,apodo:string,saludo:string){
        this.apellido = apellido;
        this.descripcion = descripcion;
        this.nombre = nombre;
        this.titulo = titulo;
        this.url = url;
        this.apodo = apodo;
        this.saludo = saludo;
    }

}