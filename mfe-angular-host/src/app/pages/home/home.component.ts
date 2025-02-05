import { Component, OnInit } from '@angular/core';
import { HeaderTitlePageComponent } from '../../components/header-title-page/header-title-page.component';
import { Models } from '../../../../../shared/types/Cliente';
import { getClientes } from '../../../../../shared/storage/clientes';
import { WelcomeComponent } from '../../welcome/welcome.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderTitlePageComponent, WelcomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  clientes = [] as Models.Cliente[];

  ngOnInit(): void {
    this.clientes = getClientes();
  }
}
