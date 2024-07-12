import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  urlBase = environment.servidor
  http = inject(HttpClient)

  constructor() { }

  listar(page: number = 1){
    return this.http.get(`${this.urlBase}/producto?page=${page}`);
  }

  guardar(data: any){
    return this.http.post(`${this.urlBase}/producto`, data);
  }

  mostrar(id: number){
    return this.http.get(`${this.urlBase}/producto/${id}`);
  }

  modificar(id: number, data: any){
    return this.http.put(`${this.urlBase}/producto/${id}`, data);
  }

  eliminar(id: number){
    return this.http.delete(`${this.urlBase}/producto/${id}`);
  }
}
