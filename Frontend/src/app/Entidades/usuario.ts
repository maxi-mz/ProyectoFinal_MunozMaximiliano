export class Usuario{
    id!: number;
    apellido!: string;
    descripcion!: string;
    nombre!: string;
    titulo!: string;
    url!: string;

    constructor(apellido: string,descripcion: string,nombre: string,titulo: string,url: string){
        this.apellido = apellido;
        this.descripcion = descripcion;
        this.nombre = nombre;
        this.titulo = titulo;
        this.url = url;
    }

}