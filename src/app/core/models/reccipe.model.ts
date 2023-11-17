import { Ingridient } from "./ingridient.model";

export class Recipe{
    id?:number;

    name:string;

    description:string;
    
    stepsForPrepare: string;

    timeForPrepare: number;

    quantity: number;

    ingridients: Ingridient[]

    constructor(id:number,name:string,description:string,stepsForPrepare:string,timeForPrepare:number,quantity:number,  ingridients:Ingridient[]){
        this.id=id;
        this.name=name;
        this.description=description;
        this.stepsForPrepare=stepsForPrepare;
        this.timeForPrepare=timeForPrepare;
        this.quantity=quantity;
        this.ingridients=ingridients;

    }
}