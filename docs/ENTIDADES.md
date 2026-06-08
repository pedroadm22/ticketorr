# Levantamento de Entidades — Ticketorr

> Projeto Integrador X4 · 8 de junho de 2026

---

## Entidades

### Chamado
- id: number
- titulo: string
- descricao: string
- status: string
- prioridade: string
- createdAt: Date

### Comentario
- id: number
- texto: string
- chamadoId: number
- createdAt: Date

### Status
- id: number
- nome: string
- ordem: number

### Usuario
- id: number
- nome: string
- email: string
- papel: string

## Observações

Workflow típico: Aberto → Em andamento → Resolvido → Fechado.

---

*Salve este arquivo em `docs/ENTIDADES.md` no seu repositório GitHub.*
