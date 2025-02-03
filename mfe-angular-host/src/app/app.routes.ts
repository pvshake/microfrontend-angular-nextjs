import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'clientes',
    loadComponent: () =>
      import('./wrappers/clientes-wrapper/clientes-wrapper.component').then(
        (c) => c.ClientesWrapperComponent
      ),
  },
  // {
  //   path: 'criar-cliente',
  //   loadComponent: () =>
  //     import(
  //       './wrappers/criar-cliente-wrapper/criar-cliente-wrapper.component'
  //     ).then((c) => c.CriarClienteWrapperComponent),
  // },
  // {
  //   path: 'consultar-cliente',
  //   loadComponent: () =>
  //     import(
  //       './wrappers/consultar-cliente-wrapper/consultar-cliente-wrapper.component'
  //     ).then((c) => c.ConsultarClienteWrapperComponent),
  // },
  // {
  //   path: 'clientes/:clienteId',
  //   loadComponent: () =>
  //     import(
  //       './wrappers/cliente-retrieve-wrapper/cliente-retrieve-wrapper.component'
  //     ).then((c) => c.ClienteRetrieveWrapperComponent),
  // },
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent), // Lazy loading!!!
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/page-not-found/page-not-found.component').then(
        (c) => c.PageNotFoundComponent
      ),
  },
];
