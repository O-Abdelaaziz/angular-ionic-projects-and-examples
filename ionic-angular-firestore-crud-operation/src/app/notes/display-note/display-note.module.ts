import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayNotePageRoutingModule } from './display-note-routing.module';

import { DisplayNotePage } from './display-note.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplayNotePageRoutingModule
  ],
  declarations: [DisplayNotePage]
})
export class DisplayNotePageModule {}
