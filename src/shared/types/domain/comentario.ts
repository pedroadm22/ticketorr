import { Usuario } from "./user";

export type TipoComentario = 'PUBLICO' | 'INTERNO';

export interface Comentario {
  id: string;
  ticketId: string;
  usuarioId: string;
  texto: string; // Suporta Markdown
  tipo: TipoComentario; 
  dataCriacao: Date;
  usuario?: Usuario;
}