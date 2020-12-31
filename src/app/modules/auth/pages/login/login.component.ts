import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AppAnimations } from '@shared/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations   : AppAnimations
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  isLoading: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildLoginForm();
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {

  }

  getErrorMessage() {
    if (this.loginForm.get("email")?.hasError('required')) {
      return 'El Correo es Requerido';
    }

    return this.loginForm.get("email")?.hasError('email') ? 'Ingrese un correo valido' : '';
  }

  getErrorPassword() {
    return this.loginForm.get("password")?.hasError('required') ? 'La Contraseña es requerida' : '';
  }

  private buildLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

}
