import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginadeInicioComponent } from './components/paginade-inicio/paginade-inicio.component';
import { PaginadeGestionComponent } from './components/paginade-gestion/paginade-gestion.component';
import { PaginadeProductosComponent } from './components/paginade-productos/paginade-productos.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'inicio', component: PaginadeInicioComponent, canActivate: [authGuard] },
  { path: 'producto', component: PaginadeProductosComponent, canActivate: [authGuard] },
  { path: 'gestion', component: PaginadeGestionComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
