import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VehicleListComponent } from './pages/vehicle-list/vehicle-list.component';
import { VehicleDetailComponent } from './pages/vehicle-detail/vehicle-detail.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AdminListComponent } from './pages/admin-list/admin-list.component';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'vehiculos', component: VehicleListComponent }, 
  { path: 'vehiculo/:id', component: VehicleDetailComponent }, 
  { path: 'login', component: LoginComponent }, 
  { path: 'perfil', component: ProfileComponent },
  { path: 'admin/vehiculos', component: AdminListComponent },
  { path: 'admin/nuevo', component: VehicleFormComponent },
  { path: 'admin/editar/:id', component: VehicleFormComponent },
  { path: '**', redirectTo: '' }
];