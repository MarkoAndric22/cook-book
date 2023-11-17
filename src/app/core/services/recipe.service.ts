import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../models/reccipe.model';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private httpClient:HttpClient) { }

  saveRecipe(recipe:Recipe): Observable<any>{
    return this.httpClient.post<any>(`http://localhost:8080/recipe/create`,recipe);
  }

  editRecipe(id: number, recipe:Recipe): Observable<any>{
    return this.httpClient.put<any>(`http://localhost:8080/recipe/${recipe.id}`,recipe);
  }
  
  deleteRecipe(recipe:Recipe){
    return this.httpClient.delete<string>(`http://localhost:8080/recipe/${recipe.id}`, {responseType: 'text' as 'json'});
  }

  getAll():Observable<Recipe[]>{
    return this.httpClient.get<Recipe[]>(`http://localhost:8080/recipe`);
   }

   getById(id: number){
    return this.httpClient.get<Recipe>(`http://localhost:8080/recipe/${id}`);
  }

}
