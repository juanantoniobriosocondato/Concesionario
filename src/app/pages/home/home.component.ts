import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Vehicle } from '../../models/vehicle.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // Datos de prueba: Los últimos 3 disponibles 
  latestVehicles: Vehicle[] = [
    {
      id: 1,
      name: 'Audi A3 Sportback',
      status: 'disponible',
      brand: 'Audi',
      manufacturingYear: 2022,
      registrationDate: new Date('2022-05-15'),
      weight: 1350.5,
      bodyColor: 'Gris Metalizado',
      photoUrl: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f'
    },
    {
      id: 2,
      name: 'Volvo XC40',
      status: 'disponible',
      brand: 'Volvo',
      manufacturingYear: 2023,
      registrationDate: new Date('2023-01-10'),
      weight: 1730.0,
      bodyColor: 'Blanco',
      photoUrl: 'https://images.unsplash.com/photo-1594502184342-2e12f877aa73'
    },
    {
      id: 3,
      name: 'Mercedes Clase A',
      status: 'disponible',
      brand: 'Mercedes',
      manufacturingYear: 2021,
      registrationDate: new Date('2021-11-20'),
      weight: 1445.2,
      bodyColor: 'Negro Noche',
      photoUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d'
    }
  ];
}