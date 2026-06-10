import { Prioridade } from "../domain/prioridade";
import { Status } from "../domain/status";

// Props para o Painel Lateral de Controle do Técnico (Onde o Workflow acontece)
export interface WorkflowActionsProps {
  currentStatus: Status;
  currentPrioridade: Prioridade;
  tecnicoId: string | null;
  onStatusChange: (novoStatusId: number) => void;
  onPrioridadeChange: (novaPrioridadeId: number) => void;
  onAssumirTicket: () => void;
}