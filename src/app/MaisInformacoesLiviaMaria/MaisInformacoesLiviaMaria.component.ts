import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-MaisInformacoesLiviaMaria',
  templateUrl: './MaisInformacoesLiviaMaria.component.html',
  styleUrls: ['./MaisInformacoesLiviaMaria.component.css']
})
export class MaisInformacoesLiviaMariaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  downloadCurriculum() {
    const link = document.createElement('a');
    link.href = '../../assets/Curriculum Vitae.pdf';
    link.download = 'Curriculo-Livia.pdf';
    link.click();

  }
}
