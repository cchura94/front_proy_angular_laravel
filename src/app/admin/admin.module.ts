import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PerfilComponent } from './components/perfil/perfil.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppLayoutModule } from '../layout/app.layout.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { PersonaComponent } from './components/persona/persona.component';
import { PrimeModule } from '../prime/prime.module';


@NgModule({
  declarations: [
    PerfilComponent,
    UsuarioComponent,
    PersonaComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    AppLayoutModule,
    PrimeModule,

    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule
  ]
})
export class AdminModule { }
