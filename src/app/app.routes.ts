import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'; // Certifique-se de importar o componente

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Página inicial
  { path: '**', redirectTo: '' }, // Redireciona para a página inicial para rotas inválidas
];

