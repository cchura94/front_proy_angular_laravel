import { Component, inject } from '@angular/core';
import { PersonaService } from '../../../core/services/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.scss'
})
export class PersonaComponent {

  personas: any[] = []

  personaService = inject(PersonaService)

  constructor(){
    this.getPersonas()
  }

   getPersonas() {
    this.personaService.listar().subscribe(
      (res: any) => {
        this.personas = res
      }
    )
    
  }

}
