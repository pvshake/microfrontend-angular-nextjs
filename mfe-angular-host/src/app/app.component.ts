import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    HeaderComponent,
    SideMenuComponent,
    FontAwesomeModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'mfe-angular-host';

  sidebarCollapsed = signal<boolean>(false);
  screenWidth = signal<number>(window.innerWidth);
  isMobile = signal<boolean>(this.screenWidth() < 768);
  hideSidebar = signal<boolean>(this.isMobile());

  @HostListener('window:resize')
  onResize() {
    this.screenWidth.set(window.innerWidth);
    this.isMobile.set(this.screenWidth() < 768);
    this.hideSidebar.set(this.isMobile());

    if (this.isMobile()) {
      this.sidebarCollapsed.set(true);
    }
  }

  ngOnInit(): void {
    this.isMobile.set(this.screenWidth() < 768);
    this.hideSidebar.set(this.isMobile());
    this.sidebarCollapsed.set(this.isMobile());
  }

  setSidebarCollapsed(sidebarCollapsed: boolean): void {
    this.sidebarCollapsed.set(sidebarCollapsed);
  }
}
