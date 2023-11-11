import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllergenListComponent } from './allergen-list/allergen-list.component';
import { AllergenComponent } from './allergen/allergen.component';
import { allergenResolver } from './core/resolvers/allergen.resolver';

const routes: Routes = [
  {path:'allergens',component: AllergenListComponent},
  {path:'allergen/:id',component: AllergenComponent, resolve: {resolver: allergenResolver},},
  {path:'allergen',component: AllergenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
