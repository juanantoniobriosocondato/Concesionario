import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

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
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  // Datos simulados del usuario.
  user = {
    name: 'Administrador Principal',
    email: 'admin@concesionario.com',
    role: 'Admin',
    joinDate: new Date('2023-05-15'), // Fecha de registro
    // Usamos un servicio gratuito para generar un avatar con sus iniciales
    avatarUrl: 'https://ui-avatars.com/api/?name=Admin+Principal&background=d81b60&color=fff&size=128'
  };

  ngOnInit() {
  }

  logout() {
    // Aquí en el futuro llamaremos a AuthService y borraremos el token
    if(confirm('¿Estás seguro de que deseas cerrar la sesión?')) {
      console.log('Sesión cerrada');
      alert('Has cerrado sesión correctamente. (Simulado)');
      // this.router.navigate(['/login']); <-- Para cuando tengamos el router inyectado
    }
  }
}