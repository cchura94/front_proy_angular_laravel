import { Component, inject } from '@angular/core';
import { ClienteService } from '../../../../core/services/cliente.service';

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

  clienteService= inject(ClienteService)

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

}
