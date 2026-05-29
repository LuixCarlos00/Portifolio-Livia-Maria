import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-direito-civil',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './direitoCivil.component.html',
  styleUrl: './direitoCivil.component.css'
})
export class DireitoCivilComponent {
}
