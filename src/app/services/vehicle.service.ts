import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicle } from '../models/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private apiUrl = 'https://localhost:7055/api/Vehiculo'; 

  constructor(private http: HttpClient) { }

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.apiUrl);
  }

  // CORRECCIÓN: Retorna un objeto único 'Vehicle', no una lista 'Vehicle[]'
  // También corregimos las comillas hacia atrás (backticks)
  getVehicleById(id: string): Observable<Vehicle> {
    return this.http.get<Vehicle>(`${this.apiUrl}/${id}`);
  }

  createVehicle(vehicle: Vehicle): Observable<any> {
    return this.http.post(this.apiUrl, vehicle);
  }

  deleteVehicle(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}