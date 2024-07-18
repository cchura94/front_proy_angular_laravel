import { Component, OnInit, inject } from '@angular/core';
import { ProductoService } from '../../../core/services/producto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LayoutService } from '../../../layout/service/app.layout.service';
import { CategoriaService } from '../../../core/services/categoria.service';
import { Categoria } from '../../../core/interfaces/Categoria';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss',
})
export class ProductoComponent implements OnInit {
  products: any[] = [];
  categorias: Categoria[] = [];
  product: any = {};
  cols: any[] = ['nombre', 'precio'];
  producto_id: number = -1;
  uploadedFiles: any[] = [];
  productDialog: boolean = false;
  errors: any = {}

  formProducto: FormGroup;
  submitted: boolean = false;

  totalRecords: number = 5;
  q: string = '';

  loading: boolean = false;

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
      categoria_id: fb.control('', [Validators.required]),
    });
  }

  visibleDialogImagen: boolean = false;

  productoService = inject(ProductoService);
  categoriaService = inject(CategoriaService);

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
    this.getCategorias();
  }

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

  getCategorias() {
    this.categoriaService.listar().subscribe((res: Categoria[]) => {
      this.categorias = res;
    });
  }

  loadProductos(event: any) {
    console.log(event);
    let page = event.first / event.rows + 1;

    this.getProductos(page, event.rows);
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

  openNuevoProducto() {
    this.productDialog = true;
  }

  guardarProducto() {
    this.productoService
      .guardar(this.formProducto.value)
      .subscribe(
        (res: any) => {
        this.getProductos();
        this.productDialog = false;
        this.formProducto.reset();
        this.formProducto.value.estado = true;
      },
      (error: any) => {
        console.log(error.error?.errors)
        this.errors = error.error?.errors
      }
      );
  }
}
