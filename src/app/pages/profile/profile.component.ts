import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { AuthService } from '../../services/auth.service'; // Ajusta la ruta
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule, 
    MatCardModule, 
    MatButtonModule, 
    MatIconModule, 
    MatDividerModule
  ],
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  
  user: any = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    // Nos suscribimos al usuario actual del servicio
    this.authService.currentUser$.subscribe(userData => {
      if (userData) {
        this.user = {
          name: userData.Nombre,
          email: userData.Correo,
          role: userData.Rol,
          // Si no tienes fecha de registro en el modelo, podemos dejar la de hoy o una fija
          joinDate: new Date('2024-01-01'), 
          avatarUrl: `https://ui-avatars.com/api/?name=${userData.Nombre}&background=d81b60&color=fff&size=128`
        };
      }
    });
  }

  logout() {
    if(confirm('¿Estás seguro de que deseas cerrar la sesión?')) {
      this.authService.logout(); // Llamamos al método real de tu servicio
      this.router.navigate(['/login']);
    }
  }
}