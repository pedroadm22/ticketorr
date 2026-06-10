import React from "react";
import { Ticket  } from "@/shared/types/domain/ticket";
import { UrgentTicketRow } from "./TicketUrgenteRow";
import { ShieldAlert, ArrowRight} from "lucide-react";
import Link from "next/link";

interface UrgentAlertsProps {
  tickets: Ticket[];
}

export function UrgentAlerts({ tickets }: UrgentAlertsProps) {
  return (
    <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="font-semibold text-red-400 flex items-center gap-2">
            <ShieldAlert size={18} />
            Atenção Imediata ({tickets.length})
          </h2>
          <p className="text-xs text-zinc-400 mt-0.5">Chamados críticos sem técnico atribuído que precisam de triagem.</p>
        </div>
        
        <Link 
          href="/chamados" 
          className="text-xs font-medium text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors"
        >
          Ver fila completa <ArrowRight size={14} />
        </Link>
      </div>

      <div className="space-y-3">
        {tickets.map((ticket) => (
          <UrgentTicketRow key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
}