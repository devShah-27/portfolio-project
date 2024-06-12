import { Component, Input } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    ToolbarModule,
    ButtonModule,
    RouterLink,
    RouterLinkActive,
    DividerModule,
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {
  @Input() pageTitle: string = 'Home';

  sideBarStatus: boolean = false;

  toggleSidebar() {
    this.sideBarStatus=!this.sideBarStatus
  }
}
