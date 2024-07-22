import { Component, Input, inject } from '@angular/core';
import { ProductoService } from '../../../../core/services/producto.service';

@Component({
  selector: 'app-pedido-producto',
  templateUrl: './pedido-producto.component.html',
  styleUrl: './pedido-producto.component.scss'
})
export class PedidoProductoComponent {

  @Input() carrito: any[] = [];

  products: any[] = [];
  // carrito: any[] = [];

  cols: any[] = ['nombre', 'precio'];

  producto_id: number = -1;

  totalRecords: number = 5;

  q: string = '';

  loading: boolean = false;

  productoService = inject(ProductoService);


  getProductos(page: number = 1, limit: number = 5, q: string = '') {
    this.loading = true;
    this.productoService.listar(page, limit, q).subscribe((res: any) => {
      this.products = res.data;
      this.totalRecords = res.total;
      this.loading = false;
    });
    
  }

  
  buscar() {
    this.getProductos(1, 10, this.q);
  }
  loadProductos(event: any) {
    console.log(event);
    let page = event.first / event.rows + 1;

    this.getProductos(page, event.rows);
  }

  addCarrito(prod: any){

    let data = {producto_id: prod.id, nombre: prod.nombre, precio: prod.precio, cantidad: 1}
    
    this.carrito.push(data)

  }



}
