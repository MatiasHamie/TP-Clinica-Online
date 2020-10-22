import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/servicios/usuarios/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  usuarioConectado$: Observable<any> = this.afAuth.afAuth.user;

  constructor(private afAuth: AuthService) { }

  ngOnInit(): void {
  }

}
