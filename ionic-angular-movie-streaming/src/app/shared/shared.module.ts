import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { SliderComponent } from './slider/slider.component';
import { ModelComponent } from './model/model.component';

@NgModule({
  declarations: [CardComponent, SliderComponent, ModelComponent],
  imports: [CommonModule, FormsModule, IonicModule],
})
export class SharedModule {}
