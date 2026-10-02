# Site — base atual

Cópia criada em 2026-10-02T01:40:29.149Z a partir de C:\Users\Usuario\Downloads\300 em 1\smuv-app.

Portal principal: http://localhost:8881/
Entrar: http://localhost:3000/ (login)
Painel: http://localhost:3000/admin

Inclui arquivos atuais, configuração local e snapshots consistentes dos dois bancos. WordPress armazena conteúdo/configuração; a aplicação armazena usuários e operações. Nenhum cadastro foi apagado ou recriado.

Exclui versões anteriores, scripts de restauração, caches e dependências. Para executar a aplicação nesta cópia: npm.cmd ci, npm.cmd run prisma:generate e npm.cmd run dev; antes, parar a aplicação antiga para liberar a porta 3000. O WordPress deve ser cadastrado no Studio apontando para a subpasta wp, com a porta correspondente confirmada antes de trocar a base em execução.

Os servidores atuais continuam na pasta original. Esta é uma cópia local, não um ZIP de upload do tema: .env, .local-docs e bancos são privados e não devem ser publicados como arquivos acessíveis.

Validação: os dois snapshots SQLite passaram PRAGMA integrity_check.

## Base ativa — 01/10/2026
Trabalhar somente em C:\Users\Usuario\Downloads\Site. WordPress Studio registrado nesta pasta, wp na porta 8881; aplicação Next.js nesta pasta na porta 3000. Esta atualização substitui as notas anteriores sobre servidores na pasta original. Dependências instaladas e cliente Prisma gerado. Não editar a cópia antiga.

