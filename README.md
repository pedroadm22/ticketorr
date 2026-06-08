<!-- # 🎫 Ticketorr - Web Help Desk Management

<p align="center">
  <img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-blue?style=for-the-badge" alt="Status">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License">
</p>

## 📋 Sobre o Projeto

O **Ticketorr** é uma solução web de Help Desk projetada para otimizar o fluxo de atendimento técnico, centralizando a abertura, triagem, acompanhamento e resolução de chamados (tickets). O foco principal do sistema é a agilidade na comunicação entre o usuário final e a equipe de suporte, garantindo que nenhum incidente passe despercebido.

### 🚀 Principais Funcionalidades (Planejadas)

* **Painel do Cliente:** Abertura rápida de chamados, anexação de evidências (prints/logs) e histórico de solicitações.
* **Painel do Técnico (Dashboard):** Triagem de chamados por prioridade (Baixa, Média, Alta, Crítica), atribuição de responsáveis e SLA visível.
* **Base de Conhecimento:** Central de artigos e FAQs para autoatendimento dos usuários, reduzindo o volume de chamados repetitivos.
* **Notificações em Tempo Real:** Atualizações instantâneas sobre mudanças no status do chamado.
* **Relatórios e Métricas:** Gráficos de desempenho da equipe, tempo médio de atendimento (TMA) e satisfação do cliente.

---

## 🛠️ Tecnologias e Ferramentas

O projeto está sendo estruturado utilizando tecnologias modernas para garantir escalabilidade, performance e facilidade de manutenção:

* **Frontend:** [Insira aqui, ex: ReactJS (TypeScript) / Tailwind CSS] — Interface responsiva, fluida e com foco na experiência do usuário (UX).
* **Backend:** [Insira aqui, ex: Python (FastAPI/Django) / Node.js] — API robusta para gerenciamento de regras de negócio, filas e autenticação.
* **Banco de Dados:** [Insira aqui, ex: PostgreSQL / MySQL] — Armazenamento seguro de usuários, históricos e logs de auditoria.
* **Infraestrutura:** Docker e Docker Compose para containerização e facilidade no ambiente de desenvolvimento.

## 🧱 Módulos do Sistema (Core)

O **Ticketorr** é estruturado em quatro módulos fundamentais que garantem a rastreabilidade, organização e automação do atendimento:

### 1. 🕒 Módulo de Status
Responsável por gerenciar os estados temporais de um ticket. Ele reflete exatamente a fase atual em que o atendimento se encontra, permitindo auditoria de tempo e relatórios de SLA.
* **Estados padrão:** `Aberto` (Aguardando triagem), `Em Atendimento` (Técnico alocado), `Pendente` (Aguardando resposta do usuário ou terceiros) e `Resolvido/Fechado`.

### 2. 🚨 Módulo de Prioridade
Controla o nível de urgência e o impacto de cada chamado no ecossistema da empresa. Essencial para que a equipe técnica consiga realizar uma triagem eficiente e focar nos incidentes mais críticos primeiro.
* **Níveis:** `Baixa` (Dúvidas/Melhorias), `Média` (Problemas locais), `Alta` (Setor impactado) e `Crítica` (Sistema ou operação totalmente parados).

### 3. 💬 Módulo de Comentários (Timeline)
Funciona como o canal oficial de comunicação e registro do chamado. Armazena de forma cronológica todas as interações entre o usuário final e o técnico, além de permitir notas internas (visíveis apenas para a equipe de TI) para facilitar a colaboração.
* **Recursos:** Histórico imutável de mensagens, anexos de arquivos/evidências e marcação de interações importantes.

### 4. 🔄 Módulo de Workflow (Fluxo de Trabalho)
Define as regras de negócio e as transições permitidas para um ticket. Ele dita como um chamado se move entre os diferentes status e quem tem permissão para alterá-lo, evitando furos de processo e automatizando ações repetitivas.
* **Exemplo de Regra:** Quando um técnico adiciona um comentário pedindo informações, o Workflow altera automaticamente o status do chamado para `Pendente`.

---

## 🏗️ Arquitetura do Projeto

O **Ticketorr** adota uma arquitetura descentralizada e baseada em microsserviços/módulos independentes, utilizando o modelo de **Monorepo** para unificar o ecossistema do projeto. O fluxo de dados segue o padrão cliente-servidor, onde a interface se comunica com a API de forma totalmente assíncrona.

### Componentes de Arquitetura

* **Camada de Apresentação (Frontend):** Interface WebSPA (Single Page Application) focada em reatividade, garantindo que atualizações de tickets e novos comentários apareçam em tempo real.
* **Camada de Negócio (Backend API):** RESTful API estruturada de forma modular. Cada core de negócio (Status, Prioridades, Comentários e Workflows) possui suas próprias regras, rotas e controladores isolados para facilitar a manutenção e testes.
* **Camada de Persistência (Banco de Dados):** Banco relacional utilizando ORM (Object-Relational Mapping), garantindo a integridade referencial rigorosa necessária para o histórico de comentários e transições de workflows.
* **Infraestrutura e Containerização:** Todo o ambiente (aplicações, banco de dados e serviços de mensageria) é orquestrado via Docker, garantindo paridade absoluta entre os ambientes de desenvolvimento e produção.

---

## 📂 Estrutura de Pastas

A organização dos arquivos reflete a divisão de responsabilidades da arquitetura, mantendo o código limpo, modular e de fácil navegação:

```text
ticketorr/
├── .github/                  # Templates de automação, Issues e Pull Requests
├── backend/                  # Código-fonte da API Principal
│   ├── src/
│   │   ├── config/           # Configurações globais (banco de dados, variáveis de ambiente)
│   │   ├── middleware/       # Autenticação, logs e validações de requisições
│   │   └── modules/          # MÓDULOS CORE DO SISTEMA (Regras de Negócio)
│   │       ├── tickets/      # Criação e gerenciamento geral de chamados
│   │       ├── status/       # Módulo de Estados do ticket (Aberto, Em Atendimento, etc.)
│   │       ├── prioridade/   # Módulo de Matriz de Impacto e Urgência
│   │       ├── comentarios/  # Módulo de Timeline, Histórico e Anexos
│   │       └── workflow/     # Módulo de Regras de Transição e Automação de Estados
│   ├── tests/                # Testes unitários e de integração do backend
│   ├── Dockerfile            # Configuração de build do container backend
│   └── package.json          # Dependências e scripts do backend (ou requirements.txt / poetry)
│
├── frontend/                 # Código-fonte da Interface Web
│   ├── public/               # Ativos estáticos públicos (favicons, imagens, index.html)
│   ├── src/
│   │   ├── assets/           # Estilos globais, imagens e ícones do sistema
│   │   ├── components/       # Componentes visuais reutilizáveis (Botões, Cards, Modais)
│   │   ├── context/          # Gerenciamento de estados globais (Autenticação, Temas)
│   │   ├── pages/            # Telas da aplicação (Dashboard, NovoTicket, Login, Timeline)
│   │   └── services/         # Integração e chamadas diretas à API do backend
│   ├── Dockerfile            # Configuração de build do container frontend
│   └── package.json          # Dependências e scripts do frontend
│
├── infra/                    # Arquivos de provisionamento e infraestrutura
│   └── docker-compose.yml    # Orquestração local dos containers (App + Banco)
│
├── .gitignore                # Definição de arquivos e pastas ignorados pelo Git
├── LICENSE                   # Licença de uso do software (MIT)
└── README.md                 # Documentação principal do projeto
 -->
# Documento de Concepção — Ticketorr

> Projeto Integrador X4 · 8 de junho de 2026

---

## Nome do Sistema

Ticketorr

## Problema

Caos da comunicação descentralizada e a falta de rastreabilidade no suporte técnico.

## Público-Alvo

Pequenas e médias empresas que precisam melhorar o atendimento ao cliente via suporte técnico de TI.

## Funcionalidades

Gerenciamento Dinâmico de Status: Rastreamento do ciclo de vida do chamado em tempo real (Aberto ➡️ Em Atendimento ➡️ Pendente ➡️ Resolvido), permitindo saber exatamente em que pé está o suporte.

Matriz de Priorização (Urgência x Impacto): Classificação inteligente de chamados (Baixa, Média, Alta, Crítica) para garantir que problemas graves que afetam a operação sejam resolvidos primeiro.

Timeline de Comentários e Histórico: Registro cronológico de todas as conversas entre técnicos e clientes, suporte a envio de anexos (prints/logs) e possibilidade de Notas Internas (comentários ocultos para o cliente, visíveis apenas para a equipe técnica).

Automação de Workflows: Motor de regras que automatiza transições (ex: altera o status para Pendente assim que o técnico faz uma pergunta, ou envia alertas automáticos por e-mail/notificação quando o prazo de atendimento está vencendo).

## Diferenciais

Interface direta ao ponto. O foco absoluto está nos quatro módulos (Status, Prioridade, Comentários e Workflow). O cliente abre o chamado em dois cliques; o técnico resolve e responde em uma única tela fluida, sem formulários burocráticos. É a filosofia de "ligar e usar".

## Mercado

Setor de Software de Atendimento e Help Desk (SaaS/TI).

---

*Salve este arquivo em `docs/CONCEPCAO.md` no seu repositório GitHub.*
