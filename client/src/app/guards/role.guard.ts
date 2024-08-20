import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export const roleGuard: CanActivateFn = (route, state) => {
  const roles = route.data["roles"] as string[];
  const authService = inject(AuthService);
  const matSnackBar = inject(MatSnackBar);
  const router = inject(Router);

  const userRoles = authService.getRoles();

  if(!authService.isLoggedIn()){
    router.navigate(["/login"]);

    matSnackBar.open("You must log in to view this page.", "Ok", {
      duration:5000
    })

    return false;
  }

  if(roles.some((role)=>userRoles?.includes(role))) return true;

  router.navigate(["/"])
  matSnackBar.open("You do not have permission to view this page", 'Ok', {
    duration:5000,
  });

  return false;
};
