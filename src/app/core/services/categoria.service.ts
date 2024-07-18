import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../interfaces/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  urlBase = environment.servidor
  http = inject(HttpClient)

  constructor() { }

  listar(){
    return this.http.get<Categoria[]>(`${this.urlBase}/categoria`);
  }

  guardar(data: any){
    return this.http.post(`${this.urlBase}/categoria`, data);
  }

  mostrar(id: number){
    return this.http.get(`${this.urlBase}/categoria/${id}`);
  }

  modificar(id: number, data: any){
    return this.http.put(`${this.urlBase}/categoria/${id}`, data);
  }

  eliminar(id: number){
    return this.http.delete(`${this.urlBase}/categoria/${id}`);
  }
}
