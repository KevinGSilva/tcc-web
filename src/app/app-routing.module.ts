import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Teste2Component } from './teste/teste2/teste2.component';
import { Teste3Component } from './teste/teste3/teste3.component';

const routes: Routes = [
  {
    path: 'teste',
    component: Teste2Component
  },{
    path: 'teste2',
    component: Teste3Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
