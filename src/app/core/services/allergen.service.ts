import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Allergen } from '../models/allergen.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllergenService {

  constructor(private httpClient:HttpClient) {

   }

   getAll():Observable<Allergen[]>{
    return this.httpClient.get<Allergen[]>(`http://localhost:8080/allergen`);
   }

   deleteAllergen(allergen: Allergen){
    return this.httpClient.delete<string>(`http://localhost:8080/allergen/${allergen.id}`, {responseType: 'text' as 'json'});
  }

  saveAllergen(allergen: Allergen): Observable<any>{
    return this.httpClient.post<any>(`http://localhost:8080/allergen/create`,allergen);
  }

  editAllergen(id: number, allergen: Allergen): Observable<any>{
    return this.httpClient.put<any>(`http://localhost:8080/allergen/${allergen.id}`,allergen);
  }

  getById(id: number){
    return this.httpClient.get<Allergen>(`http://localhost:8080/allergen/${id}`);
  }

}
