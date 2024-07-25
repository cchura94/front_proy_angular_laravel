import { Component, inject } from '@angular/core';
import { ClienteService } from '../../../../core/services/cliente.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PedidoService } from '../../../../core/services/pedido.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-pedido',
  templateUrl: './nuevo-pedido.component.html',
  styleUrl: './nuevo-pedido.component.scss'
})
export class NuevoPedidoComponent {

  carrito: any[] = [];
  q: string = "";
  cliente_seleccionado: any = {}
  visible_cliente: boolean = false
   formCliente: FormGroup;

  clienteService= inject(ClienteService)
  pedidoService= inject(PedidoService)

  constructor(fb: FormBuilder,){
    this.formCliente = fb.group({
      nombre_completo: fb.control('', [Validators.required]),
      telefono: fb.control(''),
      direccion: fb.control(''),
      ci: fb.control(''),
    });
  }

  quitarCarrito(product: any){
    let index = this.carrito.indexOf(product)

    this.carrito.splice(index, 1)
  }

  buscarCliente(){
    this.clienteService.listar(1, 10, this.q).subscribe(
      (res) => {
        this.cliente_seleccionado = res
      }
    )
  }

  guardarCliente(){
    this.clienteService.guardar(this.formCliente.value).subscribe(res => {
      this.cliente_seleccionado = res;
      this.visible_cliente = false;

      Swal.fire({
        title: "Cliente Registrado!",
        text: "Continuar!",
        icon: "success"
      });
    })
  }

  guardarPedido(){
    let datos = {
      cliente_id: this.cliente_seleccionado.id,
      productos: this.carrito
    }
    this.pedidoService.guardar(datos).subscribe(res => {
      this.cliente_seleccionado = {}
      this.carrito = [];

      Swal.fire({
        title: "Pedido Registrado!",
        text: "Continuar!",
        icon: "success"
      });
    })
  }
  

}
