import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AdminComponent } from './features/admin/admin.component';
import { ClienteComponent } from './features/cliente/cliente.component';
import { SindicoComponent } from './features/sindico/sindico.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Gestao de Edificios',
    data: { label: 'Inicio' },
  },
  {
    path: 'administracao',
    component: AdminComponent,
    title: 'Administracao',
    data: { label: 'Administracao' },
  },
  {
    path: 'cliente',
    component: ClienteComponent,
    title: 'Area do Cliente',
    data: { label: 'Area do Cliente' },
  },
  {
    path: 'sindico',
    component: SindicoComponent,
    title: 'Area do Sindico',
    data: { label: 'Area do Sindico' },
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
