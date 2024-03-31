import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';

type LoginBody = {
  email: string,
  password: string
}
type RegistroResponse = {
  success?: string,
  error: string,
}
type LoginResponse = {
  success?: string,
  token?: string,
  error?: string
}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private baseUrl = 'https://crm-empleados.onrender.com/api/usuarios'

  private httpClient = inject(HttpClient);

  registro(nuevoUsuario: Usuario) {
    return firstValueFrom(
      this.httpClient.post<RegistroResponse>(`${this.baseUrl}/registro`, nuevoUsuario)
    )
  }

  login(body: LoginBody) {
    return firstValueFrom(
      this.httpClient.post<LoginResponse>(`${this.baseUrl}/login`, body)
    )
  }

  isLogged() {
    return localStorage.getItem('token_crm') ? true : false;
  }

}

