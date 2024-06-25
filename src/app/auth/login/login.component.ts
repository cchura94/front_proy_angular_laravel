import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup;
  authService = inject(AuthService)
  prueba: any


  constructor( fb: FormBuilder ){

    this.loginForm = fb.group({
      email: fb.control('', [Validators.email, Validators.required]),
      password: fb.control('', [Validators.required])
    })

  }

  funIngresar(){
    this.authService.login(this.loginForm.value).subscribe(
      (res: any) => {this.prueba = res}
    )
  }

}
