import { Route } from '@angular/router';
import { RobbyPelssersComponent } from './features/robbypelssers/robbypelssers.component';

export const appRoutes: Route[] = [
  {
    path: 'robbypelssers',
    pathMatch: 'full',
    component: RobbyPelssersComponent,
  },
];
