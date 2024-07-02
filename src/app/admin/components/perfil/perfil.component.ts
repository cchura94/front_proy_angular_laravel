import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent implements OnInit {
  
  authService = inject(AuthService)
  router = inject(Router)

  perfil: any;
  
  
  ngOnInit(): void {
    this.obtenerPerfil();
  }

  obtenerPerfil(){
    this.authService.getPerfil().subscribe(
      (res: any) => {
        this.perfil = res;
      },
      (error: any) => {
        // alert("Error al obtener el Perfil")
        this.router.navigate(["/login"]);
      }
    )

  }

  funSalir(){

    this.authService.funSalir().subscribe(
      (res: any) => {
        console.log(res);
        localStorage.removeItem("access_token");
        this.router.navigate(["/login"]);
        
      },
      (error: any) => {
        console.log(error);
      }
    )

  }


}
