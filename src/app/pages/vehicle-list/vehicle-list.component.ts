import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Necesario para ngModel
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

// Imports de Material necesarios para los filtros y las tarjetas
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

// Tu servicio y modelo
import { VehicleService } from '../../services/vehicle.service';
import { Vehicle } from '../../models/vehicle.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    RouterLink,
    MatFormFieldModule, 
    MatSelectModule, 
    MatInputModule, 
    MatButtonModule, 
    MatIconModule, 
    MatCardModule
  ],
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  
  // 1. Variables que el HTML busca (Filtros)
  filterBrand: string = '';
  filterColor: string = '';
  filterStatus: string = ''; 

  // 2. Listas de datos
  vehicles: Vehicle[] = [];          // Datos originales del backend
  filteredVehicles: Vehicle[] = [];  // Datos que se muestran tras filtrar

  constructor(private vehicleService: VehicleService, public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loadVehicles();
  }

  loadVehicles(): void {
    this.vehicleService.getVehicles().subscribe({
      next: (data) => {
        this.vehicles = data;
        this.applyFilters(); // Al cargar, aplicamos filtros (que estarán vacíos)
      },
      error: (e) => console.error('Error al cargar vehículos:', e)
    });
  }

  applyFilters() {
  // Llamamos al servicio con los valores de los filtros
  this.vehicleService.getVehicles(
    this.filterBrand, 
    this.filterColor, 
    this.filterStatus
  ).subscribe({
    next: (data) => {
      this.vehicles = data; 
    },
    error: (e) => console.error('Error al filtrar:', e)
  });
}

  resetFilters() {
    this.filterBrand = '';
    this.filterColor = '';
    this.filterStatus = '';
    this.applyFilters();
  }

eliminarVehiculo(id: string, event: Event) {
  event.stopPropagation();
  if (confirm('¿Estás seguro de que quieres eliminar este vehículo?')) {
    this.vehicleService.deleteVehicle(id).subscribe({
      next: () => {
        // Refrescamos la lista para que el coche desaparezca
        this.loadVehicles(); 
      },
      error: (err) => console.error("Error al borrar", err)
    });
  }
}

getStatusColor(estado: string): string {
  switch (estado?.toLowerCase()) {
    case 'disponible': return '#2e7d32'; // Verde esmeralda
    case 'reservado':  return '#f9a825'; // Amarillo/Naranja
    case 'vendido':    return '#d32f2f'; // Rojo material
    default:           return '#757575'; // Gris por defecto
  }
}

editarVehiculo(id: string, event: Event) {
  event.stopPropagation();
  this.router.navigate(['/admin/editar', id]);
}

crearVehiculo() {
  this.router.navigate(['/admin/nuevo']);
}
}