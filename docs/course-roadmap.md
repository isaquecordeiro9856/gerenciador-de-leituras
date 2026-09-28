# Roadmap Completo da Disciplina — BookTracker

Este documento organiza o BookTracker considerando **todo o material da disciplina enviado pelo aluno**, incluindo Atividades 03, 04, 05, 06, 07 e 08, as Entregas 1, 2 e 3, o escopo mínimo e o checklist de 24 Indicadores de Desempenho (ID).

A regra principal é simples: cada atividade deve contribuir para o projeto final, mas um item só é marcado como concluído quando existe implementação/evidência suficiente para explicá-lo ao professor.

---

## 1. Atividade 03 — Definição do Tema e Escopo

### Requisitos

- [x] tema do projeto definido: BookTracker — Gerenciador de Leituras;
- [x] repositório público criado em dashed-case;
- [x] README na raiz;
- [x] checklist dos 24 IDs no README;
- [x] pasta `docs/`;
- [x] `docs/prd.md`;
- [x] identificação e descrição do produto;
- [x] ator(es) do sistema;
- [x] User Stories no formato adequado;
- [x] `docs/architecture.md`;
- [x] modelo de dados em Mermaid;
- [x] entidades e relacionamentos documentados.

### Estado

Os requisitos documentais estão atendidos no repositório atual.

> Estado de envio no Moodle desta atividade: não registrado neste roadmap, a menos que o aluno confirme explicitamente.

---

## 2. Atividade 04 — Prototipagem Responsiva e Navegável

### Requisitos

- [x] projeto WEB no Google Stitch;
- [x] abordagem Mobile-first;
- [x] telas principais do escopo;
- [x] versões Mobile;
- [x] versões Desktop;
- [x] Design System;
- [x] Design Tokens de cores e tipografia;
- [x] protótipo navegável/clicável;
- [x] link compartilhável registrado no README;
- [x] protótipo atualizado para a versão atual do BookTracker.

### Regras importantes

- Tailwind não será usado no projeto final;
- nesta atividade o foco é aparência/protótipo, não o código gerado pelo Stitch;
- o conjunto oficial é somente o conjunto de frames APPROVED definido no Design Brief.

### Estado

Os requisitos atuais de prototipação estão atendidos pelo protótipo Mobile/Desktop vigente.

> Estado de envio no Moodle desta atividade: não registrado neste roadmap, a menos que o aluno confirme explicitamente.

---

## 3. Atividade 05 — Escolha do Framework CSS e API Pública

### Framework CSS

Escolha oficial:

**Bootstrap 5.3**

Justificativas:

- Grid responsivo;
- Flexbox e utilitários;
- Navbar, Offcanvas, Card, Modal, Forms, Buttons, Badges e outros componentes necessários ao BookTracker;
- componentes JavaScript próprios;
- boa adequação ao protótipo;
- compatibilidade com Sass;
- atende às exigências da disciplina sem Tailwind.

### API pública

Escolha oficial:

**Google Books API v1**

Uso planejado:

- busca por ISBN;
- título;
- autor(es);
- capa.

Fallback:

- livro não encontrado → preenchimento manual;
- falha de API → feedback sem apagar os dados digitados;
- sem capa → fallback visual.

### Requisitos da atividade

- [x] Framework CSS escolhido;
- [x] API pública escolhida;
- [x] README documenta ambos;
- [x] justificativa das escolhas no README;
- [x] `docs/spec.md` registra a stack e API;
- [x] `docs/architecture.md` registra Framework, API e Design System.

> Estado de envio no Moodle desta atividade: não registrado neste roadmap, a menos que o aluno confirme explicitamente.

---

## 4. 1ª Entrega — Concepção, Prototipação e Documentação

### Objetivo

Fundação do produto, sem codificação da aplicação final.

### Estado atual

- [x] repositório público;
- [x] `docs/prd.md`;
- [x] `docs/architecture.md`;
- [x] escopo;
- [x] público-alvo;
- [x] User Stories;
- [x] regras de negócio;
- [x] modelo de dados;
- [x] Bootstrap 5.3 definido;
- [x] Google Books API definida;
- [x] Design Tokens;
- [x] protótipo Mobile;
- [x] protótipo Desktop;
- [x] protótipo navegável;
- [x] Design System consistente no protótipo;
- [x] pelo menos três componentes-alvo do Bootstrap planejados: Navbar/Offcanvas, Card e Modal;
- [ ] confirmar visualmente no Stitch que essas identificações aparecem de forma clara;
- [ ] Vídeo 1 gravado;
- [ ] Vídeo 1 publicado como Não listado;
- [ ] GitHub testado em janela anônima;
- [ ] Stitch testado em janela anônima;
- [ ] YouTube testado em janela anônima;
- [ ] três links enviados no Moodle.

### Vídeo 1

Mostrar:

1. GitHub;
2. `prd.md`;
3. `architecture.md`;
4. tema/escopo;
5. Bootstrap;
6. Google Books API;
7. protótipo Mobile primeiro;
8. protótipo Desktop depois;
9. cores/tipografia;
10. pelo menos três componentes Bootstrap identificados.

---

## 5. Atividade 06 — Fundamentos de Ecossistema (Node, NPM e Git)

### Estado

- [x] Git configurado;
- [x] Node/NPM configurados;
- [x] repositório clonado;
- [x] `.gitignore`;
- [x] `node_modules` ignorado;
- [x] arquivos de ambiente ignorados;
- [x] `jquery` em dependencies;
- [x] `uuid` em dependencies;
- [x] `gh-pages` em devDependencies;
- [x] `package-lock.json` versionado;
- [x] commit/push;
- [x] checklist no README;
- [x] screenshots;
- [x] PDF;
- [x] **PDF enviado no Moodle**.

Atividade 06 concluída.

---

## 6. Atividade 07 — Layout Responsivo com Bootstrap

### Configuração

- [ ] instalar Bootstrap via NPM;
- [ ] importar Bootstrap CSS localmente;
- [ ] importar `bootstrap.bundle.min.js` localmente.

### Grid exigido

- [ ] primeira linha com três colunas automáticas;
- [ ] terceira coluna oculta em XS/SM;
- [ ] segunda linha com `.col-12`;
- [ ] terceira linha com `.col-md-*`;
- [ ] demonstrar offset;
- [ ] demonstrar order.

### Componentes e utilitários

- [ ] Button;
- [ ] Modal;
- [ ] Card;
- [ ] imagem responsiva com `.img-fluid`;
- [ ] personalização de cores;
- [ ] pelo menos três utilidades de texto;
- [ ] Flexbox com cinco botões;
- [ ] Bootstrap Icons.

### Entrega

- [ ] prints dos grids;
- [ ] Modal aberto;
- [ ] Card;
- [ ] Flexbox;
- [ ] Bootstrap Icons;
- [ ] breve descrição de experiência/desafios/aprendizado;
- [ ] PDF;
- [ ] envio Moodle.

### Estratégia

Se algum exercício didático específico da Atividade 07 não encaixar naturalmente nas telas finais, ele poderá ser demonstrado em uma página/laboratório separado da atividade, sem deformar o produto final.

---

## 7. Atividade 08 — Do Protótipo ao Código com Bootstrap e IA

### Preparação

- [ ] Bootstrap instalado via NPM;
- [ ] converter o conjunto APPROVED do Stitch para HTML/CSS;
- [ ] garantir Bootstrap 5.3;
- [ ] executar localmente;
- [ ] comparar código com o protótipo;
- [ ] confirmar que Bootstrap foi realmente usado.

### IA / MCP

O uso de Antigravity/MCP é opcional segundo o enunciado.

Se não for usado:

- [ ] justificar no relatório;
- [ ] registrar prints do método alternativo de importação/cópia do Stitch.

### Auditoria Bootstrap

Precisamos ter **10 componentes Bootstrap reais** implementados e explicáveis.

Lista planejada:

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

Outros que podem entrar na lista real:

- Form Control;
- Form Select.

### Layout

- [ ] explicar Grid;
- [ ] explicar Flexbox;
- [ ] indicar as classes usadas;
- [ ] auditar/implementar Sticky Footer;
- [ ] explicar tecnicamente o Sticky Footer.

### Breakpoints

Validar:

- [ ] xs <576px;
- [ ] sm ≥576px;
- [ ] md ≥768px;
- [ ] lg ≥992px;
- [ ] xl ≥1200px;
- [ ] xxl ≥1400px;
- [ ] sem overflow horizontal;
- [ ] imagens proporcionais;
- [ ] Offcanvas funcional.

### NPM x CDN

Durante esta atividade:

- Bootstrap deve ser consumido localmente por `node_modules`;
- não usar CDN como prova principal da Atividade 08.

### Entrega

- [ ] relatório dos 10 componentes;
- [ ] análise Grid/Flexbox;
- [ ] Sticky Footer;
- [ ] evidência MCP ou justificativa do método alternativo;
- [ ] prints Mobile xs;
- [ ] prints Desktop lg;
- [ ] commit/push;
- [ ] PDF;
- [ ] envio Moodle.

---

## 8. Entrega 2 — A Casca

### Objetivo

Traduzir o protótipo aprovado em HTML5/CSS3 real e responsivo, ainda sem a lógica final da Entrega 3.

### Requisitos

- [ ] cinco páginas HTML reais;
- [ ] Bootstrap aplicado substancialmente;
- [ ] Grid/Flexbox Bootstrap;
- [ ] CSS próprio com Grid/Flexbox;
- [ ] componentes Bootstrap;
- [ ] Design System implementado;
- [ ] Sass;
- [ ] unidades relativas;
- [ ] tipografia responsiva/fluida;
- [ ] imagens responsivas;
- [ ] imagens otimizadas/adaptativas;
- [ ] Sticky Footer;
- [ ] Mobile funcional;
- [ ] Desktop funcional;
- [ ] Vídeo 2.

---

## 9. Entrega 3 — O Motor

### Objetivo

Adicionar a lógica de negócio e publicar a aplicação final.

### JavaScript e formulários

- [ ] JavaScript Vanilla ES6+;
- [ ] validação HTML nativa;
- [ ] REGEX;
- [ ] select/checkbox/radio conforme necessário;
- [ ] Web Storage;
- [ ] DOM dinâmico.

### Bibliotecas

- [ ] jQuery realmente utilizado;
- [ ] plugin jQuery ou biblioteca complementar relevante.

### API fake

- [ ] JSON Server;
- [ ] usuários;
- [ ] livros;
- [ ] avaliações;
- [ ] POST assíncrono;
- [ ] GET assíncrono;
- [ ] edição;
- [ ] exclusão;
- [ ] JSON.

### API pública

- [ ] Google Books por ISBN;
- [ ] `fetch`;
- [ ] `async/await`;
- [ ] loading;
- [ ] estado sem resultado;
- [ ] erros de rede;
- [ ] fallback manual.

### Qualidade e ferramentas

- [ ] estrutura modular;
- [ ] ESLint;
- [ ] Prettier.

### Deploy

- [ ] aplicação publicada no GitHub Pages;
- [ ] seguir orientação final da disciplina para dependências/CDN;
- [ ] site em produção registrado no README;
- [ ] Vídeo 3.

---

## 10. README Final Exigido

Ao longo do semestre, o README deve evoluir até conter:

- [x] título/nome;
- [x] autor;
- [x] descrição;
- [x] link do protótipo Stitch;
- [x] Design System/documentação;
- [x] Framework CSS;
- [x] dependências atuais;
- [ ] site em produção;
- [x] checklist;
- [x] instruções de execução da fase atual;
- [ ] screenshots da aplicação implementada.

---

## 11. Escopo Mínimo do Projeto Final

### Páginas

Mínimo exigido: 3.

BookTracker planejado: 5.

1. Login;
2. Cadastro;
3. Estante;
4. Adicionar/Editar Livro;
5. Detalhes.

### Funcionalidades mínimas

- [ ] páginas responsivas;
- [ ] componentes do Framework CSS;
- [ ] formulário com campos obrigatórios;
- [ ] validação;
- [ ] Web Storage;
- [ ] listagem em cards;
- [ ] edição/exclusão;
- [ ] API fake;
- [ ] requisições assíncronas;
- [ ] JSON;
- [ ] API pública.

---

## 12. Checklist Oficial — ID01 a ID24

### RA1 — Framework CSS e Responsividade

- [x] **ID01** — protótipo Mobile/Desktop.
- [ ] **ID02** — layout responsivo com Bootstrap Grid/Flexbox.
- [ ] **ID03** — CSS puro com Grid/Flexbox.
- [ ] **ID04** — componentes Bootstrap e componente JavaScript do framework.
- [ ] **ID05** — unidades relativas.
- [ ] **ID06** — Design System aplicado consistentemente na aplicação.
- [ ] **ID07** — Sass com variáveis, mixins e funções.
- [ ] **ID08** — tipografia responsiva/fluida.
- [ ] **ID09** — imagens responsivas.
- [ ] **ID10** — imagens modernas/adaptativas.

### RA2 — Formulários

- [ ] **ID11** — validação HTML nativa.
- [ ] **ID12** — REGEX.
- [ ] **ID13** — select/checkbox/radio.
- [ ] **ID14** — Web Storage.

### RA3 — Ferramentas

- [x] **ID15** — Node/NPM.
- [x] **ID16** — Git/GitHub/.gitignore.
- [x] **ID17** — README padronizado com checklist.
- [ ] **ID18** — organização modular.
- [ ] **ID19** — ESLint/Prettier.

### RA4 — Bibliotecas JavaScript

- [ ] **ID20** — jQuery.
- [ ] **ID21** — plugin jQuery/outra biblioteca.

### RA5 — APIs

- [ ] **ID22** — API fake POST.
- [ ] **ID23** — API fake GET.
- [ ] **ID24** — API pública real com tratamento de erros.

---

## 13. Regra de Evidência

Nunca marcar um ID como concluído só porque:

- está planejado;
- existe no Stitch;
- está escrito no PRD/SDD;
- uma IA disse que foi feito.

Para marcar como concluído, deve existir:

1. implementação real quando o ID exigir código;
2. comportamento verificável;
3. evidência exigida pela atividade;
4. capacidade de explicar a solução.

---

## 14. Ordem Recomendada de Continuidade

1. fechar a 1ª Entrega e Vídeo 1;
2. manter Atividade 06 como concluída;
3. executar Atividade 07 exatamente conforme o enunciado;
4. executar Atividade 08 aproveitando o protótipo final;
5. consolidar Entrega 2;
6. implementar Entrega 3;
7. auditar ID01–ID24;
8. finalizar GitHub Pages, README, evidências, vídeos e apresentação final.
