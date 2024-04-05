import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals=[
    {name:'tob',type:'dog'},
    {name:'nina',type:'cat'},
    {name:'frida',type:'horse'}
  ]

}
