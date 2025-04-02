import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-MaisInformacoesGabrieleDassa',
  templateUrl: './MaisInformacoesGabrieleDassa.component.html',
  styleUrls: ['./MaisInformacoesGabrieleDassa.component.css']
})
export class MaisInformacoesGabrieleDassaComponent implements OnInit {
 

  constructor() { }

  ngOnInit() {
  }


  downloadCurriculum() {
    const link = document.createElement('a');
    link.href = '../../assets/GABRIELE.pdf';
    link.download = 'Curriculo-Gabriele.pdf';
    link.click();

  }
}
