import { Component, inject } from '@angular/core';
import { Categoria } from '../../../core/interfaces/Categoria';
import { CategoriaService } from '../../../core/services/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent {

  categorias: Categoria[] = []
  categoriaService = inject(CategoriaService)

  constructor(){
    this.getCategorias()
  }

  getCategorias() {
    this.categoriaService.listar().subscribe((res: Categoria[]) => {
      this.categorias = res;
    });
  }

}
