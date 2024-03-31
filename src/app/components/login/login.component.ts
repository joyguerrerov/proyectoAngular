import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/core/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formulario: FormGroup;

  formBuilder = inject(FormBuilder);
  usuariosService = inject(UsuariosService);
  router = inject(Router);

  constructor() {
    this.formulario = this.formBuilder.group({
      email: [],
      password: []
    })
  }

  async onSubmit() {
    const response = await this.usuariosService.login(this.formulario.value);
    console.log(response);
    if (response.success) {
      alert('Login correcto 👏👏');

      localStorage.setItem('token_crm', response.token!)

      this.router.navigateByUrl('/inicio');
    } else {
      alert(response.error);
    }
  }
}
