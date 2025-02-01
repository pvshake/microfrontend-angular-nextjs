import { CommonModule, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import sideMenuItems from '../../../constants/sideMenuItems';
import { MenuItemComponent } from './menu-item/menu-item.component';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [
    NgIf,
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    MenuItemComponent,
  ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
})
export class SideMenuComponent {
  faTimes = faTimes;

  @Input() menuItems: Models.MenuItem[] = sideMenuItems;
  @Input() isExpanded = false;
  @Output() closeMenu = new EventEmitter<void>();
}
