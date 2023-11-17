import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ingridient } from '../models/ingridient.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngridientService {

  constructor(private httpClient:HttpClient) { }

  saveIngridient(ingridient:Ingridient): Observable<any>{
    return this.httpClient.post<any>(`http://localhost:8080/ingridient/create`,ingridient);
  }

  editIngridient(id: number, ingridient:Ingridient): Observable<any>{
    return this.httpClient.put<any>(`http://localhost:8080/ingridient/${ingridient.id}`,ingridient);
  }

  deleteIngridient(ingridient:Ingridient){
    return this.httpClient.delete<string>(`http://localhost:8080/ingridient/${ingridient.id}`, {responseType: 'text' as 'json'});
  }

  getAll():Observable<Ingridient[]>{
    return this.httpClient.get<Ingridient[]>(`http://localhost:8080/ingridient`);
   }

   getById(id: number){
    return this.httpClient.get<Ingridient>(`http://localhost:8080/ingridient/${id}`);
  }
   
}
