import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MaisInformacoesLiviaMariaComponent } from '../MaisInformacoesLiviaMaria/MaisInformacoesLiviaMaria.component';
import { MaisInformacoesGabrieleDassaComponent } from '../MaisInformacoesGabrieleDassa/MaisInformacoesGabrieleDassa.component';

/**
 * Componente de Profissionais
 * Exibe cards elegantes dos advogados da equipe
 */
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MaisInformacoesLiviaMariaComponent,
    MaisInformacoesGabrieleDassaComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  constructor(private dialog: MatDialog) { }

  /**
   * Abre o modal de mais informacoes do profissional
   * @param index - 1 para Livia Maria, 2 para Gabriele Dassa
   */
  openDialog(index: number): void {
    if (index === 1) {
      this.dialog.open(MaisInformacoesLiviaMariaComponent, {
        width: '90%',
        maxWidth: '800px',
        height: 'auto',
        maxHeight: '90vh',
        panelClass: 'custom-dialog'
      });
    } else if (index === 2) {
      this.dialog.open(MaisInformacoesGabrieleDassaComponent, {
        width: '90%',
        maxWidth: '800px',
        height: 'auto',
        maxHeight: '90vh',
        panelClass: 'custom-dialog'
      });
    }
  }
}
