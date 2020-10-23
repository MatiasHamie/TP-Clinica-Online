import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { PrivilegiosService } from "../../../servicios/privilegios.service";

import { AuthService } from "../../../servicios/usuarios/auth.service";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  registerForm: FormGroup;
  mostrarMensajeError: string = '';

  constructor(private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private db: PrivilegiosService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(3), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      tipoUsuario: ['paciente'],
    });
  }

  async onRegister() {

    const { email, password } = this.registerForm.value;
    try {
      this.authService.register(email, password)
        .then((user) => {
          console.log('entro al then del registro', user);
          if (user) {
            this.router.navigate(['/home']);
            console.log('Prueba ->', user);
            let data = {
              email: user.user.email,
              tipo: this.registerForm.get('tipoUsuario').value
            }
            this.db.crearUser(data)

          }
          else {
            console.log('error de registro');
            this.router.navigate(['/registro']);
            this.mostrarMensajeError = 'Error: Controle los datos ingresados'
            console.log(this.mostrarMensajeError);
          }
        });
    } catch (error) {
      console.log(error);
    }
    // console.log('Form ->', this.registerForm.value);
  }
}
