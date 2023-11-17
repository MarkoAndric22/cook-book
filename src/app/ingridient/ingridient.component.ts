import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../core/models/ingridient.model';
import { IngridientService } from '../core/services/ingridient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Allergen } from '../core/models/allergen.model';

@Component({
  selector: 'app-ingridient',
  templateUrl: './ingridient.component.html',
  styleUrls: ['./ingridient.component.css']
})
export class IngridientComponent implements OnInit {

  id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  ingridientForm?:FormGroup;
  ingridient?:Ingridient;

  constructor(private fb: FormBuilder,private ingridientService:IngridientService, private activatedRoute: ActivatedRoute,private route: Router){
    this.ingridient = this.activatedRoute.snapshot.data['resolver'];
  }


  ngOnInit(): void {
    this.buildForm(this.ingridient);
  
  }

  hasErrors(componentName: string, errorCode?: string) {
    return  (this.ingridientForm?.get(componentName)?.dirty || this.ingridientForm?.get(componentName)?.touched) &&
    ((!errorCode && this.ingridientForm?.get(componentName)?.errors ) ||
    (errorCode && this.ingridientForm?.get(componentName)?.hasError(errorCode)));
  }

  buildForm(ingridient?:Ingridient){
    this.ingridientForm=this.fb.group({
      id: [ingridient?.id],
      name: [ingridient?.name, [Validators.required, Validators.minLength(2),Validators.maxLength(30)]],
      unitOfMeasure:[ingridient?.unitOfMeasure,Validators.required],
      numberCaloria:[ingridient?.numberCaloria,Validators.required],
      carbohydrates:[ingridient?.carbohydrates,Validators.required],
      fats:[ingridient?.fats,Validators.required],
      proteins:[ingridient?.proteins,Validators.required],
      // allergens:[ingridient?.allergens.map((allergen)=>allergen.name)|| []]
      allergens: this.fb.array([]),
});

const allergensArray = this.ingridientForm.get('allergens') as FormArray;
console.log(allergensArray)
ingridient?.allergens.forEach((alergen: Allergen) => {
  allergensArray.push(this.fb.group({ name: [alergen.name] }));
});
  }

  get allergens() {
    return this.ingridientForm?.get('allergens') as FormArray;
  }

  addAllergen() {
    const allergenForm=this.fb.group({
      name: [''],
    });
    this.allergens.push(allergenForm);
  }

  removeAllergen(index: number) {
    this.allergens.removeAt(index);
  }
  

  asFormControl(control: AbstractControl): FormControl | null {
    return control as FormControl;
  }


  onSave(){
    const s =this.ingridientForm?.getRawValue();
    if(this.id){
      this.ingridientService.editIngridient(this.id, s).subscribe(() => {
        this.route.navigate(['../../ingridient']);
      });
    }else{
      this.ingridientService.saveIngridient(s).subscribe(() => {
        this.route.navigate(['../ingridients']);
      });
    }
   }

}
