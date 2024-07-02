import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.scss'
})
export class UsuarioComponent implements OnInit{
  
  userService = inject(UserService)

  usuarios: any[] = [];

  editUserId: number = -1

  usuarioForm: FormGroup;

  constructor( fb: FormBuilder, private _route: Router ){

    this.usuarioForm = fb.group({
      name: fb.control('', [Validators.required]),
      email: fb.control('', [Validators.email, Validators.required]),
      password: fb.control('', [Validators.required])
    })

  }
  
  ngOnInit(): void {
    this.funListar()
  }

  funListar(){
    this.userService.listar().subscribe(
      (res: any) => {
        console.log(res.data)
        this.usuarios = res.data
      }
    )
  }

  funGuardar(){

    if(this.editUserId !== -1){

      this.userService.modificar(this.editUserId, this.usuarioForm.value).subscribe(
        res => {
          this.funListar();
          this.usuarioForm.reset();
          this.editUserId = -1;

          Swal.fire({
            title: 'Usuario Actualizado!',
            text: 'Para continuar precione ok',
            icon: 'success',
            confirmButtonText: 'OK'
          })

        },
        (error: any) => {
          Swal.fire({
            title: 'Error!',
            text: 'Ocurrió un error al intentar modificar el usuario',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        }
      )

    }else{
      this.userService.guardar(this.usuarioForm.value).subscribe(
        (res) => {
          this.funListar();
          this.usuarioForm.reset();

          Swal.fire({
            title: 'Usuario Registrado!',
            text: 'Para continuar precione ok',
            icon: 'success',
            confirmButtonText: 'OK'
          })
        },
        (error: any) => {
          Swal.fire({
            title: 'Error!',
            text: 'Ocurrió un error al Intentar Registrar el usuario',
            icon: 'error',
            confirmButtonText: 'OK'
          })
        }
      )

    }

  }

  funEditarUsuario(user: any){
    this.usuarioForm.patchValue(user)
    this.editUserId = user.id;
  }

  funEliminar(id: number){
    if(confirm("¿Está seguro de eliminar el usuario?")){

      this.userService.eliminar(id).subscribe(
        (res => {
          this.funListar();
        })
      )

    }
    
  }

}
