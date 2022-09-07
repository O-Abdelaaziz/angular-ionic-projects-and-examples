import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage1 } from './home1.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage1,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Home1PageRoutingModule {}
