import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DireitoCivilComponent } from '../direitoCivil/direitoCivil.component';
import { DireitoFamiliaComponent } from '../direitoFamilia/direitoFamilia.component';

/**
 * Componente de Areas de Atuacao
 * Exibe as especialidades juridicas da equipe
 */
@Component({
  selector: 'app-areas',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    DireitoCivilComponent,
    DireitoFamiliaComponent
  ],
  templateUrl: './areas.component.html',
  styleUrl: './areas.component.css'
})
export class AreasComponent {

  constructor(private dialog: MatDialog) { }

  /**
   * Abre o modal com explicacao da area de atuacao
   * @param valor - 'Civil' ou 'Familia'
   */
  Explicacao(valor: string): void {
    if (valor === 'Civil') {
      this.dialog.open(DireitoCivilComponent, {
        width: '90%',
        maxWidth: '700px',
        height: 'auto',
        maxHeight: '90vh',
        panelClass: 'custom-dialog',
        data: { informacoes: valor }
      });
    } else if (valor === 'Familia') {
      this.dialog.open(DireitoFamiliaComponent, {
        width: '90%',
        maxWidth: '700px',
        height: 'auto',
        maxHeight: '90vh',
        panelClass: 'custom-dialog',
        data: { informacoes: valor }
      });
    }
  }
}
