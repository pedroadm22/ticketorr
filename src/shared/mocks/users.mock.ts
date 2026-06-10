import { Usuario } from "@/shared/types/domain/user"; // Ajuste conforme seu tipo de Usuário

export const mockUsers: Record<string, Usuario> = {
  zabbix: {
    id: "usr-zabbix",
    nome: "Zabbix Infra",
    email: "zabbix@empresa.com",
    perfil: "TECNICO",
    dataCriacao: new Date("2026-01-10")
  },
  carlos: {
    id: "usr-carlos",
    nome: "Carlos Henrique",
    email: "carlos@empresa.com",
    perfil: "CLIENTE",
    dataCriacao: new Date("2026-02-15")
  },
  mariana: {
    id: "usr-mariana",
    nome: "Mariana Costa",
    email: "mariana@empresa.com",
    perfil: "CLIENTE",
    dataCriacao: new Date("2026-03-20")
  },
  pedro: {
    id: "usr-pedro",
    nome: "Pedro Lucas",
    email: "pedro@ticketorr.com",
    perfil: "ADMIN",
    dataCriacao: new Date("2025-12-01")
  }
};