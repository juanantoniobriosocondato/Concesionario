import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Vehicle } from '../../models/vehicle.model';

@Component({
  selector: 'app-vehicle-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './vehicle-detail.component.html'
})
export class VehicleDetailComponent implements OnInit {
  vehicle: Vehicle | undefined;

  // Datos de prueba - En el futuro esto vendrá de una llamada a la API .NET
  private mockVehicles: Vehicle[] = [
    { id: 1, name: 'Audi A3 Sportback', brand: 'Audi', status: 'disponible', manufacturingYear: 2022, registrationDate: new Date('2022-05-15'), weight: 1350.5, bodyColor: 'Gris Metalizado', photoUrl: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f' },
    { id: 2, name: 'Volvo XC40', brand: 'Volvo', status: 'disponible', manufacturingYear: 2023, registrationDate: new Date('2023-01-10'), weight: 1730.0, bodyColor: 'Blanco', photoUrl: 'https://images.unsplash.com/photo-1594502184342-2e12f877aa73' },
    { id: 3, name: 'Mercedes Clase A', brand: 'Mercedes', status: 'disponible', manufacturingYear: 2021, registrationDate: new Date('2021-11-20'), weight: 1445.2, bodyColor: 'Negro Noche', photoUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Obtenemos el ID de la URL
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // Buscamos el vehículo en nuestro array de prueba
    this.vehicle = this.mockVehicles.find(v => v.id === id);
  }
}