import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  urlBase = environment.servidor;
  http = inject(HttpClient);

  constructor() {}
  listar(page: number = 1, limit: number = 5, q: string = '') {
    return this.http.get(
      `${this.urlBase}/cliente/buscar?page=${page}&limit=${limit}&q=${q}`
    );
  }
  guardar(data: any) {
    return this.http.post(`${this.urlBase}/cliente`, data);
  }

  mostrar(id: number) {
    return this.http.get(`${this.urlBase}/cliente/${id}`);
  }

  modificar(id: number, data: any) {
    return this.http.put(`${this.urlBase}/cliente/${id}`, data);
  }

  eliminar(id: number) {
    return this.http.delete(`${this.urlBase}/cliente/${id}`);
  }

}
