import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ExplicacaoComponent } from '../explicacao/explicacao.component';
import { DireitoCivilComponent } from '../direitoCivil/direitoCivil.component';
import { DireitoFamiliaComponent } from '../direitoFamilia/direitoFamilia.component';
import { DireitoTrabalhistaComponent } from '../direitoTrabalhista/direitoTrabalhista.component';
import { DireitoConsumidorComponent } from '../direitoConsumidor/direitoConsumidor.component';



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
    if (valor == 'Civil') {
      const dialogRef = this.dialog.open(DireitoCivilComponent, {
        width: 'auto',
        height: 'auto',
        data: {
          informaçoes: valor
        }
      })
    } else if (valor == 'Familia') {

      const dialogRef = this.dialog.open(DireitoFamiliaComponent, {
        width: 'auto',
        height: 'auto',
        data: {
          informaçoes: valor
        }
      })
    }
    // else if (valor == 'Trabalhista') {
    //   const dialogRef = this.dialog.open(DireitoTrabalhistaComponent, {
    //     width: '50%',
    //     height: '50%',
    //     data: {
    //       informaçoes: valor
    //     }
    //   })
    // }
    // else if (valor == 'Consumidor') {
    //   const dialogRef = this.dialog.open(DireitoConsumidorComponent, {
    //     width: '50%',
    //     height: '50%',
    //     data: {
    //       informaçoes: valor
    //     }
    //   })
    // }

  }

}
