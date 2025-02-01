import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [RouterModule, FontAwesomeModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
})
export class MenuItemComponent {
  @Input() icon: any;
  @Input() label: string = '';
  @Input() route: string = '';
}
