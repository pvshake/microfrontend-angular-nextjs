import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-title-page',
  standalone: true,
  imports: [],
  templateUrl: './header-title-page.component.html',
  styleUrl: './header-title-page.component.scss',
})
export class HeaderTitlePageComponent {
  @Input() title: string = '';
}
