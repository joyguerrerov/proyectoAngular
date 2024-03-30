import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginadeInicioComponent } from './components/paginade-inicio/paginade-inicio.component';
import { PaginadeGestionComponent } from './components/paginade-gestion/paginade-gestion.component';
import { PaginadeProductosComponent } from './components/paginade-productos/paginade-productos.component';

const routes: Routes = [
  { path: '', component: PaginadeInicioComponent },
  { path: 'producto', component: PaginadeProductosComponent},
  { path: 'gestion', component: PaginadeGestionComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
