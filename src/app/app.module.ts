import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TesteComponent } from './teste/teste.component';
import { Teste2Component } from './teste/teste2/teste2.component';
import { Teste3Component } from './teste/teste3/teste3.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TesteComponent,
    Teste2Component,
    Teste3Component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
