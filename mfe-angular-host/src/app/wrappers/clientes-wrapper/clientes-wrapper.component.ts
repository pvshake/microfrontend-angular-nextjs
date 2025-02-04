import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'app-clientes-wrapper',
  standalone: true,
  templateUrl: './clientes-wrapper.component.html',
  styleUrl: './clientes-wrapper.component.scss',
})
export class ClientesWrapperComponent implements AfterViewInit {
  @ViewChild('wcContainer', { static: true }) wcContainer!: ElementRef;

  async ngAfterViewInit() {
    try {
      await loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:5173/remoteEntry.js',
        exposedModule: './ClientesPageWC',
      });
      const wc = document.createElement('clientes-page-wc');
      this.wcContainer.nativeElement.appendChild(wc);
    } catch (error) {
      console.error('Erro ao carregar o módulo remoto:', error);
    }
  }
}
