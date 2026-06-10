import { Ticket } from "@/shared/types/domain/ticket";
import { TicketRow } from "./TicketRow";

export function TicketTable({ tickets }: { tickets: Ticket[] }) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/20 overflow-hidden">
      <table className="w-full text-left text-sm text-zinc-400">
        <thead className="bg-zinc-900/10 text-xs font-semibold text-zinc-300 uppercase border-b border-zinc-800">
          <tr>
            <th className="p-4">Usuário / Assunto</th>
            <th className="p-4">Protocolo</th>
            <th className="p-4">Prioridade</th>
            <th className="p-4">Status</th>
            <th className="p-4 text-right">Ações</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-800/60">
          {tickets.map((ticket) => (
            <TicketRow key={ticket.id} ticket={ticket} />
          ))}
        </tbody>
      </table>
    </div>
  );
}