import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaginadeInicioComponent } from './components/paginade-inicio/paginade-inicio.component';
import { PaginadeProductosComponent } from './components/paginade-productos/paginade-productos.component';
import { PaginadeGestionComponent } from './components/paginade-gestion/paginade-gestion.component';
import { ProductoComponent } from './components/producto/producto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PaginadeInicioComponent,
    PaginadeProductosComponent,
    PaginadeGestionComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
