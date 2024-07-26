import { Component, inject } from '@angular/core';
import { PedidoService } from '../../../../core/services/pedido.service';

@Component({
  selector: 'app-lista-pedido',
  templateUrl: './lista-pedido.component.html',
  styleUrl: './lista-pedido.component.scss'
})
export class ListaPedidoComponent {

  pedidoService = inject(PedidoService)
  pedidos: any[] =[]
  page: number = 1;
  detalle_dialog_visible: boolean = false;
  pedido: any ={}

  constructor(){
    this.getPedidos();
  }

  getPedidos(){
    this.pedidoService.listar(this.page, 10, '').subscribe(
      (res: any) => {
        this.pedidos = res.data
      },
      (error) => {
        alert("Ocurrió un error al recuperar los datos")
      }
    )
  }

  showDialog(pedido: any){
    this.pedido = pedido
    this.detalle_dialog_visible = true;
  }

  async descargarPDF(){
    const respuesta = await
     this.pedidoService.descargarPDF().subscribe(
      (res: any) => {

        const url = window.URL.createObjectURL(new Blob([res], {type: 'application/pdf'}),);

        const link = document.createElement('a');
        link.href = url;

        link.setAttribute('download', 'recibo.pdf');

        document.body.appendChild(link);
        link.click()
        document.body.removeChild(link);
      }
     );
  }

}
