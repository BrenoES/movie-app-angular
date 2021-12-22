import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@core/services/auth.service';
import { LoaderService } from '@core/services/loader.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  signUpForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  emailControl = this.signUpForm.get('email');
  passwordControl = this.signUpForm.get('password');

  constructor(
    protected auth: AuthService,
    private fb: FormBuilder,
    private loader: LoaderService
  ) {}

  signUp() {
    if (this.signUpForm.valid) {
      const email = this.emailControl?.value as string;
      const password = this.passwordControl?.value as string;
      this.loader.show();
      this.auth.SignUp(email, password).finally(() => this.loader.hide());
    }
  }
}
