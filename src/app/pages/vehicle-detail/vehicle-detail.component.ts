import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { VehicleService } from '../../services/vehicle.service';
import { Vehicle } from '../../models/vehicle.model';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-vehicle-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule, MatIconModule, MatProgressSpinnerModule],
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})
export class VehicleDetailComponent implements OnInit {
  vehicle: Vehicle | undefined;

  constructor(
    private route: ActivatedRoute,
    private vehicleService: VehicleService
  ) {}

  ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id');
  if (id) {
    this.vehicleService.getVehicleById(id).subscribe({
      next: (data) => {
        this.vehicle = data; // YA NO USAMOS [0]
      },
      error: (err) => console.error("Error al cargar el coche", err)
    });
  }
}

reservar() {
  if (this.vehicle && this.vehicle.Id) {
    // Cambiamos el 1 por "Reservado" para que sea un string
    const vehiculoReservado: Vehicle = { 
      ...this.vehicle, 
      Estado: "Reservado" 
    };

    this.vehicleService.updateVehicle(this.vehicle.Id, vehiculoReservado).subscribe({
      next: () => {
        this.vehicle!.Estado = "Reservado"; 
        alert('¡Reserva realizada con éxito!');
      },
      error: (err) => console.error("Error al reservar", err)
    });
  }
}
}