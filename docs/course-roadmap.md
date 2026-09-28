# Roadmap da Disciplina — BookTracker

Este documento organiza o desenvolvimento do BookTracker de acordo com os **enunciados e atividades da disciplina**. Ele complementa o PRD/SDD sem substituir os requisitos oficiais de cada atividade.

## 1. Princípio de Desenvolvimento

O projeto será construído progressivamente: cada atividade semanal deve contribuir para a aplicação final, mas um requisito só será marcado como concluído quando houver **implementação/evidência real**.

Isso evita marcar no checklist algo que existe apenas como intenção de protótipo ou documentação.

## 2. 1ª Entrega — Concepção, Prototipação e Documentação

### Objetivo

Fundação do produto, sem implementação HTML/CSS/JS da aplicação.

### Estado atual

- [x] Repositório público no GitHub.
- [x] `docs/prd.md`.
- [x] `docs/architecture.md`.
- [x] Framework CSS definido: Bootstrap 5.3.
- [x] API pública definida: Google Books API v1.
- [x] Design Tokens documentados.
- [x] Protótipo responsivo Mobile.
- [x] Protótipo responsivo Desktop.
- [x] Fluxos navegáveis no Stitch.
- [x] Design System consistente no protótipo.
- [x] Pelo menos três componentes-alvo do Bootstrap planejados/identificados: Navbar/Offcanvas, Card e Modal.
- [ ] Vídeo 1 gravado.
- [ ] Vídeo 1 publicado no YouTube como Não listado.
- [ ] Três links finais testados em janela anônima e enviados no Moodle.

### Vídeo 1

Deve mostrar:

1. GitHub com `prd.md` e `architecture.md`;
2. tema/escopo do BookTracker;
3. Bootstrap como Framework CSS;
4. Google Books API como API pública;
5. navegação Mobile primeiro;
6. navegação Desktop depois;
7. cores e tipografia;
8. pelo menos três componentes-alvo do Bootstrap.

## 3. Atividade 06 — Node, NPM e Git

### Estado

- [x] Node/NPM configurados.
- [x] Git/GitHub configurados.
- [x] `.gitignore` criado antes das dependências.
- [x] `jquery` instalado em dependencies.
- [x] `uuid` instalado em dependencies.
- [x] `gh-pages` instalado em devDependencies.
- [x] `package-lock.json` versionado.
- [x] `node_modules` ignorado.
- [x] Commit/push realizado.
- [x] Evidências do terminal preparadas.
- [x] PDF gerado.
- [x] PDF enviado no Moodle.

## 4. Atividade 07 — Layout Responsivo com Bootstrap

### Requisitos a preservar quando esta atividade for executada

- [ ] instalar Bootstrap via NPM;
- [ ] consumir CSS/JS localmente a partir de `node_modules`;
- [ ] criar layout usando o Grid do Bootstrap;
- [ ] demonstrar três linhas com comportamentos de Grid diferentes;
- [ ] usar coluna automática;
- [ ] usar `.col-12`;
- [ ] usar `.col-md-*`;
- [ ] demonstrar offset;
- [ ] demonstrar order;
- [ ] esconder conteúdo em XS/SM com utilidade responsiva;
- [ ] usar Modal;
- [ ] usar Card com imagem e texto;
- [ ] usar pelo menos três utilidades de texto;
- [ ] demonstrar Flexbox com botões;
- [ ] usar Bootstrap Icons;
- [ ] registrar capturas do layout;
- [ ] registrar Modal aberto;
- [ ] registrar Card;
- [ ] registrar Flexbox;
- [ ] registrar Bootstrap Icons;
- [ ] entregar PDF com capturas e breve relato.

### Estratégia para o BookTracker

Os exercícios específicos de Grid/Flexbox devem ser cumpridos sem degradar o produto final. Quando uma exigência didática não combinar naturalmente com uma tela do BookTracker, ela pode ser demonstrada em uma página/laboratório da atividade e depois os padrões úteis são incorporados à aplicação final.

## 5. Atividade 08 — Do Protótipo ao Código com Bootstrap e IA

### Implementação

- [ ] instalar/confirmar Bootstrap via NPM;
- [ ] converter o protótipo APPROVED do Stitch em HTML/CSS;
- [ ] manter Bootstrap 5.3 como Framework CSS real;
- [ ] conferir fidelidade visual ao protótipo;
- [ ] usar arquivos do Bootstrap em `node_modules` durante esta atividade, e não CDN;
- [ ] executar a aplicação localmente.

### Auditoria obrigatória

- [ ] identificar **10 componentes diferentes do Bootstrap** usados nas telas;
- [ ] explicar função e classes principais de cada componente;
- [ ] explicar se o layout usa Grid, Flexbox ou combinação;
- [ ] explicar as classes responsáveis pelo layout;
- [ ] implementar/auditar Sticky Footer;
- [ ] explicar a estratégia do Sticky Footer.

### Dez componentes planejados para o BookTracker

O design já permite usar naturalmente:

1. Navbar;
2. Offcanvas;
3. Card;
4. Modal;
5. Button;
6. Badge;
7. Input Group;
8. Alert;
9. Toast;
10. Spinner.

Form Controls/Form Select também estarão presentes e podem substituir algum item da lista se necessário durante a auditoria real.

### Responsividade a validar

- [ ] xs (<576px);
- [ ] sm (≥576px);
- [ ] md (≥768px);
- [ ] lg (≥992px);
- [ ] xl (≥1200px);
- [ ] xxl (≥1400px);
- [ ] nenhum overflow horizontal indevido;
- [ ] imagens proporcionais;
- [ ] Offcanvas funcional nos tamanhos menores.

### Entrega da Atividade 08

- [ ] relatório dos 10 componentes;
- [ ] análise Grid/Flexbox;
- [ ] explicação do Sticky Footer;
- [ ] evidência do fluxo IA/MCP ou justificativa do método alternativo;
- [ ] prints Mobile (xs) e Desktop (lg);
- [ ] commit/push da implementação;
- [ ] PDF enviado no Moodle.

## 6. Entrega 2 — A Casca

### Objetivo

Transformar o protótipo aprovado em HTML5/CSS3 responsivo, ainda sem a lógica final de JavaScript.

### Requisitos planejados

- [ ] cinco páginas HTML reais do BookTracker;
- [ ] Bootstrap aplicado de forma substantiva;
- [ ] Grid/Flexbox do framework;
- [ ] CSS próprio com Grid/Flexbox quando necessário;
- [ ] Design System implementado;
- [ ] componentes visuais reais;
- [ ] responsividade Mobile/Desktop;
- [ ] tipografia responsiva/fluida;
- [ ] imagens responsivas;
- [ ] Sass;
- [ ] Sticky Footer;
- [ ] Vídeo 2 demonstrando código e responsividade.

## 7. Entrega 3 — O Motor

### Objetivo

Adicionar a lógica de negócio e publicar a aplicação final.

### Requisitos planejados

- [ ] JavaScript Vanilla ES6+;
- [ ] validação HTML;
- [ ] validações customizadas com REGEX;
- [ ] elementos select/checkbox/radio conforme necessário;
- [ ] Web Storage;
- [ ] manipulação dinâmica do DOM;
- [ ] jQuery;
- [ ] plugin/biblioteca complementar relevante;
- [ ] JSON Server;
- [ ] POST assíncrono;
- [ ] GET assíncrono;
- [ ] Google Books API;
- [ ] `fetch` / `async/await`;
- [ ] tratamento de erros;
- [ ] deploy no GitHub Pages;
- [ ] Vídeo 3 com aplicação em produção.

### Bootstrap local x CDN

Há uma diferença de contexto entre as atividades:

- **Atividade 08:** Bootstrap deve ser consumido localmente a partir de `node_modules` para comprovar a instalação via NPM.
- **Deploy/fase final:** seguir a orientação geral da disciplina para publicação no GitHub Pages, inclusive uso de CDN quando solicitado.

Não misturar os dois contextos durante as evidências.

## 8. Checklist Geral — ID01 a ID24

Estado conservador atual:

### RA1 — Framework CSS e Responsividade

- [x] **ID01** — protótipo Mobile/Desktop.
- [ ] **ID02** — Bootstrap Grid/Flexbox implementado.
- [ ] **ID03** — CSS puro Grid/Flexbox implementado.
- [ ] **ID04** — componentes Bootstrap reais implementados.
- [ ] **ID05** — layout fluido implementado com unidades relativas.
- [ ] **ID06** — Design System aplicado em toda a aplicação implementada.
- [ ] **ID07** — Sass com variáveis/mixins/funções.
- [ ] **ID08** — tipografia responsiva/fluida.
- [ ] **ID09** — imagens responsivas.
- [ ] **ID10** — imagens otimizadas/adaptativas.

### RA2 — Formulários

- [ ] **ID11** — validação HTML nativa.
- [ ] **ID12** — REGEX.
- [ ] **ID13** — elementos de seleção.
- [ ] **ID14** — Web Storage.

### RA3 — Ferramentas

- [x] **ID15** — Node/NPM configurado.
- [x] **ID16** — Git/GitHub e `.gitignore`.
- [x] **ID17** — README com checklist/documentação.
- [ ] **ID18** — organização modular implementada.
- [ ] **ID19** — ESLint/Prettier configurados.

### RA4 — Bibliotecas JavaScript

- [ ] **ID20** — jQuery utilizado na aplicação.
- [ ] **ID21** — plugin/biblioteca complementar.

### RA5 — APIs

- [ ] **ID22** — POST assíncrono para API fake.
- [ ] **ID23** — GET assíncrono da API fake.
- [ ] **ID24** — API pública Google Books com tratamento de erros.

## 9. Escopo Mínimo Final

O BookTracker excede o mínimo de três páginas e está planejado com cinco páginas:

1. Login;
2. Cadastro;
3. Estante;
4. Adicionar/Editar Livro;
5. Detalhes.

A aplicação final também deverá demonstrar:

- formulário com validação;
- persistência via Web Storage;
- listagem em cards;
- API fake;
- pelo menos duas entidades (o BookTracker planeja três: usuários, livros e avaliações);
- requisições assíncronas;
- manipulação JSON;
- API pública real.

## 10. Regra de Evidência

Nunca marcar como concluído um requisito que exista apenas no protótipo, na documentação ou no planejamento.

Cada item de implementação só deve ser marcado após existir no código e poder ser explicado na avaliação.
