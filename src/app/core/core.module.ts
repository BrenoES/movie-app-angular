import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule, HttpClientModule],
  exports: [CommonModule, ReactiveFormsModule, RouterModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
})
export class CoreModule {}
