import { Comentario } from "../domain/comentario";

// Props para o Bloco de Comentário (Card individual na Timeline)
export interface ComentarioItemProps {
  comentario: Comentario;
  usuarioLogadoId: string; // Para alinhar à direita/esquerda ou destacar se for o próprio autor
}