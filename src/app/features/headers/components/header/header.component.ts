import { AfterViewInit, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import {
  faBookmark,
  faSearch,
  faSignInAlt,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import { fromEvent, filter, debounceTime, distinctUntilChanged } from 'rxjs';
import { HasEventTargetAddRemove } from 'rxjs/internal/observable/fromEvent';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {
  @Output() search = new EventEmitter();

  @ViewChild('input', { static: true }) input!: ElementRef;

  faSignInAlt = faSignInAlt;
  faSignOutAlt = faSignOutAlt;
  faSearch = faSearch;
  faBookmark = faBookmark;

  constructor(public auth: AuthService) {}

  ngAfterViewInit() {
    fromEvent(
      this.input.nativeElement as HasEventTargetAddRemove<HTMLInputElement>,
      'keyup'
    )
      .pipe(filter(Boolean), debounceTime(350), distinctUntilChanged())
      .subscribe(() =>
        this.search.emit((<HTMLInputElement>this.input.nativeElement).value)
      );
  }

  async logout() {
    await this.auth.SignOut();
  }

  get isLoggedIn() {
    return this.auth.isLoggedIn;
  }
}
