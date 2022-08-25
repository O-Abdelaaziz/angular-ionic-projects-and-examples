import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'list-note',
    loadChildren: () =>
      import('./notes/list-note/list-note.module').then(
        (m) => m.ListNotePageModule
      ),
  },
  {
    path: 'display-note/:id',
    loadChildren: () =>
      import('./notes/display-note/display-note.module').then(
        (m) => m.DisplayNotePageModule
      ),
  },
  {
    path: 'create-note',
    loadChildren: () => import('./notes/create-note/create-note.module').then( m => m.CreateNotePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
