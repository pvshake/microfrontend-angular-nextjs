import { Component, ElementRef, inject, OnInit } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import React from 'react';
import ReactDOM from 'react-dom/client';

@Component({
  selector: 'app-clientes-wrapper',
  standalone: true,
  imports: [],
  templateUrl: './clientes-wrapper.component.html',
  styleUrl: './clientes-wrapper.component.scss',
})
export class ClientesWrapperComponent implements OnInit {
  private el = inject(ElementRef);

  async ngOnInit() {
    try {
      const ClientesPage = await loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:5173/assets/remoteEntry.js',
        exposedModule: './ClientesPage',
      }).then((m) => m.default);

      if (ClientesPage) {
        ReactDOM.createRoot(this.el.nativeElement.querySelector('div')).render(
          React.createElement(ClientesPage)
        );
      } else {
        console.error('ClientesPage não carregado corretamente');
      }
    } catch (error) {
      console.error('Erro ao carregar o módulo remoto:', error);
    }
  }
}
