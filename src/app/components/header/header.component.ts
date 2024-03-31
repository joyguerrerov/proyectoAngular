import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { authGuard } from 'src/app/core/guards/auth.guard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) {
  }


  onClick(ruta: string) {
    this.router.navigateByUrl(ruta);
  }

  onClickLogout() {
    localStorage.removeItem('token_crm');
    this.router.navigateByUrl('/');
  }

}
