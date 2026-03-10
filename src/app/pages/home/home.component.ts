import { Component, OnInit } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

// CORRECCIÓN DE IMPORTS
import { Vehicle } from '../../models/vehicle.model';
import { VehicleService } from '../../services/vehicle.service'; // Importamos el Servicio, no el modelo otra vez

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    MatCardModule, 
    MatIconModule, 
    MatButtonModule, 
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { 
  // Usamos el nombre que espera tu HTML: 'latestVehicles' o 'vehicles'
  latestVehicles: Vehicle[] = [];

  constructor(private VehicleService: VehicleService) {} 

  ngOnInit() {
    this.VehicleService.getVehicles().subscribe({
      next: (data: Vehicle[]) => { 
        // Guardamos los últimos 3 vehículos
        this.latestVehicles = data.slice(-3); 
      },
      error: (err) => console.error('Error al cargar vehículos en Home:', err)
    });
  }
}