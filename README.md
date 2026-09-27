# BookTracker — Gerenciador de Leituras

**Autor:** Isaque Cordeiro

Aplicação web responsiva para organizar uma biblioteca pessoal, acompanhar o status das leituras e registrar avaliações. O projeto é desenvolvido progressivamente para a disciplina, seguindo os requisitos de Framework CSS, responsividade, formulários, Web Storage, bibliotecas JavaScript, API fake e API pública.

## 📚 Documentação

- 📄 [PRD](docs/prd.md) — visão do produto, escopo, regras de negócio e histórias de usuário.
- 🏗️ [Architecture](docs/architecture.md) — arquitetura, modelo de dados, Design System, responsividade e componentes.
- 🛠️ [Spec](docs/spec.md) — versões, contratos técnicos, convenções e integrações.
- 🎨 [Design Brief](docs/design-brief.md) — direção visual, telas e prompt oficial do novo protótipo.

## 🎨 Protótipo e Design

- **Ferramenta:** Google Stitch (WEB, abordagem mobile-first).
- **Protótipo atual:** será substituído por uma nova versão antes da 1ª Entrega.
- **Novo link compartilhável:** _adicionar após finalizar o novo protótipo_.
- **Design System:** [docs/architecture.md#7-design-system](docs/architecture.md#7-design-system)

### Direção visual

O novo BookTracker seguirá uma linguagem editorial contemporânea: interface limpa, acolhedora e profissional, com capas de livros como principal elemento visual, fundo neutro quente, verde profundo como cor de identidade e detalhes em terracota.

### Componentes Bootstrap planejados no protótipo

Pelo menos estes componentes serão identificados visualmente para futura implementação:

1. Navbar/Offcanvas;
2. Cards;
3. Modal;
4. Forms/Input Group;
5. Buttons;
6. Badges.

## 🧭 Páginas planejadas

1. **Estante** — listagem em cards, busca, filtros e ordenação.
2. **Cadastro/Edição de livro** — formulário, validação e busca por ISBN.
3. **Detalhes do livro** — informações completas, avaliação, edição e exclusão.

O escopo não inclui autenticação de usuários. Isso mantém o projeto compatível com a arquitetura acadêmica baseada em front-end + JSON Server e evita simular segurança que a stack não fornece.

## 💻 Tecnologias e Dependências

| Tecnologia | Uso |
|---|---|
| **Bootstrap 5.3.8** | Framework CSS principal: Grid/Flexbox, responsividade e componentes. |
| **HTML5 / CSS3** | Estrutura semântica e estilos próprios. |
| **JavaScript ES6+** | Lógica, DOM, validações e requisições assíncronas. |
| **Sass (SCSS)** | Variáveis, mixins, funções e modularização do CSS. |
| **jQuery** | Manipulação do DOM e interatividade exigida pela disciplina. |
| **uuid** | Geração de identificadores quando necessária. |
| **JSON Server** | API fake para livros e avaliações. |
| **Google Books API v1** | Busca de metadados de livros por ISBN. |
| **gh-pages / GitHub Pages** | Apoio ao processo de publicação estática. |

### Por que Bootstrap?

O Bootstrap 5.3 atende diretamente aos objetivos da disciplina: possui grid mobile-first, utilitários de Flexbox, componentes visuais e componentes JavaScript prontos. O design do projeto será personalizado com Sass/CSS, sem alterar os arquivos internos do framework e sem utilizar Tailwind.

### Por que Google Books API?

A Google Books API permite pesquisar obras por ISBN e aproveitar título, autoria e capa para reduzir a digitação durante o cadastro. Caso a obra não seja encontrada ou a API falhe, o formulário continuará permitindo preenchimento manual.

## 🌐 Site em Produção

_Ainda não publicado. O deploy faz parte da etapa final do projeto._

## ✅ Atividade 06 — Fundamentos de Ecossistema

Estado auditado no repositório:

- [ ] Identidade Git confirmada no computador utilizado para a entrega.
- [ ] Evidência do clone registrada em screenshot, se necessária.
- [x] Projeto NPM inicializado (`package.json`).
- [x] `.gitignore` ignora `node_modules` e `.env`.
- [x] `jquery` e `uuid` estão em `dependencies`.
- [x] `gh-pages` está em `devDependencies`.
- [x] Há commit/push da configuração Node no histórico do GitHub.
- [ ] Screenshots do terminal preparados.
- [ ] PDF final da Atividade 06 exportado e enviado.

> Não marque os itens de evidência acima sem ter os prints exigidos pela atividade.

## ✅ Checklist | Indicadores de Desempenho

### RA1 — Framework CSS e responsividade

- [ ] ID 01 — Protótipo adaptável para mobile e desktop no Stitch.
- [ ] ID 02 — Layout responsivo com Bootstrap usando Grid/Flexbox do framework.
- [ ] ID 03 — Layout responsivo com CSS próprio usando Flexbox ou Grid.
- [ ] ID 04 — Componentes prontos do Bootstrap e componente JavaScript do framework.
- [ ] ID 05 — Layout fluido com unidades relativas.
- [ ] ID 06 — Design System consistente.
- [ ] ID 07 — Sass com variáveis, mixins e funções.
- [ ] ID 08 — Tipografia responsiva/fluida.
- [ ] ID 09 — Imagens responsivas com CSS.
- [ ] ID 10 — Imagens otimizadas/carregamento adaptativo.

### RA2 — Formulários

- [ ] ID 11 — Validação HTML nativa e mensagens de feedback.
- [ ] ID 12 — REGEX em validação customizada.
- [ ] ID 13 — Checkbox, radio ou select.
- [ ] ID 14 — Leitura e escrita no Web Storage.

### RA3 — Ferramentas de desenvolvimento

- [x] ID 15 — Ambiente Node.js/NPM inicializado no projeto.
- [x] ID 16 — Git/GitHub e `.gitignore` em uso.
- [x] ID 17 — README padronizado com checklist.
- [ ] ID 18 — Organização modular implementada.
- [ ] ID 19 — ESLint e Prettier configurados.

### RA4 — Bibliotecas JavaScript

- [ ] ID 20 — jQuery usado na aplicação.
- [ ] ID 21 — Plugin jQuery relevante ou outra biblioteca de funções integrada.

### RA5 — APIs

- [ ] ID 22 — Requisição assíncrona à API fake para persistir formulário.
- [ ] ID 23 — Requisição assíncrona à API fake para exibir dados.
- [ ] ID 24 — Requisição assíncrona à Google Books API com tratamento de erros.

## 🚀 Execução atual

Nesta fase ainda não existe aplicação HTML final. Para preparar as dependências já registradas:

```bash
git clone https://github.com/isaquecordeiro9856/gerenciador-de-leituras.git
cd gerenciador-de-leituras
npm install
```

Os comandos para JSON Server, Sass, lint, desenvolvimento e deploy serão adicionados quando essas dependências forem introduzidas nas respectivas atividades.

## 🗺️ Roadmap

- **Fundação / 1ª Entrega:** documentação ✅ · novo protótipo ⏳ · vídeo ⏳
- **Atividade 06:** configuração Node/NPM/Git ✅ · evidências/PDF ⏳
- **Entrega 2:** HTML/CSS responsivo com Bootstrap ⏳
- **Entrega 3:** JavaScript, Web Storage, APIs e deploy ⏳

## 📱 Telas da Aplicação

As capturas do novo protótipo e, posteriormente, da implementação serão adicionadas conforme as entregas avançarem.
