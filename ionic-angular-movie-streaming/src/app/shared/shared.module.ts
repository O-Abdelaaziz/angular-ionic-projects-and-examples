import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { SliderComponent } from './slider/slider.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [CardComponent, SliderComponent, ModalComponent],
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [CardComponent, SliderComponent, ModalComponent],
})
export class SharedModule {}
