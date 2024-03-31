import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  // console.log('Pasa por el Guard');

  console.log(localStorage.getItem('token_crm'));

  if (localStorage.getItem('token_crm')) {
    return true;
  } else {
    alert('Debes acceder a la aplicación');
    router.navigateByUrl('/login')
    return false;
  }

};
