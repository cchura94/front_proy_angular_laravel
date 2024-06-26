import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup;
  authService = inject(AuthService)
  _route2 = inject(Router)
  // route
  prueba: any


  constructor( fb: FormBuilder, private _route: Router ){

    this.loginForm = fb.group({
      email: fb.control('', [Validators.email, Validators.required]),
      password: fb.control('', [Validators.required])
    })

  }

  funIngresar(){
    this.authService.login(this.loginForm.value).subscribe(
      (res: any) => {
        this.prueba = res
        localStorage.setItem("access_token", res.access_token)

        this._route2.navigate(["/admin/perfil"]);
      },
      (error: any) => {
        console.log(error)
      }
    )
  }

}
