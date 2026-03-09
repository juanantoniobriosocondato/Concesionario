export interface Vehicle {
  id?: string;        // Ahora es string (por el ObjectId de MongoDB) y opcional (?)
  nombre: string;
  estado: string;     // Coincide con tu Enum del backend
  marca: string;      // Coincide con tu Enum del backend
  fechaCreacion: number;
  fechaMatriculacion: Date | string;
  peso: number;
  color: string;
  fotografia: string;
}