import { Route } from '@angular/router';
import { RobbyPelssersComponent } from './features/robbypelssers/robbypelssers.component';
import { DemoComponent } from './features/demo/demo.component';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'demo',
  },
  {
    path: 'demo',
    pathMatch: 'full',
    component: DemoComponent,
  },
  {
    path: 'robbypelssers',
    pathMatch: 'full',
    component: RobbyPelssersComponent,
  },
];
