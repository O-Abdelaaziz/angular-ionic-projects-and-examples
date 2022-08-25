import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';
import { ListNotePageModule } from './../notes/list-note/list-note.module';

@NgModule({
  imports: [
    CommonModule,
    HomePageRoutingModule,
    FormsModule,
    IonicModule,
    ListNotePageModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
