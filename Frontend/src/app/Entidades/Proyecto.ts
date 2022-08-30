export class Proyecto{
    id!:number;
    titulo!:string;
    descripcion!:string;
    fecha!:number;
    foto!:string;
    url!:string;

    constructor(titulo:string,descripcion:string,fecha:number,foto:string,url:string){
        this.fecha = fecha;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.url = url;

    }
}