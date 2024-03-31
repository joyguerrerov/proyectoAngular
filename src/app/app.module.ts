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
import { LoginComponent } from './components/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PaginadeInicioComponent,
    PaginadeProductosComponent,
    PaginadeGestionComponent,
    ProductoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
