import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  constructor(private spinner: NgxSpinnerService) {}

  show() {
    this.spinner.show().catch((e) => console.error(e));
  }

  hide() {
    this.spinner.hide().catch((e) => console.error(e));
  }
}
