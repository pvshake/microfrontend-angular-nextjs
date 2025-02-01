import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faTimes,
  faHome,
  faBoxOpen,
  faFile,
  faCog,
  faChevronRight,
  faChevronLeft,
  faBarsStaggered,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
})
export class SideMenuComponent {
  @Input() sidebarCollapsed!: boolean;
  @Input() hideSidebar!: boolean;

  @Output() setSidebarCollapsed = new EventEmitter<boolean>(); // é tipo o useState do React

  faBars = faBars;
  faBarsStaggered = faBarsStaggered;
  faTimes = faTimes;
  faHome = faHome;
  faBoxOpen = faBoxOpen;
  faFile = faFile;
  faCog = faCog;
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;

  items = [
    {
      routeLink: 'dashboard',
      icon: this.faHome,
      label: 'Dashboard',
    },
    {
      routeLink: 'products',
      icon: this.faBoxOpen,
      label: 'Products',
    },
    {
      routeLink: 'pages',
      icon: this.faFile,
      label: 'Pages',
    },
    {
      routeLink: 'settings',
      icon: this.faCog,
      label: 'Settings',
    },
  ];

  toggleCollapse(): void {
    this.setSidebarCollapsed.emit(!this.sidebarCollapsed);
  }

  closeSidenav(): void {
    this.setSidebarCollapsed.emit(true);
  }

  trackByFn(index: number, item: any): string {
    return item.routeLink;
  }
}
