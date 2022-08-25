import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListNotePageRoutingModule } from './list-note-routing.module';

import { ListNotePage } from './list-note.page';
import { PriorityColorPipe } from './priority-color.pipe';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ListNotePageRoutingModule],
  exports: [ListNotePage],
  declarations: [ListNotePage, PriorityColorPipe],
})
export class ListNotePageModule {}
