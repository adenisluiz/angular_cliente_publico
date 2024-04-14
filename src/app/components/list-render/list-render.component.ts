import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})

export class ListRenderComponent {
  
  constructor(private listService:ListService){
    this.getAnimals();
  }
  animals:Animal[]=[
    /*{name:'tob',type:'dog',age:10},
    {name:'nina',type:'cat',age:5},
    {name:'frida',type:'horse',age:6}
  */]

  animalDetails="";
  showAge(animal:Animal){
  this.animalDetails= 'O animal tem:'+animal.age+"anos";
  }
  removeAnimal(pAnimals:Animal[],animal:Animal){
    this.animals=this.animals.filter((a)=>animal.name!==a.name);
    this.listService.remove(animal.id).subscribe();
  }
getAnimals():void{
    this.listService.getAll().subscribe((animals)=>(this.animals=animals));
  }
    
}
