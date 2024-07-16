import { Component, OnInit, inject } from '@angular/core';
import { ProductoService } from '../../../core/services/producto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LayoutService } from '../../../layout/service/app.layout.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss',
})
export class ProductoComponent implements OnInit {
  products: any[] = [];
  product: any = {};
  cols: any[] = ['nombre', 'precio'];
  producto_id: number = -1;
  uploadedFiles: any[] = [];
  productDialog: boolean = false;

  formProducto: FormGroup;
  submitted: boolean = true

  _route2 = inject(Router);
  constructor(
    fb: FormBuilder,
    private _route: Router,
    public layoutService: LayoutService
  ) {
    this.formProducto = fb.group({
      nombre: fb.control('', [Validators.required]),
      precio: fb.control('', [Validators.required]),
      stock: fb.control('', [Validators.required]),
      descripcion: fb.control('', [Validators.required]),
      estado: fb.control('1', [Validators.required]),
      categoria_id: fb.control(1, [Validators.required]),
    });
  }

  visibleDialogImagen: boolean = false;

  productoService = inject(ProductoService);

  editProduct(product: any) {
    this.product = { ...product };
    // this.productDialog = true;
  }

  deleteProduct(product: any) {
    // this.deleteProductDialog = true;
    this.product = { ...product };
  }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos() {
    this.productoService.listar().subscribe((res: any) => {
      this.products = res.data;
    });
  }

  openDialogImagen(product: any) {
    this.producto_id = product.id;

    this.visibleDialogImagen = true;
  }

  subirImagen(event: any) {
    console.log(event);
    let formData = new FormData();
    formData.append('imagen', event.files[0]);

    this.productoService
      .actualizarImagen(this.producto_id, formData)
      .subscribe((res: any) => {
        this.visibleDialogImagen = false;

        this.product = {
          nombre: '',
          imagen: '',
          stock: 0,
          precio: 0,
          descripcion: '',
        };
        this.uploadedFiles = [];

        this.getProductos();
      });
  }

  openNuevoProducto(){
    this.productDialog = true;
  }

  guardarProducto(){
    this.productoService.guardar(this.formProducto.value).subscribe((res: any) => {
      this.getProductos()
    });
  }
}
