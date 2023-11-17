import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../core/services/recipe.service';
import { Router } from '@angular/router';
import { Recipe } from '../core/models/reccipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes?:Recipe[];

  constructor(private recipeService:RecipeService,private route:Router){}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.recipeService.getAll().subscribe(i =>{
      this.recipes=i;
    })
  }

  onDelete(recipe:Recipe){
    if(recipe){
      this.recipeService.deleteRecipe(recipe).subscribe(() =>{
        this.getAll();
      })
    }
  }

}
