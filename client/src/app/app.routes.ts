import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CreatepageComponent } from './createpage/createpage.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'reservations/create',
    component: CreatepageComponent,
  },
  {
    path: 'reservations/:id',
    component: CreatepageComponent,
  },
];
