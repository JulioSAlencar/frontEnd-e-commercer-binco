import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'; // Certifique-se de importar o componente
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { Error404Component } from './error/error-404/error-404.component';
import { PreferencesComponent } from './pages/preferences/preferences.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  // { path: 'users', component: UserProfileComponent},
  {
    path: 'users',
    children: [
      { path: 'profile', component: UserProfileComponent },
      { path: 'preferences', component: PreferencesComponent },
    ],
  },
  { path: 'register', component: RegisterComponent },
  { path: '404', component: Error404Component },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '404' }, // Redireciona para a página inicial para rotas inválidas
];
