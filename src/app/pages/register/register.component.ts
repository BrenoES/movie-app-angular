import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@core/services/auth.service';
import { LoaderService } from '@core/services/loader.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  signUpForm!: FormGroup;

  constructor(
    protected auth: AuthService,
    private fb: FormBuilder,
    private loader: LoaderService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  signUp() {
    if (this.signUpForm.valid) {
      const email = this.emailControl?.value as string;
      const password = this.passwordControl?.value as string;
      this.loader.show();
      this.auth.SignUp(email, password).finally(() => this.loader.hide());
    }
  }

  get emailControl() {
    return this.signUpForm.get('email');
  }

  get passwordControl() {
    return this.signUpForm.get('password');
  }
}
