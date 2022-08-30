export class Educacion{
    id! : number;
    titulo!: string; 
    descripcion!: string;
    url!: string;
    fechaInicio!: number; 
    fechaFin! :number
    curso!:number;
    actual!:number;

    constructor(titulo:string,descripcion:string,url:string,fechaInicio:number,fechaFin:number,curso:number,actual:number){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.url = url;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.curso = curso;
        this.actual = actual;
    }
    
}