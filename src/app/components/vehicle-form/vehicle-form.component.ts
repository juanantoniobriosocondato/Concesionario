import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehicleService } from '../../services/vehicle.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-vehicle-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatDatepickerModule, MatNativeDateModule, RouterLink],
  templateUrl: './vehicle-form.component.html'
})
export class VehicleFormComponent implements OnInit {
  vehicleForm: FormGroup;
  isEditMode = false;
  vehicleId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private vehicleService: VehicleService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // Creamos el grupo de controles (USA MAYÚSCULAS para que coincida con tu Model)
    // En el constructor o donde inicialices el formulario:
this.vehicleForm = this.fb.group({
  Nombre: ['', Validators.required],
  Marca: [1, Validators.required], // 1 para Audi, por ejemplo
  Color: ['', Validators.required],
  Estado: [0, Validators.required], // 0 para Disponible
  Peso: [1500, Validators.required],
  FechaCreacion: [new Date().getFullYear(), Validators.required],
  Fotografia: [''],
  FechaMatriculacion: [new Date().toISOString()]
});
  }

  ngOnInit(): void {
    this.vehicleId = this.route.snapshot.paramMap.get('id');
    if (this.vehicleId) {
      this.isEditMode = true;
      // Si estamos editando, cargamos los datos actuales
      this.vehicleService.getVehicleById(this.vehicleId).subscribe(vehicle => {
        this.vehicleForm.patchValue(vehicle);
      });
    }
  }

  onSubmit() {
  if (this.vehicleForm.valid) {
    const datos = this.vehicleForm.value;

    if (this.isEditMode && this.vehicleId) {
      // Lógica de EDITAR (la que ya te funciona)
      const vehiculoAActualizar = { ...datos, Id: this.vehicleId };
      this.vehicleService.updateVehicle(this.vehicleId, vehiculoAActualizar).subscribe({
        next: () => this.router.navigate(['/']),
        error: (err) => console.error("Error al editar:", err)
      });
    } else {
      // Lógica de CREAR
      // Eliminamos el campo Id del objeto si existe, para que Mongo genere uno nuevo
      const { Id, ...nuevoVehiculo } = datos; 

      this.vehicleService.createVehicle(nuevoVehiculo).subscribe({
        next: () => {
          alert('¡Vehículo creado con éxito!');
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error("Error al crear:", err);
          // Si te da error 400 aquí, mira la pestaña Red para ver qué campo falta
        }
      });
    }
  }
}
}