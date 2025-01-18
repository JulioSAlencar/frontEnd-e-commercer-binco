import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'; // Certifique-se de importar o componente
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { Error404Component } from './error/error-404/error-404.component';
import { PreferencesComponent } from './pages/preferences/preferences.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './login/login.component';
import { MasculineComponent } from './category/masculine/masculine.component';
import { FeminineComponent } from './category/feminine/feminine.component';
import { ChildishComponent } from './category/childish/childish.component';
import { FootwearComponent } from './category/footwear/footwear.component';

export const routes: Routes = [
  { path: 'masculino', component: MasculineComponent },
  { path: 'feminina', component: FeminineComponent },
  { path: 'infantil', component: ChildishComponent },
  { path: 'calçados', component: FootwearComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '404', component: Error404Component },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '404' },
];
