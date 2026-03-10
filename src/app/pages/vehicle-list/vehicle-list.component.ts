import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Necesario para ngModel
import { RouterLink } from '@angular/router';

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

  constructor(private vehicleService: VehicleService) {}

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

  // 3. Métodos que el HTML llama (applyFilters y resetFilters)
  applyFilters() {
    this.filteredVehicles = this.vehicles.filter(v => {
      // Importante: Como en tu DB 'marca' y 'estado' son números, 
      // aquí comparamos con cuidado o convertimos a string
      const matchBrand = !this.filterBrand || String(v.marca) === this.filterBrand;
      const matchColor = !this.filterColor || v.color.toLowerCase().includes(this.filterColor.toLowerCase());
      const matchStatus = !this.filterStatus || String(v.estado) === this.filterStatus;
      
      return matchBrand && matchColor && matchStatus;
    });
  }

  resetFilters() {
    this.filterBrand = '';
    this.filterColor = '';
    this.filterStatus = '';
    this.applyFilters();
  }
}