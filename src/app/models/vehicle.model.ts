export interface Vehicle {
  id: number;
  name: string;
  status: 'disponible' | 'reservado' | 'vendido';
  brand: 'Volvo' | 'Audi' | 'Mercedes';
  manufacturingYear: number;
  registrationDate: Date;
  weight: number;
  bodyColor: string;
  photoUrl: string;
}