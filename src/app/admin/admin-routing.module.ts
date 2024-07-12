import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './components/perfil/perfil.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { AppLayoutComponent } from '../layout/app.layout.component';
import { PersonaComponent } from './components/persona/persona.component';
import { ProductoComponent } from './components/producto/producto.component';
import { CategoriaComponent } from './components/categoria/categoria.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: 'perfil', component: PerfilComponent },
      { path: 'usuario', component: UsuarioComponent },
      { path: 'persona', component: PersonaComponent },
      {
        path: 'producto',
        component: ProductoComponent,
      },
      {
        path: 'categoria',
        component: CategoriaComponent,
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
