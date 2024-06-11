import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LetsConnectComponent } from './pages/lets-connect/lets-connect.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { TechStackComponent } from './pages/tech-stack/tech-stack.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'about', component: AboutComponent },
  { path: 'lets-connect', component: LetsConnectComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'tech-stack', component: TechStackComponent },

];
