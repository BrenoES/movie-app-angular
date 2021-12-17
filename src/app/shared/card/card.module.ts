import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { CardImageComponent } from './components/card-image/card-image.component';
import { CardInfoComponent } from './components/card-info/card-info.component';

@NgModule({
  declarations: [CardComponent, CardImageComponent, CardInfoComponent],
  imports: [CommonModule],
  exports: [CardComponent, CardImageComponent, CardInfoComponent],
})
export class CardModule {}
