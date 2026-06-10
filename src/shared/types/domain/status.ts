export type NomeStatus = 'Aberto' | 'Em Atendimento' | 'Pendente' | 'Resolvido';

export interface Status {
  id: number;
  nome: NomeStatus;
  corHex: string; // Ex: '#3B82F6'
  descricao?: string;
}