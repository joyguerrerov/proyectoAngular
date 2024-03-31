import { Component, Input, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { Productos } from 'src/app/interfaces/productos';

@Component({
  selector: 'app-paginade-productos',
  templateUrl: './paginade-productos.component.html',
  styleUrls: ['./paginade-productos.component.css']
})
export class PaginadeProductosComponent implements OnInit {


  url: string = 'https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products';

  productos : Productos[] = []
  Filtro: string = "";
productosCopia: Productos[]=[]
  constructor() { 
    console.log(this.url);
    
    this.cargarDatos()
  }
  
  ngOnInit(): void {
  }

  async cargarDatos() {


    fetch(this.url, {
      method: "GET",
      redirect: "follow"
    })
      .then((response) => response.text())
      .then((result) => {
        const datosParseados = JSON.parse(result);
        this.productos = datosParseados.map((item: Productos) => { return item })

        this.productosCopia= this.productos
        console.log(this.productos);
        
      })
      .catch((error) => console.error(error));
  }
  FiltrarDatos(filtro: string) {
    if (filtro == "") {
      this.productos = this.productosCopia
    }

    const newProducto = this.productos.filter(el => el.description.toLowerCase().includes(filtro.trim().toLowerCase()));
    this.productos = newProducto;
    
  }
}