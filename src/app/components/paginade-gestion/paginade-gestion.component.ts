import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-paginade-gestion',
  templateUrl: './paginade-gestion.component.html',
  styleUrls: ['./paginade-gestion.component.css']
})
export class PaginadeGestionComponent {

  nombre: string = ""; 
  image: string = "";
  descripcion: string = "";
  price: number = 0;
  puntuacion: string= ""

  formulario: FormGroup = new FormGroup({
    
    nombredelProducto: new FormControl(null, [
      Validators.required,
      Validators.minLength(3)
    ]),

    precio: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[0-9]*$')
    ]),

    descripcion: new FormControl(null, [
      Validators.required,
      Validators.minLength(5)

    ]),

    rutadelaimagen: new FormControl(null, [
      Validators.required,
      Validators.minLength(10),
      Validators.pattern('^http.*')

    ]),

    puntuacion: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^-?\d*\.?\d+$/)
    ]),
    
  });

  onSubmit() {
  console.log(this.formulario);
  
}

  checkError(fieldName: string, error: string) {
    return this.formulario.get(fieldName)?.hasError(error)
      && this.formulario.get(fieldName)?.touched;
  }
  
}
