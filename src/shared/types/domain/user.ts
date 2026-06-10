export type PerfilUsuario = 'CLIENTE' | 'TECNICO' | 'ADMIN';

export interface Usuario {
  id: string; // UUID
  nome: string;
  email: string;
  perfil: PerfilUsuario;
  dataCriacao: Date;
}