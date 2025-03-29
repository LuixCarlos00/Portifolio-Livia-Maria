import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';  // Certifique-se de importar MatCardModule
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MaisInformacoesLiviaMariaComponent } from '../MaisInformacoesLiviaMaria/MaisInformacoesLiviaMaria.component';
import { MaisInformacoesGabrieleDassaComponent } from '../MaisInformacoesGabrieleDassa/MaisInformacoesGabrieleDassa.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatDialogModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  constructor(private dialog: MatDialog) { }


  // Array contendo as informações do card
  cardData = [
    {
      index: 1,
      title: 'LÍVIA MARIA DA SILVEIRA | ADVOGADA',
      subtitle: 'OAB 239.128',
      imageSrc: '../../assets/imagens/Livia.jpg', // Caminho da imagem
      imageAlt: 'Photo of Livia'
    },
    {
      index: 2,
      title: 'GABRIELE DASSA CALIXTO | ASSISTENTE JURIDICO',
      subtitle: '',
      imageSrc: '../../assets/imagens/gabi.jpg', // Caminho da imagem
      imageAlt: 'Photo of GABRIELE DASSA CALIXTO'
    }
  ];




  openDialog(index: any) {

    if (index === 1) {
      this.dialog.open(MaisInformacoesLiviaMariaComponent, {
        width: 'auto',
        height: 'auto'
      });
    }
    else if (index === 2) {
      this.dialog.open(MaisInformacoesGabrieleDassaComponent, {
        width: 'auto',
        height: 'auto'
      });
    }

  }



}
