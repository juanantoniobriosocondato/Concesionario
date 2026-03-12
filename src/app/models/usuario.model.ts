export interface Usuario {
  _id?: string;
  Nombre: string;
  Correo: string;
  Rol: string; // 0 para Usuario, 1 para Administrador
}

export interface LoginRequest {
  correo: string;
  password: string;
}