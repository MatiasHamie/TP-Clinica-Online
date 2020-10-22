import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from "../../../servicios/usuarios/auth.service";

@Injectable({
  providedIn: 'root'
})
export class VerificarLoginGuard implements CanActivate {

  constructor(private firebaseLogin: AuthService, private router: Router) { }


  canActivate(): Observable<boolean> {
    return this.firebaseLogin.afAuth.user.pipe(map(user => {
      if (!user) {
        this.router.navigate(['/login'])
        return false;
      }
      return true;
    }))
  }
}
