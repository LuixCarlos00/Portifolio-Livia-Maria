import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

/**
 * Componente Modal - Mais Informacoes Livia Maria
 * Exibe perfil detalhado da advogada
 */
@Component({
  selector: 'app-mais-informacoes-livia-maria',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './MaisInformacoesLiviaMaria.component.html',
  styleUrl: './MaisInformacoesLiviaMaria.component.css'
})
export class MaisInformacoesLiviaMariaComponent {

  /**
   * Faz download do curriculum em PDF
   */
  downloadCurriculum(): void {
    const link = document.createElement('a');
    link.href = '../../assets/CurriculoLivia.pdf';
    link.download = 'Curriculo-Livia.pdf';
    link.click();
  }
}
