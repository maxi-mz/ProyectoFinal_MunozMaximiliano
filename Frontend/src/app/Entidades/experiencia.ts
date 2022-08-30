export class Experiencia{
    id!:number;
    fechaInicio!: number; 
    fechaFin! :number;
    descripcion!: string;
    titulo!: string; 
    url!: string;
    actual!:number;

    constructor(titulo:string,descripcion:string,url:string,fechaInicio:number,fechaFin:number,actual:number){
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.url = url;
        this.actual = actual;
    }
}