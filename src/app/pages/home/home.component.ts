import { Component, OnInit } from '@angular/core'; //
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { Vehicle } from '../../models/vehicle.model';
import { VehicleService } from '../../services/vehicle.service'; // Importante para el error rojo

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { // Aquí ya no debería marcar error OnInit
  latestVehicles: Vehicle[] = [];

  constructor(private vehicleService: VehicleService) {} // Aquí ya no debería marcar error VehicleService

  ngOnInit() {
    this.vehicleService.getVehicles().subscribe({
      next: (data: any[]) => { // Usamos :any[] para que no de error con 'data'
        // Guardamos los últimos 3 vehículos de MongoDB para la Home
        this.latestVehicles = data.slice(-3); 
      },
      error: (err) => console.error('Error al cargar vehículos en Home:', err)
    });
  }
}