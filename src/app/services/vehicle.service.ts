import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicle } from '../models/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private apiUrl = 'https://localhost:7055/api/Vehiculo'; 

  constructor(private http: HttpClient) { }

  getVehicles(marca?: string, color?: string, estado?: string, id?: string): Observable<Vehicle[]> {
    let params = new HttpParams();
    
    if (marca) params = params.set('marca', marca);
    if (color) params = params.set('color', color);
    if (estado) params = params.set('estado', estado);
    if (id) params = params.set('id', id); // Para el caso del detalle

    return this.http.get<Vehicle[]>(this.apiUrl, { params });
  }

  getVehicleById(id: string): Observable<Vehicle> {
    return this.http.get<Vehicle>(`${this.apiUrl}/${id}`);
  }
}