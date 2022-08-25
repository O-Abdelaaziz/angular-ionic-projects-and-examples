import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateNotePageRoutingModule } from './create-note-routing.module';

import { CreateNotePage } from './create-note.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CreateNotePageRoutingModule,
  ],
  declarations: [CreateNotePage],
})
export class CreateNotePageModule {}
