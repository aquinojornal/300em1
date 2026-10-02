# SMUV — Sistema Municipal de Utilidades Urbanas

Aplicação web responsiva em Next.js + TypeScript + Tailwind + Prisma + SQLite para gestão de serviços urbanos em Cidade Ocidental-GO.

## Visão geral

A solução inclui:

- Portal público inspirado na identidade visual do SMUV.
- App do cidadão para solicitações, protocolos e notificações.
- Fluxo completo de Bota-Fora com status e acompanhamento.
- Painel administrativo e centro de operações.
- Módulos de calendário, coleta seletiva, ouvidoria e relatórios.
- Dados de demonstração com sinalização explícita de uso simulado.

## Estrutura do projeto

- `app/` — telas e rotas da aplicação.
- `components/` — componentes reutilizáveis e mapa demo.
- `lib/` — dados de demonstração, autenticação e utilitários.
- `prisma/` — schema e seed do banco.
- `docs/reference-map.md` — mapeamento das telas de referência.

## Pré-requisitos

- Node.js 18+
- npm
- SQLite via Prisma

## Configuração do ambiente

1. Copie o arquivo de exemplo:

```bash
cp .env.example .env
```

2. Configure a conexão local do SQLite:

```env
DATABASE_URL="file:./dev.db"
SESSION_SECRET="mude-esta-chave"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

## Banco de dados

### Migração e seed

```bash
npm install
npx prisma generate
npx prisma db push
npx prisma db seed
```

Se o seed não for executado automaticamente, use:

```bash
npx tsx prisma/seed.ts
```

## Execução local

```bash
npm run dev
```

Acesse:

```text
http://localhost:3000
```

## Contas de demonstração

- Cidadão: `cidadao@smuv.local` / `123456`
- Atendente: `atendente@smuv.local` / `123456`
- Operador: `operador@smuv.local` / `123456`
- Gestor: `gestor@smuv.local` / `123456`

## Observações importantes

- Os dados do mapa e dos indicadores são demonstrativos.
- Não há integração real com WhatsApp, GPS em tempo real, ou APIs externas sem credenciais e configuração.
- A regra operacional de RCC depende de configuração municipal; a coleta não é prometida automaticamente.
- O módulo de Bota-Fora foi implementado como fluxo funcional com status e acompanhamento para demonstração local.
