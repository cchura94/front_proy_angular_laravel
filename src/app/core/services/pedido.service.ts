import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  urlBase = environment.servidor
  http = inject(HttpClient)

  constructor() { }

  descargarPDF(){
    return this.http.get(`${this.urlBase}/pedido/generar-pedido-pdf`, {responseType: 'blob'});
  }

  listar(page: number = 1, limit: number = 5, q: string=""){
    return this.http.get(`${this.urlBase}/pedido?page=${page}&limit=${limit}&q=${q}`);
  }

  guardar(data: any){
    return this.http.post(`${this.urlBase}/pedido`, data);
  }

  mostrar(id: number){
    return this.http.get(`${this.urlBase}/pedido/${id}`);
  }

  modificar(id: number, data: any){
    return this.http.put(`${this.urlBase}/pedido/${id}`, data);
  }

  eliminar(id: number){
    return this.http.delete(`${this.urlBase}/pedido/${id}`);
  }

  actualizarImagen(id:number, formData: any){
    return this.http.post(`${this.urlBase}/pedido/${id}/actualizar-imagen`, formData);
  }
}
