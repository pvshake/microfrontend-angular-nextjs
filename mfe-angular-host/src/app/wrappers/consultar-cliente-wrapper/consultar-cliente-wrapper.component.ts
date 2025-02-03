import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ElementRef, inject, OnInit } from '@angular/core';
import React from 'react';
import ReactDOM from 'react-dom/client';

@Component({
  selector: 'app-consultar-cliente-wrapper',
  standalone: true,
  imports: [],
  templateUrl: './consultar-cliente-wrapper.component.html',
  styleUrl: './consultar-cliente-wrapper.component.scss',
})
export class ConsultarClienteWrapperComponent implements OnInit {
  private el = inject(ElementRef);

  async ngOnInit() {
    try {
      const ConsultarClientePage = await loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:5173/assets/remoteEntry.js',
        exposedModule: './ConsultarClientePage',
      }).then((m) => m.default);

      if (ConsultarClientePage) {
        ReactDOM.createRoot(this.el.nativeElement.querySelector('div')).render(
          React.createElement(ConsultarClientePage)
        );
      } else {
        console.error('ConsultarClientePage não carregado corretamente');
      }
    } catch (error) {
      console.error('Erro ao carregar o módulo remoto:', error);
    }
  }
}
