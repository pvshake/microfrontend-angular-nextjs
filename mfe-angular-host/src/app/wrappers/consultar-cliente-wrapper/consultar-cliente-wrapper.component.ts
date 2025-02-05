import { loadRemoteModule } from '@angular-architects/module-federation';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { HeaderTitlePageComponent } from '../../components/header-title-page/header-title-page.component';

@Component({
  selector: 'app-consultar-cliente-wrapper',
  standalone: true,
  imports: [HeaderTitlePageComponent],
  templateUrl: './consultar-cliente-wrapper.component.html',
  styleUrl: './consultar-cliente-wrapper.component.scss',
})
export class ConsultarClienteWrapperComponent implements AfterViewInit {
  @ViewChild('wcContainer', { static: true }) wcContainer!: ElementRef;

  async ngAfterViewInit() {
    try {
      await loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:5173/remoteEntry.js',
        exposedModule: './ConsultarClientePageWC',
      });
      const wc = document.createElement('consultar-cliente-page-wc');
      this.wcContainer.nativeElement.appendChild(wc);
    } catch (error) {
      console.error('Erro ao carregar o módulo remoto:', error);
    }
  }
}
