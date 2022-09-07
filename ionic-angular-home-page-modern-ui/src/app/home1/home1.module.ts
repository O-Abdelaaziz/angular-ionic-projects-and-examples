import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage1 } from './home1.page';

import { Home1PageRoutingModule } from './home1-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, Home1PageRoutingModule],
  declarations: [HomePage1],
})
export class HomePageModule {}
