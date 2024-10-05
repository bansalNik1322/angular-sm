import { Routes } from '@angular/router';
import { authRoutes } from '../components/Auth/auth.routes';

export const routes: Routes = [
  {
    path: 'auth',
    children: authRoutes,
  },
];
