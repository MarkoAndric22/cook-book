import { Component, OnInit } from '@angular/core';
import { AllergenService } from '../core/services/allergen.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Allergen } from '../core/models/allergen.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-allergen',
  templateUrl: './allergen.component.html',
  styleUrls: ['./allergen.component.css']
})
export class AllergenComponent implements OnInit{

  id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  allergenForm?:FormGroup;
  allergen?: Allergen;

  constructor(private fb: FormBuilder,private allergenService:AllergenService, private activatedRoute: ActivatedRoute,private route: Router){
    this.allergen = this.activatedRoute.snapshot.data['resolver'];
  }
 
  ngOnInit(): void {
    this.buildForm(this.allergen);
  }

  buildForm(allergen?:Allergen){
    this.allergenForm=this.fb.group({
      id: [allergen?.id],
      name: [allergen?.name, [Validators.required, Validators.minLength(2),Validators.maxLength(30)]]
    })
  }

  hasErrors(componentName: string, errorCode?: string) {
    return  (this.allergenForm?.get(componentName)?.dirty || this.allergenForm?.get(componentName)?.touched) &&
    ((!errorCode && this.allergenForm?.get(componentName)?.errors ) ||
    (errorCode && this.allergenForm?.get(componentName)?.hasError(errorCode)));
  }

  onSave(){
    const s =this.allergenForm?.getRawValue();
    if(this.id){
      this.allergenService.editAllergen(this.id, s).subscribe(() => {
        this.route.navigate(['../allergens']);
      });
    }else{
      this.allergenService.saveAllergen(s).subscribe(() => {
        this.route.navigate(['../allergens']);
      });
    }
   }

}
