import { Ticket } from "@/shared/types/domain/ticket";
import { mockUsers } from "./users.mock";

export const mockTickets: Ticket[] = [
  {
    id: "tk-99",
    protocolo: "TK-2026-089",
    titulo: "Servidor de Produção fora do ar (Timeout na API)",
    descricao: "Aplicações travadas com erro 504 no Gateway de Autenticação.",
    clienteId: mockUsers.zabbix.id,
    tecnicoId: null, // Sem técnico atribuído
    statusId: 1, // Aberto
    prioridadeId: 4, // Crítica
    dataCriacao: new Date("2026-06-10T08:00:00"),
    dataAtualizacao: new Date("2026-06-10T08:00:00"),
    cliente: mockUsers.zabbix,
    status: { id: 1, nome: "Aberto", corHex: "#EF4444" },
    prioridade: { id: 4, nome: "Crítica", corHex: "#EF4444", tempoLimiteHoras: 1 }
  },
  {
    id: "tk-101",
    protocolo: "TK-2026-142",
    titulo: "Configuração de Backup no Servidor Zabbix",
    descricao: "Necessário criar rotina de backup do banco de dados de monitoramento.",
    clienteId: mockUsers.carlos.id,
    tecnicoId: mockUsers.pedro.id,
    statusId: 2, // Em Atendimento
    prioridadeId: 2, // Média
    dataCriacao: new Date("2026-06-09T14:30:00"),
    dataAtualizacao: new Date("2026-06-10T09:15:00"),
    cliente: mockUsers.carlos,
    status: { id: 2, nome: "Em Atendimento", corHex: "#3B82F6" },
    prioridade: { id: 2, nome: "Média", corHex: "#3B82F6", tempoLimiteHoras: 8 }
  },
  {
    id: "tk-102",
    protocolo: "TK-2026-143",
    titulo: "Erro de Autenticação na Evolution API",
    descricao: "Instância perdendo a conexão com o WhatsApp a cada 2 horas.",
    clienteId: mockUsers.mariana.id,
    tecnicoId: null,
    statusId: 1, // Aberto
    prioridadeId: 3, // Alta
    dataCriacao: new Date("2026-06-10T07:45:00"),
    dataAtualizacao: new Date("2026-06-10T07:45:00"),
    cliente: mockUsers.mariana,
    status: { id: 1, nome: "Aberto", corHex: "#10B981" },
    prioridade: { id: 3, nome: "Alta", corHex: "#F59E0B", tempoLimiteHoras: 4 }
  }
];

// Funções utilitárias que simulam o comportamento do Banco de Dados (Repository Pattern)
export async function getTicketsRepository() {
  return mockTickets;
}

export async function getUrgentTicketsRepository() {
  return mockTickets.filter(ticket => ticket.prioridadeId === 4 && ticket.statusId === 1);
}

export async function getTicketsAnalytics() {
  return {
    totalAbertos: mockTickets.filter(t => t.statusId === 1).length,
    emAtendimento: mockTickets.filter(t => t.statusId === 2).length,
    tempoMedioResolucao: "22 min",
    slaCumprido: "98.5%",
    chamadosHoje: mockTickets.length
  };
}