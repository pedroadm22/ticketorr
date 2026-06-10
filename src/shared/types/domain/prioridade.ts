export type NomePrioridade = 'Baixa' | 'Média' | 'Alta' | 'Crítica';

export interface Prioridade {
  id: number;
  nome: NomePrioridade;
  corHex: string;
  tempoLimiteHoras: number; // Controle de SLA
}