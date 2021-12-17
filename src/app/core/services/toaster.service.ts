import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  constructor(private toastr: ToastrService) {}

  success(title: string, message: string) {
    this.toastr.success(message, title);
  }
  error(message: string) {
    this.toastr.error(message);
  }
}
