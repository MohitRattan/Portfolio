import { Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { SkillsComponent } from './Components/skills/skills.component';

export const routes: Routes = [
    { path: '', redirectTo: '/about', pathMatch: 'full' }, // Optional: Redirect to about by default
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'contact', component: ContactComponent },
];
