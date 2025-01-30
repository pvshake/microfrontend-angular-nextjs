import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent }, // Adicione um componente básico para a rota inicial
  { path: '**', redirectTo: '' }, // Redireciona qualquer rota não encontrada para a rota inicial
];
