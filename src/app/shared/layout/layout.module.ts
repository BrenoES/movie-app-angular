import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridComponent } from './components/grid/grid.component';
import { BackdropImageComponent } from './components/backdrop-image/backdrop-image.component';
import { ContainerComponent } from './components/container/container.component';

@NgModule({
  declarations: [GridComponent, BackdropImageComponent, ContainerComponent],
  imports: [CommonModule],
  exports: [GridComponent, BackdropImageComponent, ContainerComponent],
})
export class LayoutModule {}
