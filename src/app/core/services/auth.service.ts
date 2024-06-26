import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.servidor  ;// "http://127.0.0.1:8000/api"

  // angular 17, 18
  http = inject(HttpClient)


  constructor() { }

  login(credenciales: any){
    return this.http.post(this.baseUrl+"/v1/auth/login", credenciales)
  }

  register(){

  }

  getPerfil(){
    return this.http.get(this.baseUrl+"/v1/auth/profile", )
  }

  funSalir(){
    return this.http.post(`${this.baseUrl}/v1/auth/logout`, {})
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('access_token')
    return token !== null;
  }


}
