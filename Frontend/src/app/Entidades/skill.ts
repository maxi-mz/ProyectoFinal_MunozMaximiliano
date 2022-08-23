export class Skill{
    id!:number;
    porcentaje!: number;
    titulo!:string;
    url!:string;

    constructor(titulo:string,url:string,porcentaje:number){
        this.porcentaje = porcentaje;
        this.titulo = titulo;
        this.url = url;
    }
}