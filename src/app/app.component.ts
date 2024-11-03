import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { AreasComponent } from './areas/areas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    AreasComponent

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portifolio-Livia-Maria';
}
