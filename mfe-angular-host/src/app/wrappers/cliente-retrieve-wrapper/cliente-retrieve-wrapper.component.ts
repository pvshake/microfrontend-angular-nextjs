import { loadRemoteModule } from '@angular-architects/module-federation';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { HeaderTitlePageComponent } from '../../components/header-title-page/header-title-page.component';

@Component({
  selector: 'app-cliente-retrieve-wrapper',
  standalone: true,
  imports: [HeaderTitlePageComponent],
  templateUrl: './cliente-retrieve-wrapper.component.html',
  styleUrl: './cliente-retrieve-wrapper.component.scss',
})
export class ClienteRetrieveWrapperComponent implements AfterViewInit {
  @ViewChild('wcContainer', { static: true }) wcContainer!: ElementRef;

  async ngAfterViewInit() {
    try {
      await loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:5173/remoteEntry.js',
        exposedModule: './ClienteRetrievePageWC',
      });
      const wc = document.createElement('cliente-retrieve-page-wc');
      this.wcContainer.nativeElement.appendChild(wc);
    } catch (error) {
      console.error('Erro ao carregar o módulo remoto:', error);
    }
  }
}
