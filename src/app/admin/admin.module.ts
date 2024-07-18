import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PerfilComponent } from './components/perfil/perfil.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppLayoutModule } from '../layout/app.layout.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { PersonaComponent } from './components/persona/persona.component';
import { PrimeModule } from '../prime/prime.module';
import { ProductoComponent } from './components/producto/producto.component';
import { CategoriaComponent } from './components/categoria/categoria.component';


@NgModule({
  declarations: [
    PerfilComponent,
    UsuarioComponent,
    PersonaComponent,
    ProductoComponent,
    CategoriaComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AppLayoutModule,
    PrimeModule,

    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule
  ]
})
export class AdminModule { }
