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
  // Filtros 
  filterBrand: string = '';
  filterColor: string = '';
  filterStatus: string = ''; 

  vehicles: Vehicle[] = [
    { id: 1, name: 'Audi A3 Sportback', brand: 'Audi', status: 'disponible', manufacturingYear: 2022, registrationDate: new Date(), weight: 1350, bodyColor: 'Gris', photoUrl: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f' },
    { id: 2, name: 'Volvo XC40', brand: 'Volvo', status: 'disponible', manufacturingYear: 2023, registrationDate: new Date(), weight: 1730, bodyColor: 'Blanco', photoUrl: 'https://images.unsplash.com/photo-1594502184342-2e12f877aa73' },
    { id: 3, name: 'Mercedes Clase A', brand: 'Mercedes', status: 'reservado', manufacturingYear: 2021, registrationDate: new Date(), weight: 1445, bodyColor: 'Negro', photoUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d' },
  ];

  filteredVehicles: Vehicle[] = [];

  ngOnInit() {
  console.log('Vehículos totales:', this.vehicles.length);
  this.applyFilters();
  console.log('Vehículos tras filtrar:', this.filteredVehicles.length);
}

  applyFilters() {
    this.filteredVehicles = this.vehicles.filter(v => {
      const matchBrand = !this.filterBrand || v.brand === this.filterBrand;
      const matchColor = !this.filterColor || v.bodyColor.toLowerCase().includes(this.filterColor.toLowerCase());
      const matchStatus = !this.filterStatus || v.status === this.filterStatus;
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