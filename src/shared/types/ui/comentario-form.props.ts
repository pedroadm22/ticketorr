import { TipoComentario } from "../domain/comentario";
import { PerfilUsuario } from "../domain/user";

// Props para o Form de Envio de Novo Comentário/Nota Interna
export interface ComentarioFormProps {
  ticketId: string;
  perfilUsuario: PerfilUsuario; // Técnicos precisam ver a opção de "Nota Interna"
  onSendComentario: (texto: string, tipo: TipoComentario) => Promise<void>;
}