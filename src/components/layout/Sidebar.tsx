import Link from "next/link";
import { LayoutDashboard, Ticket } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-64 bg-zinc-900 border-r border-zinc-800 p-6 flex flex-col gap-6">
      {/* Menu de Navegação */}
      <nav className="flex flex-col gap-2">
        
        {/* Botão 1: Volta para a Home (Dashboard) */}
        <Link 
          href="/" 
          className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-zinc-200 hover:bg-zinc-800 transition-colors"
        >
          <LayoutDashboard size={18} />
          <span>Dashboard</span>
        </Link>

        {/* Botão 2: Vai para a Fila de Chamados */}
        <Link 
          href="/chamados" 
          className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-zinc-400 hover:bg-zinc-800 transition-colors"
        >
          <Ticket size={18} />
          <span>Fila de Chamados</span>
        </Link>

      </nav>
    </aside>
  );
}