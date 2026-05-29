import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-mais-informacoes-gabriele-dassa',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './MaisInformacoesGabrieleDassa.component.html',
  styleUrl: './MaisInformacoesGabrieleDassa.component.css'
})
export class MaisInformacoesGabrieleDassaComponent {
  downloadCurriculum(): void {
    const link = document.createElement('a');
    link.href = '../../assets/GABRIELE.pdf';
    link.download = 'Curriculo-Gabriele.pdf';
    link.click();
  }
}
