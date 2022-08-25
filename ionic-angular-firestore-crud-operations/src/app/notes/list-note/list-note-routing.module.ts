import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListNotePage } from './list-note.page';

const routes: Routes = [
  {
    path: '',
    component: ListNotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListNotePageRoutingModule {}
