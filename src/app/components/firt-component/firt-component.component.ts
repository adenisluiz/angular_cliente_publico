import { Component } from '@angular/core';

@Component({
  selector: 'app-firt-component',
  templateUrl: './firt-component.component.html',
  styleUrls: ['./firt-component.component.css']
})
export class FirtComponentComponent {

  nome:string="Adenis";
  idade:number=33;
  arrayDeMotos=["honda bis","honda 125"];
  objAnoCor={
    ano:2012,
    cor:"Preta"
  }
}
