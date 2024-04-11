import { Injectable } from '@angular/core';
import { Animal } from '../Animal';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl='http://localhost:3000/animals';
  constructor(private http:HttpClient) { }

  removeAnimal(animals:Animal[],animal:Animal){
    console.log("Ativando servico");
    return animals.filter((a)=>animal.name!==a.name);
  }

  getAll():Observable<Animal[]>{
    return this.http.get<Animal[]>(this.apiUrl);

  }
}



