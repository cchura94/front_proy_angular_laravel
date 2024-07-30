import { Component } from '@angular/core';
import { LayoutService } from '../../layout/service/app.layout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {
  constructor(public layoutService: LayoutService, public router: Router) { }
}
