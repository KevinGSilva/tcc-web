import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css'],
  standalone: true,
  imports:[
    NgbModule,
    RouterModule
  ]
})
export class TesteComponent {
  isNavbarCollapsed=true;
}
