import { Ticket } from "../domain/ticket";

export interface TicketTableProps {
  tickets: Ticket[];
}

export interface TicketRowProps {
  ticket: Ticket;
}