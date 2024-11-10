import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',

  styleUrl: './contact.component.css'
})
export class ContactComponent {




  downloadCurriculum() {
    const link = document.createElement('a');
    link.href = '../../assets/Curriculum Vitae.pdf';
    link.download = 'curriculo.pdf';
    link.click();

  }

}
