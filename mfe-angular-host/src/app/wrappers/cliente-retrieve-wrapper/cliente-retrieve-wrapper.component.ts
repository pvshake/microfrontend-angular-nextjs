import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ElementRef, inject, OnInit } from '@angular/core';
import React from 'react';
import ReactDOM from 'react-dom/client';

@Component({
  selector: 'app-cliente-retrieve-wrapper',
  standalone: true,
  imports: [],
  templateUrl: './cliente-retrieve-wrapper.component.html',
  styleUrl: './cliente-retrieve-wrapper.component.scss',
})
export class ClienteRetrieveWrapperComponent implements OnInit {
  private el = inject(ElementRef);

  async ngOnInit() {
    try {
      const ClienteRetrievePage = await loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:5173/assets/remoteEntry.js',
        exposedModule: './ClienteRetrievePage',
      }).then((m) => m.default);

      if (ClienteRetrievePage) {
        ReactDOM.createRoot(this.el.nativeElement.querySelector('div')).render(
          React.createElement(ClienteRetrievePage)
        );
      } else {
        console.error('ClienteRetrievePage não carregado corretamente');
      }
    } catch (error) {
      console.error('Erro ao carregar o módulo remoto:', error);
    }
  }
}
