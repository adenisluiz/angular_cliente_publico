import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName="Adenis";
  userData={
    email:"adenis@email.com",
    role:"admin"

  }
  title = 'Adas';
  
  
}
