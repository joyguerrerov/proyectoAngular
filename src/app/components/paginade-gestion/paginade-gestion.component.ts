import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-paginade-gestion',
  templateUrl: './paginade-gestion.component.html',
  styleUrls: ['./paginade-gestion.component.css']
})
export class PaginadeGestionComponent {

  formulario: FormGroup = new FormGroup({
    
    nombredelProducto: new FormControl(null, [
      Validators.required,
      Validators.minLength(3)
    ]),

    precio: new FormControl(null, [
      Validators.required,
    ]),

    descripcion: new FormControl(null, [
      Validators.required,
      Validators.minLength(5)

    ]),

    rutadelaimagen: new FormControl(null, [
      Validators.required,
      Validators.minLength(10)

    ]),

    opiniones: new FormControl(null, [
      Validators.required,
    ]),
    
  });

  onSubmit() {
  console.log(this.formulario.value);
  
}

  checkError(fieldName: string, error: string) {
    return this.formulario.get(fieldName)?.hasError(error)
      && this.formulario.get(fieldName)?.touched;
  }
  
}
