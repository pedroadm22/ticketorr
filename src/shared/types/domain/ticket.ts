import { Usuario } from "./user";
import { Status } from "./status";
import { Prioridade } from "./prioridade";

export interface Ticket {
  id: string; // UUID
  protocolo: string; // Ex: TK-2026-001
  titulo: string;
  descricao: string;
  clienteId: string;
  tecnicoId: string | null; // Nulo até que um técnico assuma (Workflow)
  statusId: number;
  prioridadeId: number;
  dataCriacao: Date;
  dataAtualizacao: Date;
  
  // Relacionamentos carregados opcionalmente (Joins / Includes)
  cliente?: Usuario;
  tecnico?: Usuario | null;
  status?: Status;
  prioridade?: Prioridade;
}