import { Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ExplicacaoComponent } from '../explicacao/explicacao.component';



@Component({
  selector: 'app-areas',
  standalone: true,
  imports: [
    MatDialogModule
  ],
  templateUrl: './areas.component.html',
  styleUrl: './areas.component.css'
})
export class AreasComponent implements OnInit {

  constructor(private dialog: MatDialog) { }


  ngOnInit(): void {

  }



  Explicacao(valor: string) {
    const dialogRef = this.dialog.open(ExplicacaoComponent, {
      width: '50%',
      height: '50%',
      data: {
        informaçoes: 'valor'
      }
    })
  }

}
