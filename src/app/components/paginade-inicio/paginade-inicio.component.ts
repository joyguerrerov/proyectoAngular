import { Component } from '@angular/core';

@Component({
  selector: 'app-paginade-inicio',
  templateUrl: './paginade-inicio.component.html',
  styleUrls: ['./paginade-inicio.component.css']
})
export class PaginadeInicioComponent {
 seccionActual: string = 'london'

  cambiarSeccion(ciudad: string) {
    this.seccionActual = ciudad
  }
}
