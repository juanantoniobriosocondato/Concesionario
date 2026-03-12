export interface Vehicle {
  Id: string;        // Ahora es string (por el ObjectId de MongoDB) y opcional (?)
  Nombre: string;
  Estado: string;     // Coincide con tu Enum del backend
  Marca: string;      // Coincide con tu Enum del backend
  FechaCreacion: number;
  FechaMatriculacion: Date | string;
  Peso: number;
  Color: string;
  Fotografia: string;
}