import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { Vehicle } from '../../models/vehicle.model';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [
    CommonModule, FormsModule, MatFormFieldModule, MatSelectModule, 
    MatInputModule, MatButtonModule, MatIconModule, MatCardModule, RouterLink
  ],
  templateUrl: './vehicle-list.component.html'
})
export class VehicleListComponent implements OnInit {
  // Filtros (Se mantienen para la interfaz, pero ahora usan los nombres del Backend)
  filterBrand: string = '';
  filterColor: string = '';
  filterStatus: string = ''; 

  vehicles: Vehicle[] = [];
  filteredVehicles: Vehicle[] = [];

  constructor(private vehicleService: VehicleService) {}

  ngOnInit() {
    this.loadVehicles();
  }

  loadVehicles() {
    this.vehicleService.getVehicles().subscribe({
      next: (data) => {
        this.vehicles = data;
        this.applyFilters(); 
      },
      error: (err) => console.error('Error al conectar con la API:', err)
    });
  }

  applyFilters() {
    this.filteredVehicles = this.vehicles.filter(v => {
      const matchBrand = !this.filterBrand || v.marca === this.filterBrand;
      const matchColor = !this.filterColor || v.color.toLowerCase().includes(this.filterColor.toLowerCase());
      const matchStatus = !this.filterStatus || v.estado === this.filterStatus;
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