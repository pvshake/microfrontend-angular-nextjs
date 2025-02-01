import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-avatar-dropdown',
  standalone: true,
  imports: [NgIf, AvatarModule, FontAwesomeModule],
  templateUrl: './avatar-dropdown.component.html',
  styleUrl: './avatar-dropdown.component.scss',
})
export class AvatarDropdownComponent {
  faRightFromBracket = faRightFromBracket;
  faUser = faUser;

  @Input() image: string = '';
  @Input() size: 'normal' | 'large' | 'xlarge' | undefined = 'large';
  @Input() shape: 'square' | 'circle' | undefined = 'circle';
  @Input() label: string = '';

  isOpen = false;

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }
}
