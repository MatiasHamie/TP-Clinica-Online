import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';


import { first } from 'rxjs/internal/operators/first';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public afAuth: AngularFireAuth,
    private router: Router) { }

  async login(email: string, password: string) {
    try {
      const resultado = await this.afAuth.signInWithEmailAndPassword(email, password);
      return resultado;
    } catch (error) {
      console.log(error);
    }
  }

  async logout() {
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.log(error);
    }
  }

  async register(email: string, password: string) {
    try {
      const resultado = await this.afAuth.createUserWithEmailAndPassword(email, password);
      return resultado;
    } catch (error) {
      console.log(error);
    }
  }

  getCurrentUser() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }
}
