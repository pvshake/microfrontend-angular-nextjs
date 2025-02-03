import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ElementRef, inject, OnInit } from '@angular/core';
import React from 'react';
import ReactDOM from 'react-dom/client';

@Component({
  selector: 'app-criar-cliente-wrapper',
  standalone: true,
  imports: [],
  templateUrl: './criar-cliente-wrapper.component.html',
  styleUrl: './criar-cliente-wrapper.component.scss',
})
export class CriarClienteWrapperComponent implements OnInit {
  private el = inject(ElementRef);

  async ngOnInit() {
    try {
      const CriarClientePage = await loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:5173/assets/remoteEntry.js',
        exposedModule: './CriarClientePage',
      }).then((m) => m.default);

      if (CriarClientePage) {
        ReactDOM.createRoot(this.el.nativeElement.querySelector('div')).render(
          React.createElement(CriarClientePage)
        );
      } else {
        console.error('CriarClientePage não carregado corretamente');
      }
    } catch (error) {
      console.error('Erro ao carregar o módulo remoto:', error);
    }
  }
}
