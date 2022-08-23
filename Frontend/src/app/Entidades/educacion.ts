
export class Educacion{
    id! : number;
    titulo!: string; 
    descripcion!: string;
    url!: string;
    fechaInicio!: number; 
    fechaFin! :number

    constructor(titulo:string,descripcion:string,url:string,fechaInicio:number,fechaFin:number){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.url = url;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }
    
}