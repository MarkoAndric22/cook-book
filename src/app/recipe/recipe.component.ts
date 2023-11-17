import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../core/services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Recipe } from '../core/models/reccipe.model';
import { Ingridient } from '../core/models/ingridient.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit{

  id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  recipeForm?:FormGroup;
  recipe?:Recipe;

  constructor(private fb: FormBuilder,private recipeService:RecipeService,private activatedRoute: ActivatedRoute,private route: Router){
    this.recipe=this.activatedRoute.snapshot.data['resolver'];
  }

  ngOnInit(): void {
   this.buildForm(this.recipe);
}
hasErrors(componentName: string, errorCode?: string) {
  return  (this.recipeForm?.get(componentName)?.dirty || this.recipeForm?.get(componentName)?.touched) &&
  ((!errorCode && this.recipeForm?.get(componentName)?.errors ) ||
  (errorCode && this.recipeForm?.get(componentName)?.hasError(errorCode)));
}

buildForm(recipe?:Recipe){
  this.recipeForm=this.fb.group({
    id:[recipe?.id],
    name:[recipe?.name,[Validators.required, Validators.minLength(2),Validators.maxLength(3)]],
    description:[recipe?.description,Validators.required],
    stepsForPrepare:[recipe?.stepsForPrepare,Validators.required],
    timeForPrepare:[recipe?.timeForPrepare,Validators.required],
    quantity:[recipe?.quantity,Validators.required],
    ingridients:[recipe?.ingridients.map((Ingridient)=>Ingridient.name) || []]

  });
}

onSave(){
  const s =this.recipeForm?.getRawValue();
  if(this.id){
    this.recipeService.editRecipe(this.id, s).subscribe(() => {
      this.route.navigate(['../../recipe']);
    });
  }else{
    this.recipeService.saveRecipe(s).subscribe(() => {
      this.route.navigate(['../recipes']);
    });
  }
 }

}
