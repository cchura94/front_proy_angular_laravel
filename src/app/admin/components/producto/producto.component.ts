import { Component, OnInit, inject } from '@angular/core';
import { ProductoService } from '../../../core/services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent implements OnInit {
  
  products: any[] = []
  product: any = {}
  cols: any[] = [
    'nombre',
    "precio"
  ];

  productoService = inject(ProductoService)

  editProduct(product: any) {
    this.product = { ...product };
    // this.productDialog = true;
}

deleteProduct(product: any) {
  // this.deleteProductDialog = true;
  this.product = { ...product };
}


  ngOnInit(): void {
    this.getProductos()
  }

  getProductos(){
    this.productoService.listar().subscribe(
      (res: any) => {
        this.products = res.data;
      }
    )
  }

}
