import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'controls',
    loadComponent: () =>
      import('./pages/controls/controls.component').then(
        m => m.ControlsComponent
      ),
  },
  {
    path: 'files',
    loadComponent: () =>
      import('./pages/files/files.component').then(m => m.FilesComponent),
  },
  {
    path: '',
    redirectTo: 'controls',
    pathMatch: 'full',
  },
];
