import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  urlBase = environment.servidor
  http = inject(HttpClient)

  constructor() { }

  listar(page: number = 1){
    return this.http.get(`${this.urlBase}/persona?page=${page}`);
  }

  guardar(data: any){
    return this.http.post(`${this.urlBase}/persona`, data);
  }

  mostrar(id: number){
    return this.http.get(`${this.urlBase}/persona/${id}`);
  }

  modificar(id: number, data: any){
    return this.http.put(`${this.urlBase}/persona/${id}`, data);
  }

  eliminar(id: number){
    return this.http.delete(`${this.urlBase}/persona/${id}`);
  }
}
