import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-backdrop-image',
  templateUrl: './backdrop-image.component.html',
  styleUrls: ['./backdrop-image.component.scss'],
})
export class BackdropImageComponent {
  @Input() src!: string;
}
