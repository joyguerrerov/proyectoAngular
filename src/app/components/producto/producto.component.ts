import { Component, Input } from '@angular/core';
import { Productos } from 'src/app/interfaces/productos';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  @Input() public image: string = "";
  @Input() public price: number = 0;
  @Input() public name: string = "";
  @Input() public description: string = "";
  @Input() public stars: number= 0;
  @Input() public id: number = 0;

  constructor() {
    console.log(this.image);
    
  }
}
