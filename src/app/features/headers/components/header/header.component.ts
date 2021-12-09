import { Component, EventEmitter, Output } from '@angular/core';
import { faSearch, faUserLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() search = new EventEmitter();
  faUserLock = faUserLock;
  faSearch = faSearch;

  searchChange(value: string) {
    this.search.emit(value);
  }
}
