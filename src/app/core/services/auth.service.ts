import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = "http://127.0.0.1:8000/api"

  // angular 17, 18
  http = inject(HttpClient)


  constructor() { }

  login(credenciales: any){
    return this.http.post(this.baseUrl+"/v1/auth/login", credenciales)
  }

  register(){

  }


}
