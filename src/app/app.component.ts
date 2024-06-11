import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { ToolbarComponent } from './pages/shared/toolbar/toolbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ToolbarComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio-project';

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
