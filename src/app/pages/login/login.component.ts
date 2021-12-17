import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '@core/services/auth.service';
import { LoaderService } from '@core/services/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  signInForm!: FormGroup;

  constructor(
    protected auth: AuthService,
    private fb: FormBuilder,
    private loader: LoaderService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  signIn() {
    if (this.signInForm.valid) {
      const email = this.email?.value as string;
      const password = this.password?.value as string;
      this.loader.show();
      this.auth.SignIn(email, password).finally(() => this.loader.hide());
    }
  }

  get email() {
    return this.signInForm.get('email');
  }

  get password() {
    return this.signInForm.get('password');
  }
}
