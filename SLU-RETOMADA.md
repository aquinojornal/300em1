# SLU — ponto de retomada

Salvo em 2026-10-02T01:26:53.632Z. Palavra-chave: **SLU**. Ao receber essa palavra nesta pasta, leia este arquivo e continue deste estado, sem recriar o projeto. Estas instruções são memória em arquivos do projeto, não memória global entre conversas.

## Localização e execução

Raiz: C:\Users\Usuario\Downloads\Site
Portal público WordPress: http://localhost:8881/
Aplicação: http://localhost:3000/login e /admin. A raiz da porta 3000 abre o login. O portal principal continua na porta 8881.
Para iniciar a aplicação: executar npm.cmd run dev na raiz. No WordPress: conferir studio --version e studio status dentro de wp; se parado, studio start --skip-browser. Consultar wp/STUDIO.md antes de operações WordPress. Não iniciar servidores duplicados.

## Estado aprovado

- Marca SMLU; Cidade Inteligente em destaque, logotipos brancos no login e painel.
- Portal: Plataforma oficial da Secretaria de Limpeza Urbana; ícones Icons8 e redes Instagram, YouTube e WhatsApp brancos no rodapé; crédito textual Icons8 removido a pedido.
- Rodapé: © 2025 - 2026 SECRETARIA MUNICIPAL DE LIMPEZA URBANA | Criado por: 4quin0, com link https://www.instagram.com/oandersonaquino.
- Fontes do portal aumentadas 10% de forma responsiva; painel mantém a última redução aprovada.
- Seis indicadores, incluindo Rotas cadastradas, com a mesma diagramação. Dados reais locais via /api/public-portal para os blocos WordPress; ambiente contém dados de demonstração.
- Jardim das Flores substituído por Jardim ABC, preservando relações. Não reintroduzir o bairro inexistente.
- GESTOR/ADM/ADMIN/ADMINISTRADOR têm acesso administrativo completo; demais perfis têm rotas e APIs restritas. Sessões assinadas, consultando perfil do banco.
- Menu persistente em /admin e nove seções: monitoramento, solicitacoes, rotas, calendario, gestor, relatorios, cidadao, ouvidoria, portal. Conteúdo à direita; menu também permanece à esquerda no celular.

## Arquivos e dados

Portal: wp/wp-content/themes/smuv-portal (templates, restored-home.css, inc/public-data.php).
Painel: app/admin, components/AdminShell.tsx, lib/auth.ts, lib/roles.ts, lib/api-access.ts. URL pública: lib/site-config.ts.
Bancos: prisma/dev.db e wp/wp-content/database/.ht.sqlite.
Relatório privado: .local-docs/RELATORIO-ACESSOS-SLU.md. Nunca publicar nem copiar para public ou wp.
Backup deste estado: C:\Users\Usuario\Downloads\Site\.local-backups\SLU-2026-10-02T01-26-53-271Z

## Validação e cuidados para continuar

Na implementação anterior passaram TypeScript, teste de acesso dos quatro perfis, restrições de APIs, navegação persistente desktop/celular e logout. Evidências: wp/restoration-backups/ADMIN-ACCESS.md, ADMIN-UPDATE.md e scripts de verificação.
Não executar seeds, db:reset, migrações destrutivas nem scripts apply-* de restauração automaticamente. Não substituir .env nem redefinir senhas para retomar. Ler instruções locais antes de editar. Os arquivos atuais são persistentes em disco; servidores precisam estar ligados para abrir localhost.

## Conteúdo do backup

Cópia dos arquivos do projeto e WordPress, incluindo .env e assets, com snapshots consistentes dos dois SQLite e relatório privado. Exclui dependências node_modules, build .next, caches de navegador, .git, snapshots anteriores e arquivos temporários SQLite; dependências são recriáveis por npm.cmd ci. A cópia é local neste computador, não um backup em nuvem.

## Base atual para publicação

Cópia atual em C:\Users\Usuario\Downloads\Site. Portal principal: http://localhost:8881/. Entrar: http://localhost:3000/, que agora exibe o login. Os servidores existentes ainda executam a pasta original; cadastrar a cópia no Studio é uma etapa posterior. Os dois bancos são preservados com os dados atuais, sem seeds/reset.

## Base ativa — 01/10/2026
Trabalhar somente em C:\Users\Usuario\Downloads\Site. WordPress Studio registrado nesta pasta, wp na porta 8881; aplicação Next.js nesta pasta na porta 3000. Esta atualização substitui as notas anteriores sobre servidores na pasta original. Dependências instaladas e cliente Prisma gerado. Não editar a cópia antiga.

