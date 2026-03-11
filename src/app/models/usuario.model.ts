export interface Usuario {
  id?: string;
  nombre: string;
  correo: string;
  rol: number; // 0 para Usuario, 1 para Administrador
}

export interface LoginRequest {
  correo: string;
  password: string;
}