import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllergenListComponent } from './allergen-list/allergen-list.component';
import { AllergenComponent } from './allergen/allergen.component';
import { allergenResolver } from './core/resolvers/allergen.resolver';
import { IngridientListComponent } from './ingridient-list/ingridient-list.component';
import { IngridientComponent } from './ingridient/ingridient.component';
import { ingridientResolver } from './core/resolvers/ingridient.resolver';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeComponent } from './recipe/recipe.component';

const routes: Routes = [
  {path:'allergens',component: AllergenListComponent},
  {path:'allergen/:id',component: AllergenComponent, resolve: {resolver: allergenResolver},},
  {path:'allergen',component: AllergenComponent},
  {path:'ingridients',component: IngridientListComponent},
  {path:'ingridient/:id',component: IngridientComponent, resolve: {resolver: ingridientResolver},},
  {path:'ingridient',component: IngridientComponent},
  {path:'recipes',component: RecipeListComponent},
  {path:'recipe/:id',component: RecipeComponent, resolve: {resolver: ingridientResolver},},
  {path:'recipe',component: RecipeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
