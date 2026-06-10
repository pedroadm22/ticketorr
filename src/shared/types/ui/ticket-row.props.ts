import { Ticket } from "../domain/ticket";

export interface TicketRowProps {
  ticket: Ticket;
  onManageClick: (ticketId: string) => void; // Ação para abrir a gerência do chamado
}