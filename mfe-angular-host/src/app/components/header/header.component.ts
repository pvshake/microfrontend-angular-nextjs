import { Component, EventEmitter, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { AvatarDropdownComponent } from '../avatar-dropdown/avatar-dropdown.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, AvatarDropdownComponent],
  templateUrl: '../header/header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  faBars = faBars;

  @Output() toggleMenu = new EventEmitter<void>();
}
