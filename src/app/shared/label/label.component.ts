import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
})
export class LabelComponent {
  @Input() classes = 'label-default';
  @HostBinding('class') class = this.getStyle();

  getStyle() {
    return `label ${this.classes}`;
  }
}
