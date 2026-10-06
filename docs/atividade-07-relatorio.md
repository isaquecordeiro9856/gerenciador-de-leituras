# Atividade 07 — Criando um Layout Responsivo com Bootstrap

## Objetivo

Demonstrar de forma didática, em uma página-laboratório isolada (`atividade-07.html`), o uso do Bootstrap 5.3 instalado via NPM: sistema de Grid, responsividade por breakpoints, Modal, Card, personalização de cores, utilitários de texto, Flexbox e Bootstrap Icons, sem implementar a aplicação final do BookTracker.

## Implementação

- **Bootstrap via NPM:** instalado com `npm install bootstrap@5.3` (versão 5.3.8) e importado localmente em `atividade-07.html` via `node_modules/bootstrap/dist/css/bootstrap.min.css` e `node_modules/bootstrap/dist/js/bootstrap.bundle.min.js`, sem CDN para o Bootstrap principal. O CSS próprio (`atividade-07.css`) é carregado depois do Bootstrap.
- **Grid:** página usa `<div class="container">` com três `.row` didáticas. A primeira linha tem três colunas automáticas com `.col`; a segunda linha tem `.col-12` de largura total; a terceira linha usa `.col-md-*` com `offset-md-*` e `order-md-*` explícitos e legendados no próprio HTML.
- **Breakpoints:** a terceira coluna da primeira linha usa `.d-none .d-md-block` (oculta em XS/SM, visível em MD+); a terceira linha empilha com `.col-12` no mobile e aplica larguras/ordem/deslocamento a partir de MD.
- **Button:** botão `.btn .btn-primary` na primeira coluna abre o Modal apenas com `data-bs-toggle="modal"` e `data-bs-target="#sobreModal"`, sem JavaScript próprio.
- **Modal:** estrutura real com `.modal`, `.modal-dialog`, `.modal-content`, `.modal-header`, `.modal-title`, `.modal-body`, `.modal-footer` e `.btn-close`, além de `tabindex`, `aria-labelledby`, `aria-hidden` e `aria-label`, com título, descrição e botão Fechar.
- **Card:** na segunda coluna, `.card` com `.card-img-top`, `.img-fluid`, `.card-body`, `.card-title` e `.card-text`, com conteúdo do BookTracker.
- **Imagem responsiva:** asset local `assets/images/livro-capa.svg` (ilustração simples nas cores do produto), com `alt` adequado e classes `.card-img-top .img-fluid`.
- **Personalização de cores:** em `atividade-07.css`, sobrescrita no `:root` de `--bs-primary`, `--bs-primary-rgb`, `--bs-secondary` e `--bs-secondary-rgb` com os tokens `#3F5144` / `63, 81, 68` e `#C47A4A` / `196, 122, 74`; classe `.custom-card` com variável própria; e customização de `.btn-primary` via `--bs-btn-bg`, `--bs-btn-border-color`, `--bs-btn-hover-bg`, `--bs-btn-hover-border-color`, `--bs-btn-active-bg` e `--bs-btn-active-border-color` (normal `#3F5144`, hover/active `#2C3A30`). Nenhum arquivo de `node_modules` foi alterado.
- **Utilitários de texto:** no Card foram usados `.fw-bold`, `.text-primary`, `.text-uppercase`, `.fs-5` e `.text-decoration-underline`.
- **Flexbox:** na terceira coluna, contêiner com `.d-flex .justify-content-between` (mais `.gap-2 .flex-wrap`) contendo exatamente cinco botões (`.btn-success`, `.btn-danger`, `.btn-warning`, `.btn-info`, `.btn-dark`).
- **Bootstrap Icons:** pacote `bootstrap-icons` instalado via NPM e importado localmente (`node_modules/bootstrap-icons/font/bootstrap-icons.min.css`); a segunda linha exibe quatro ícones (`bi-book`, `bi-bookmark-star`, `bi-star`, `bi-search`).

## Experiência

Eu criei um laboratório separado da aplicação final para deixar cada conceito visível e fácil de explicar: cada linha da página tem um título e cada bloco indica as classes usadas. Mantive o conteúdo textual curto e ligado ao BookTracker, mas sem simular funcionalidades reais.

## Desafios

O principal cuidado foi compreender como as classes do Grid e os breakpoints modificam a disposição dos elementos em diferentes larguras.

## Aprendizado

- Grid do Bootstrap com `.container`, `.row`, `.col`, `.col-12` e `.col-md-*`, incluindo `offset` e `order` responsivos;
- Flexbox com `.d-flex` e `.justify-content-between`;
- breakpoints XS/SM/MD/LG e utilitários responsivos de display (`.d-none .d-md-block`);
- componentes Bootstrap Button, Modal e Card e suas estruturas obrigatórias;
- personalização via variáveis globais (`--bs-primary`, `--bs-secondary`) versus variáveis do componente (`.btn-primary`);
- instalação e consumo local de pacotes via NPM (`bootstrap` e `bootstrap-icons`).

## Validação manual

A página foi aberta diretamente no navegador (duplo clique em `atividade-07.html`, via `file://`, sem servidor) no Chrome/Edge e validada manualmente pelo aluno: estilos e Bootstrap Icons exibidos, Modal abre e fecha pelo X e pelo botão Fechar, coluna Flexbox com cinco botões oculta abaixo de MD e visível em MD+, Card e imagem responsivos, sem overflow horizontal perceptível.

## Evidências para o PDF

- [ ] Print do layout geral / grids
- [ ] Print do Modal aberto
- [ ] Print do Card com imagem e texto
- [ ] Print do Flexbox com cinco botões
- [ ] Print dos Bootstrap Icons
