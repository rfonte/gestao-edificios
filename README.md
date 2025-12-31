# Gestão de Edifícios

Aplicação Angular 17 (standalone + router) para gestão de edifícios, preparada para evoluir por domínios.

## Requisitos
- Node 18.x ou 20.x
- npm 9+

## Instalação
```bash
npm install
```

## Scripts
- `npm start` — servidor de dev em `http://localhost:4200/`
- `npm run build` — build de produção em `dist/gestao-edificios`
- `npm test` — testes unitários (Karma + Jasmine)

## Estrutura
```
src/
  main.ts               # bootstrap standalone
  app/
    app.config.ts       # providers + provideRouter/provideHttpClient
    app.routes.ts       # rotas raiz
    app.component.*     # shell com <router-outlet>
    core/               # singletons (interceptors, guards, services globais)
    shared/             # componentes/pipes/diretivas reutilizáveis
    features/
      home/             # landing atual
```

## Desenvolvimento
- Adicione novas áreas em `src/app/features/<dominio>/`.
- Singletons globais em `src/app/core/`.
- Recursos reaproveitáveis em `src/app/shared/`.
- Estilos globais em `src/styles.css`; estilos de componentes via `styleUrl`.

## Testes
- `npm test` roda os testes unitários. Ajuste/adicione specs ao criar novos componentes/serviços.

## Build e publicação
- `npm run build` gera a pasta `dist/gestao-edificios/`; sirva o conteúdo estático via o servidor de sua preferência.

