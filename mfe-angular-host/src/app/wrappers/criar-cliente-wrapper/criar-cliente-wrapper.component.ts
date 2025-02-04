import { loadRemoteModule } from '@angular-architects/module-federation';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-criar-cliente-wrapper',
  standalone: true,
  imports: [],
  templateUrl: './criar-cliente-wrapper.component.html',
  styleUrl: './criar-cliente-wrapper.component.scss',
})
export class CriarClienteWrapperComponent implements AfterViewInit {
  @ViewChild('wcContainer', { static: true }) wcContainer!: ElementRef;

  async ngAfterViewInit() {
    try {
      await loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:5173/remoteEntry.js',
        exposedModule: './CriarClientePageWC',
      });
      const wc = document.createElement('criar-cliente-page-wc');
      this.wcContainer.nativeElement.appendChild(wc);
    } catch (error) {
      console.error('Erro ao carregar o módulo remoto:', error);
    }
  }
}
