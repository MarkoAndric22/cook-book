import { Allergen } from "./allergen.model";

export class Ingridient{

    id?:number;
    
    name:string;

    unitOfMeasure:number;
  
    numberCaloria:number;
  
    carbohydrates:number;
  
    fats:number;
  
    proteins:number;

    allergens: Allergen[]

    constructor(id:number,name:string,unitOfMeasure:number,numberCaloria:number,carbohydrates:number,fats:number,proteins:number,allergens:Allergen[]){
        this.id=id;
        this.name=name;
        this.unitOfMeasure=unitOfMeasure;
        this.numberCaloria=numberCaloria;
        this.carbohydrates=carbohydrates;
        this.fats=fats;
        this.proteins=proteins;
        this.allergens=allergens;
    }
}