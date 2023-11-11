import { Component, OnInit } from '@angular/core';
import { Allergen } from '../core/models/allergen.model';
import { AllergenService } from '../core/services/allergen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allergen-list',
  templateUrl: './allergen-list.component.html',
  styleUrls: ['./allergen-list.component.css']
})
export class AllergenListComponent  implements OnInit{
  allergens?:Allergen[];
  
  constructor(private allergenService:AllergenService,private route: Router){

  }
  
  ngOnInit(): void {
   this.getAll();
  }

  getAll(){
    this.allergenService.getAll().subscribe(a =>{
      this.allergens=a;
  })
  }

  onDelete(allergen:Allergen){
    if(allergen){
      this.allergenService.deleteAllergen(allergen).subscribe(() =>{
        this.getAll();
      });
    }
   }

}
