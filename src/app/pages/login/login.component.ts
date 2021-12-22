import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '@core/services/auth.service';
import { LoaderService } from '@core/services/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  signInForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  emailControl = this.signInForm.get('email');
  passwordControl = this.signInForm.get('password');

  constructor(
    protected auth: AuthService,
    private fb: FormBuilder,
    private loader: LoaderService
  ) {}

  signIn() {
    if (this.signInForm.valid) {
      const email = this.emailControl?.value as string;
      const password = this.passwordControl?.value as string;
      this.loader.show();
      this.auth.SignIn(email, password).finally(() => this.loader.hide());
    }
  }
}
