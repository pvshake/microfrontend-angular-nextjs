import { Component } from '@angular/core';
import { HeaderTitlePageComponent } from '../../components/header-title-page/header-title-page.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderTitlePageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
