import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon'; // Importar
import { MatButtonModule } from '@angular/material/button'; // Importar

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, MatIconModule, MatButtonModule], // Declarar
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent { }
