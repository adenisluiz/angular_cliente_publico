import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';


@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})

export class ListRenderComponent {
  
  constructor(private listService:ListService){
    this.getAnimals();
  }
  animals:Animal[]=[];
  /*animals:Animal[]=[
    {name:'tob',type:'dog',age:10},
    {name:'nina',type:'cat',age:5},
    {name:'frida',type:'horse',age:6}
  ]*/

  animalDetails="";
  showAge(animal:Animal){
  this.animalDetails= 'O animal tem:'+animal.age+"anos";
  }
  removeAnimal(pAnimals:Animal[],animal:Animal){
    console.log("Removendo animal");
    this.animals=this.listService.removeAnimal(pAnimals,animal)
  }
  getAnimals():void{
    this.listService.getAll().subscribe((animals)=>(this.animals=animals));
  }

}
