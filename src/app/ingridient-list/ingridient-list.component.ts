import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../core/models/ingridient.model';
import { IngridientService } from '../core/services/ingridient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingridient-list',
  templateUrl: './ingridient-list.component.html',
  styleUrls: ['./ingridient-list.component.css']
})
export class IngridientListComponent implements OnInit{

ingridients?:Ingridient[];

constructor(private ingridientService:IngridientService,private route: Router){

}

ngOnInit(): void {
  this.getAll();
}

getAll(){
  this.ingridientService.getAll().subscribe(i =>{
    this.ingridients=i;
  })
}

onDelete(ingridient:Ingridient){
  if(ingridient){
    this.ingridientService.deleteIngridient(ingridient).subscribe(() =>{
      this.getAll();
    })
  }
}

}
