import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidoComponent } from './componentes/paginas/bienvenido/bienvenido.component';
import { ErrorComponent } from './componentes/paginas/error/error.component';
import { LoginComponent } from './componentes/usuario/login/login.component';
import { RegistroComponent } from './componentes/usuario/registro/registro.component';

import { VerificarLoginGuard } from "./componentes/compartido/guards/verificar-login.guard";

const routes: Routes = [
  { path: 'home', component: BienvenidoComponent, canActivate: [VerificarLoginGuard] },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'error', component: ErrorComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
