import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlBase = environment.servidor
  http = inject(HttpClient)

  constructor() { }

  listar(page: number = 1){
    return this.http.get(`${this.urlBase}/usuario?page=${page}`);
  }

  guardar(data: any){
    return this.http.post(`${this.urlBase}/usuario`, data);
  }

  mostrar(id: number){
    return this.http.get(`${this.urlBase}/usuario/${id}`);
  }

  modificar(id: number, data: any){
    return this.http.put(`${this.urlBase}/usuario/${id}`, data);
  }

  eliminar(id: number){
    return this.http.delete(`${this.urlBase}/usuario/${id}`);
  }
}
