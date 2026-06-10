"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Package, BarChart3, Settings, LogOut, Ticket } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
}

export function Sidebar({ isOpen }: SidebarProps) {
  const pathname = usePathname();

  const menuItems = [
    { label: "Chamados", href: "/dashboard", icon: Ticket },
    { label: "Métricas", href: "/dashboard/metricas", icon: BarChart3 },
    { label: "Configurações", href: "/dashboard/configuracoes", icon: Settings },
  ];

  return (
    <aside 
      className={`flex flex-col justify-between border-r border-zinc-800 bg-zinc-900/30 transition-all duration-300 overflow-y-auto
        ${isOpen ? "w-64 px-4 py-6" : "w-0 p-0 border-none opacity-0"}`}
    >
      <nav className="flex flex-col gap-1.5">
        <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-2 whitespace-nowrap">
          Gerenciamento
        </p>
        
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link 
              key={item.href}
              href={item.href} 
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all group whitespace-nowrap
                ${isActive 
                  ? "bg-blue-950/40 text-blue-400 border border-blue-900/50" 
                  : "text-zinc-300 hover:bg-zinc-800 hover:text-blue-400"
                }`}
            >
              <Icon size={18} className={isActive ? "text-blue-400" : "text-zinc-400 group-hover:text-blue-400"} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <button className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-red-400 hover:bg-red-950/30 transition-all mt-auto w-full whitespace-nowrap">
        <LogOut size={18} />
        <span>Sair do Sistema</span>
      </button>
    </aside>
  );
}