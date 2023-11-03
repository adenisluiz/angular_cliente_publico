import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirtComponentComponent } from './components/firt-component/firt-component.component';
import { TesteComponent } from './components/teste/teste.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DiretivasComponent } from './components/diretivas/diretivas.component';

@NgModule({
  declarations: [
    AppComponent,
    FirtComponentComponent,
    TesteComponent,
    ParentDataComponent,
    DiretivasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
