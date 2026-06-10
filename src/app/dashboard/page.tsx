"use client";

import React from "react";
import { Plus, Ticket, Clock, CheckCircle2, AlertCircle } from "lucide-react";

export default function ChamadosPage() {
  return (
    <div className="space-y-8">
      {/* Título da Página e Botão de Ação */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Fila de Chamados</h1>
          <p className="text-sm text-zinc-400">Monitore, responda e gerencie os tickets de suporte dos usuários.</p>
        </div>
        <button className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/10">
          <Plus size={16} />
          <span>Abrir Chamado</span>
        </button>
      </div>

      {/* Cards de Métricas de Atendimento */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 backdrop-blur-sm">
          <div className="flex items-center justify-between text-zinc-400 text-xs font-medium uppercase tracking-wider">
            <span>Aguardando Atendimento</span>
            <Clock size={18} className="text-amber-500" />
          </div>
          <div className="mt-2">
            <span className="text-3xl font-semibold tracking-tight">14</span>
            <p className="text-xs text-zinc-500 mt-1">Tempo médio de espera: 18 min</p>
          </div>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 backdrop-blur-sm">
          <div className="flex items-center justify-between text-zinc-400 text-xs font-medium uppercase tracking-wider">
            <span>Em Andamento</span>
            <AlertCircle size={18} className="text-blue-500" />
          </div>
          <div className="mt-2">
            <span className="text-3xl font-semibold tracking-tight">5</span>
            <p className="text-xs text-zinc-500 mt-1">Sendo atendidos pela equipe técnica</p>
          </div>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 backdrop-blur-sm">
          <div className="flex items-center justify-between text-zinc-400 text-xs font-medium uppercase tracking-wider">
            <span>Resolvidos (Hoje)</span>
            <CheckCircle2 size={18} className="text-emerald-500" />
          </div>
          <div className="mt-2">
            <span className="text-3xl font-semibold tracking-tight">29</span>
            <p className="text-xs text-zinc-500 mt-1">Taxa de satisfação: 94.6%</p>
          </div>
        </div>
      </div>

      {/* Tabela de Chamados Ativos */}
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/20 overflow-hidden">
        <div className="p-5 border-b border-zinc-800 bg-zinc-900/40">
          <h2 className="font-semibold text-zinc-200">Chamados Recentes</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm text-zinc-400">
            <thead className="bg-zinc-900/10 text-xs font-semibold text-zinc-300 uppercase tracking-wider border-b border-zinc-800">
              <tr>
                <th className="p-4">Usuário / Assunto</th>
                <th className="p-4">ID</th>
                <th className="p-4">Setor</th>
                <th className="p-4">Prioridade</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60">
              <tr className="hover:bg-zinc-900/30 transition-colors">
                <td className="p-4">
                  <div className="font-medium text-zinc-200">Carlos Silva</div>
                  <div className="text-xs text-zinc-500">Erro de autenticação no sistema interno</div>
                </td>
                <td className="p-4 font-mono text-zinc-500">#TK-8832</td>
                <td className="p-4">Financeiro</td>
                <td className="p-4">
                  <span className="inline-flex items-center rounded bg-red-500/10 px-2 py-0.5 text-xs font-medium text-red-400 border border-red-500/20">
                    Alta
                  </span>
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center rounded-full bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-400 border border-amber-500/20">
                    Pendente
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-zinc-900/30 transition-colors">
                <td className="p-4">
                  <div className="font-medium text-zinc-200">Mariana Costa</div>
                  <div className="text-xs text-zinc-500">Instalação de certificado digital A1</div>
                </td>
                <td className="p-4 font-mono text-zinc-500">#TK-8831</td>
                <td className="p-4">RH</td>
                <td className="p-4">
                  <span className="inline-flex items-center rounded bg-zinc-800 px-2 py-0.5 text-xs font-medium text-zinc-400 border border-zinc-700">
                    Média
                  </span>
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-blue-400 border border-blue-500/20">
                    Em Progresso
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}