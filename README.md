# Gestao de Edificios

Aplicacao Angular 17 (standalone + router) para gestao de edificios, preparada para evoluir por dominios.

## Requisitos
- Node 18.x ou 20.x
- npm 9+

## Instalacao
```bash
npm install
```

## Scripts
- `npm start` — servidor de dev em `http://localhost:4200/`
- `npm run build` — build de producao em `dist/gestao-edificios`
- `npm test` — testes unitarios (Karma + Jasmine)
- `npm test -- --code-coverage` — relatorio em `coverage/gestao-edificios`
- `npm run lint` — ESLint (Angular + TS)

## Estrutura
```
src/
  main.ts               # bootstrap standalone
  app/
    app.config.ts       # providers + provideRouter/provideHttpClient
    app.routes.ts       # rotas raiz + labels de menu
    app.component.*     # shell com <router-outlet> e menu principal
    core/               # singletons (interceptors, guards, services globais)
    shared/             # componentes/pipes/diretivas reutilizaveis
    features/
      home/             # landing atual
  environments/         # environment.ts e environment.prod.ts
```

## Desenvolvimento
- Adicione novas areas em `src/app/features/<dominio>/`.
- Singletons globais em `src/app/core/`.
- Recursos reaproveitaveis em `src/app/shared/`.
- Estilos globais em `src/styles.css`; estilos de componentes via `styleUrl`.
- Imports mais limpos com aliases: `@app/*`, `@core/*`, `@shared/*`, `@features/*`.

## Testes
- `npm test` roda os testes unitarios. Ajuste/adicione specs ao criar novos componentes/servicos.

## Build e publicacao
- `npm run build` gera a pasta `dist/gestao-edificios/`; sirva o conteudo estatico via o servidor de sua preferencia.

## CI
- Workflow GitHub Actions em `.github/workflows/ci.yml` executa install, lint e test em pushes/PRs para main/master.
