import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

import { AuthService } from "../../../servicios/usuarios/auth.service";
import { noUndefined } from '@angular/compiler/src/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  mostrarMensajeError: string = '';

  constructor(private authService: AuthService,
    private router: Router,
    private fb: FormBuilder) { }


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(3), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  async onLogin() {
    // console.log('Form ->', this.loginForm.value);
    const { email, password } = this.loginForm.value;
    try {
      this.authService.login(email, password)
        .then((user) => {
          console.log('entro al then del login', user);
          if (user) {
            this.router.navigate(['/home']);
          }
          else {
            console.log('error de logueo');
            this.router.navigate(['/login']);
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

  loginPrueba() {
    this.loginForm.setValue({
      email: 'admin@admin.com',
      password: '1234qwer'
    })
  }
}
