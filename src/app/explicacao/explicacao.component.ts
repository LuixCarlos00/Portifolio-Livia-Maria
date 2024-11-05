import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-explicacao',
  standalone: true,
  imports: [],
  templateUrl: './explicacao.component.html',
  styleUrl: './explicacao.component.css'
})
export class ExplicacaoComponent implements OnInit {

  Explicacao: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string,

  ) { }

  ngOnInit(): void {

    if (this.data == 'Civil') {
      this.Explicacao = '';
    } else if (this.data == 'Informatica') {
      this.Explicacao = '';
    } else if (this.data == 'Trabalhista') {
      this.Explicacao = '';
    } else if (this.data == 'Consumidor') {
      this.Explicacao = '';
    }

  }

}
