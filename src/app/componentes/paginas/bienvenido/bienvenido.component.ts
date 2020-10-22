import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../servicios/usuarios/auth.service";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.scss']
})
export class BienvenidoComponent implements OnInit {

  usuarioConectado$: Observable<any> = this.firebase.afAuth.user;
  user;
  estaLogeado: boolean;

  constructor(private firebase: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.usuarioConectado$.subscribe(usuario => {
      this.user = usuario;
      this.estaLogeado = (usuario) ? true : false;
      console.log(this.estaLogeado);
    })
  }

  logout() {
    this.firebase.logout();
    // this.estaLogeado = false;
    // console.log(this.estaLogeado);
    this.router.navigate(['/login']);
  }
}
