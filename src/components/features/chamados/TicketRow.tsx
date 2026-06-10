import { Ticket } from "@/shared/types/domain/ticket";
import { PriorityBadge } from "@/components/features/badges/PriorityBadge";
import { StatusBadge } from "@/components/features/badges/StatusBadge";
import Link from "next/link";

export function TicketRow({ ticket }: { ticket: Ticket }) {
  return (
    <tr className="hover:bg-zinc-900/30">
      <td className="p-4">
        <div className="font-medium text-zinc-200">{ticket.cliente?.nome}</div>
        <div className="text-xs text-zinc-500">{ticket.titulo}</div>
      </td>
      <td className="p-4 font-mono text-zinc-500">{ticket.protocolo}</td>
      <td className="p-4">
        {/* REAPROVEITANDO os mesmos badges globais, mas dentro de uma célula da tabela */}
        <PriorityBadge prioridadeId={ticket.prioridadeId} nome={ticket.prioridade?.nome} />
      </td>
      <td className="p-4">
        <StatusBadge statusId={ticket.statusId} nome={ticket.status?.nome} />
      </td>
      <td className="p-4 text-right">
        <Link href={`/chamados/${ticket.id}`} className="text-blue-500 text-xs font-semibold">
          Gerenciar
        </Link>
      </td>
    </tr>
  );
}