import { Component, Input } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [ToolbarModule, ButtonModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {
  @Input() pageTitle: string = 'Home';
}
