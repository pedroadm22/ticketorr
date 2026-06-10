import React from "react";
import { Plus } from "lucide-react";
import { PageHeaderProps } from "@/shared/types/ui/page-header.props";

export const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-100">{title}</h1>
        <p className="text-sm text-zinc-400">{description}</p>
      </div>
      <button 
        className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/10"
      >
        <Plus size={16} />
        <span>Abrir Chamado</span>
      </button>
    </div>
  );
};