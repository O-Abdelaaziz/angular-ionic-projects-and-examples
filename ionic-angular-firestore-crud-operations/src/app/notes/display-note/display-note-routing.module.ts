import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayNotePage } from './display-note.page';

const routes: Routes = [
  {
    path: '',
    component: DisplayNotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplayNotePageRoutingModule {}
