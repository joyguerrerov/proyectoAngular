import { Empleado } from 'src/app/core/interfaces/empleado.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private baseUrl = 'https://crm-empleados.onrender.com/api/empleados'
  private hhtpClient = inject(HttpClient);

  private createrHeader() {
    
    return {
       headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token_crm')!
      })
    }
  }

  getAll() {
   
    return firstValueFrom(
       this.hhtpClient.get<Empleado[]>(this.baseUrl, /*this.createrHeader()*/))
  }

  getById(EmpleadoId: string) {
    return firstValueFrom(this.hhtpClient.get<Empleado>(`${this.baseUrl}/${EmpleadoId}`, /*this.createrHeader()*/))
  }

  updateById(empleadoId: string, editEmpleado: Empleado) {
    return firstValueFrom(
      this.hhtpClient.put(`${this.baseUrl}/${empleadoId}`, editEmpleado, /*this.createrHeader()*/))
    
  }

  create(nuevoEmpleado: Empleado) {

    return firstValueFrom(
      this.hhtpClient.post<Empleado>(this.baseUrl, nuevoEmpleado, /*this.createrHeader()*/))
  }

 deleteById(empleadoId: string) {
    return firstValueFrom(
      this.hhtpClient.delete(`${this.baseUrl}/${empleadoId}`));
  }
  
}
