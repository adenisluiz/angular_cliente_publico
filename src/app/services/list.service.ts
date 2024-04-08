import { Injectable } from '@angular/core';
import { Animal } from '../Animal';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  removeAnimal(animals:Animal[],animal:Animal){
    console.log("Ativando servico");
    return animals.filter((a)=>animal.name!==a.name);
  }
}



