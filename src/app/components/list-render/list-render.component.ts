import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals:Animal[]=[
    {name:'tob',type:'dog',age:10},
    {name:'nina',type:'cat',age:5},
    {name:'frida',type:'horse',age:6}
  ]

  animalDetails="";
  showAge(animal:Animal){
  this.animalDetails= 'O animal tem:'+animal.age+"anos";
  }
  

}
