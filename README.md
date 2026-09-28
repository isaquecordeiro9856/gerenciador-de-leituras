# BookTracker — Gerenciador de Leituras

**Autor:** Isaque Cordeiro

Aplicação web responsiva para organizar uma biblioteca pessoal: criar uma conta acadêmica de demonstração, gerenciar livros por status de leitura, buscar dados por ISBN e avaliar obras concluídas.

> A aplicação ainda não foi codificada. A **1ª Entrega** é a fundação do produto: documentação técnica + Design System + protótipo navegável Mobile/Desktop no Google Stitch. O setup Node/NPM existente pertence à Atividade 06.

## 📌 1ª Entrega — Fundação

| Requisito | Estado |
|---|---|
| Repositório público | ✅ |
| `docs/prd.md` | ✅ |
| `docs/architecture.md` | ✅ |
| Framework CSS definido | ✅ Bootstrap 5.3 |
| API pública definida | ✅ Google Books API v1 |
| Design Tokens | ✅ |
| Protótipo Mobile | ✅ |
| Protótipo Desktop | ✅ |
| Fluxos navegáveis | ✅ |
| Design System | ✅ |
| Vídeo de apresentação | ⏳ |

### Links

- **Repositório:** https://github.com/isaquecordeiro9856/gerenciador-de-leituras
- **Protótipo Google Stitch:** https://stitch.google.com/u/1/projects/18205289966603005290?pli=1
- **Vídeo:** pendente de gravação/publicação como Não listado no YouTube.

Antes da entrega no Moodle, os links do GitHub, Stitch e YouTube devem ser testados em janela anônima/deslogada.

## 📚 Documentação

- [PRD](docs/prd.md) — escopo, público-alvo, histórias de usuário e regras de negócio.
- [Architecture](docs/architecture.md) — SDD, modelo de dados, Design System, responsividade e arquitetura.
- [Spec](docs/spec.md) — contratos técnicos, validações, integrações e convenções.
- [Design Brief](docs/design-brief.md) — contrato visual e inventário oficial do protótipo.

## 🎨 Protótipo e Design

### Direção visual

O BookTracker segue uma linguagem de **biblioteca pessoal contemporânea**: editorial, limpa, acolhedora e profissional. As capas são o principal elemento visual; o fundo é neutro e quente, o verde profundo representa as ações principais e o terracota funciona como acento.

### Design System

Tokens oficiais:

- Primary: `#3F5144`
- Primary dark: `#2C3A30`
- Accent: `#C47A4A`
- Background: `#F5F3EE`
- Surface: `#FFFFFF`
- Text: `#20231F`
- Muted: `#62685F`
- Border: `#D9DDD6`
- Success: `#2F7D4A`
- Info: `#3F6F8E`
- Warning: `#A56A22`
- Danger: `#B4423C`
- Títulos: **DM Serif Display**
- Corpo/UI: **Inter**

Contrato completo: [docs/architecture.md#8-design-system](docs/architecture.md#8-design-system).

### Mapeamento visual para Bootstrap 5.3

O protótipo foi planejado para indicar visualmente componentes que serão implementados com Bootstrap. Para a apresentação da 1ª Entrega, os três exemplos principais são:

1. **Navbar / Offcanvas** — navegação responsiva;
2. **Card** — livros da estante;
3. **Modal** — confirmação de exclusão.

Também estão previstos Forms/Input Group, Buttons, Badges, Alert/Toast e Select/Dropdown.

## 🖼️ Inventário oficial do Stitch

Somente o conjunto **APPROVED** deve orientar a implementação.

### Mobile

- M0A — Login
- M0B — Cadastro
- M1 — Minha Estante
- M2 — Estante Vazia
- M3 — Offcanvas
- M4 — Adicionar/Editar Livro
- M5 — Validação e API
- M6 — Detalhes Lido
- M7 — Detalhes Não Concluído
- M8 — Modal de Exclusão
- M9 — Feedback e Loading

### Desktop

- D0A — Login
- D0B — Cadastro
- D1 — Minha Estante
- D2 — Estante Vazia
- D4 — Adicionar/Editar Livro
- D5 — Validação e API
- D6 — Detalhes Lido
- D7 — Detalhes Não Concluído
- D8 — Modal de Exclusão

Além das telas, existe o **APPROVED DESIGN SYSTEM**.

## ✏️ Regra oficial de Adicionar e Editar Livro

Não existem telas separadas M4B/D4B.

**M4 e D4 são um único formulário reutilizado em dois modos:**

- **Adicionar:** campos inicialmente vazios e ação principal `Salvar livro`;
- **Editar:** campos pré-preenchidos com o livro atual e ação principal `Salvar alterações`.

No modo Editar, o usuário pode alterar ISBN, título, autor(es) e status. A capa continua vinculada à busca por ISBN na Google Books API; não existe upload manual de imagem.

A avaliação **não faz parte do formulário de edição**. Estrelas e resenha pertencem à seção **Minha avaliação** dos Detalhes quando o livro está com status `Lido`.

Fluxo de edição:

`Detalhes → Editar → M4/D4 preenchido → Salvar alterações → Detalhes atualizado`

`Cancelar → Detalhes sem alteração`

## ⭐ Regra de avaliação

- `Lido` + avaliação existente → mostrar a nota de 1 a 5 estrelas.
- `Lido` sem avaliação → mostrar `Ainda não avaliado`.
- `Lendo` ou `Quero ler` → não mostrar estrelas falsas.
- A avaliação é criada/editada somente na área **Minha avaliação** dos Detalhes.

Se um livro avaliado deixar o status `Lido`, a implementação deverá pedir confirmação antes de remover a avaliação incompatível.

## 🧭 Páginas planejadas

A implementação terá cinco páginas HTML principais:

1. **Login** — `login.html`
2. **Cadastro** — `cadastro.html`
3. **Estante** — `index.html`
4. **Adicionar/Editar Livro** — `livro-form.html`
5. **Detalhes do Livro** — `livro.html`

Frames como estado vazio, validação, modal, loading e feedback são estados/componentes dessas páginas, não páginas HTML adicionais.

## 🔐 Autenticação acadêmica

Login e Cadastro fazem parte do protótipo final, mas serão implementados sobre JSON Server apenas para fins acadêmicos.

- usar somente credenciais fictícias de demonstração;
- não apresentar o mecanismo como autenticação segura de produção;
- nunca armazenar senha no Web Storage;
- a sessão guarda apenas o identificador do usuário.

## 💻 Tecnologias

| Tecnologia | Uso |
|---|---|
| **Bootstrap 5.3.8** | Framework CSS principal. |
| **HTML5 / CSS3** | Estrutura semântica e estilos próprios. |
| **JavaScript ES6+** | Lógica, DOM, validações e Fetch API. |
| **Sass (SCSS)** | Tokens, mixins, funções e modularização. |
| **jQuery** | Requisito de manipulação/interatividade da disciplina. |
| **uuid** | Identificadores quando necessários. |
| **JSON Server** | API fake para usuários, livros e avaliações. |
| **Google Books API v1** | Busca de título, autoria e capa por ISBN. |
| **gh-pages / GitHub Pages** | Publicação estática em etapa posterior. |

### Framework CSS

O framework oficial é **Bootstrap 5.3**. Tailwind CSS não será utilizado.

### API pública

A API pública oficial é a **Google Books API v1**, consultada por ISBN. Quando não houver resultado ou ocorrer falha, o formulário continua disponível para preenchimento manual.

## ✅ Atividade 06 — Node, NPM e Git

- [x] Identidade Git confirmada.
- [x] Repositório clonado e sincronizado.
- [x] Projeto NPM inicializado.
- [x] `.gitignore` ignora `node_modules` e arquivos de ambiente.
- [x] `jquery` e `uuid` em dependencies.
- [x] `gh-pages` em devDependencies.
- [x] Commit/push da configuração Node.
- [x] Screenshot de `npm install` + `git push`.
- [x] PDF final gerado.
- [ ] PDF enviado no Moodle.

## ✅ Checklist | Indicadores de Desempenho

### RA1 — Framework CSS e responsividade

- [x] ID 01 — Protótipo adaptável Mobile/Desktop no Stitch.
- [ ] ID 02 — Layout responsivo implementado com Bootstrap Grid/Flexbox.
- [ ] ID 03 — CSS próprio usando Flexbox/Grid.
- [ ] ID 04 — Componentes Bootstrap implementados no código.
- [ ] ID 05 — Layout fluido com unidades relativas.
- [x] ID 06 — Design System definido e consistente no protótipo/documentação.
- [ ] ID 07 — Sass com variáveis, mixins e funções.
- [ ] ID 08 — Tipografia responsiva/fluida implementada.
- [ ] ID 09 — Imagens responsivas implementadas.
- [ ] ID 10 — Otimização/carregamento adaptativo de imagens.

### RA2 — Formulários

- [ ] ID 11 — Validação HTML nativa e feedback.
- [ ] ID 12 — REGEX customizada.
- [ ] ID 13 — Checkbox, radio ou select.
- [ ] ID 14 — Web Storage.

### RA3 — Ferramentas

- [x] ID 15 — Node.js/NPM inicializado.
- [x] ID 16 — Git/GitHub e `.gitignore`.
- [x] ID 17 — README com checklist.
- [ ] ID 18 — Organização modular implementada.
- [ ] ID 19 — ESLint/Prettier.

### RA4 — Bibliotecas JavaScript

- [ ] ID 20 — jQuery utilizado.
- [ ] ID 21 — Plugin/biblioteca complementar utilizada.

### RA5 — APIs

- [ ] ID 22 — POST assíncrono na API fake.
- [ ] ID 23 — GET assíncrono da API fake.
- [ ] ID 24 — Google Books API com tratamento de erros.

> Itens de implementação permanecem desmarcados até existirem no código. Isso evita registrar como concluído algo que ainda é apenas parte do protótipo.

## 🚀 Execução atual

Nesta fase a aplicação HTML ainda não foi implementada. As dependências da Atividade 06 podem ser restauradas com:

```bash
git clone https://github.com/isaquecordeiro9856/gerenciador-de-leituras.git
cd gerenciador-de-leituras
npm install
```

## 🗺️ Roadmap

- **1ª Entrega:** documentação ✅ · Design System ✅ · protótipo Mobile/Desktop navegável ✅ · vídeo ⏳
- **Atividade 06:** Node/NPM/Git ✅ · evidências e PDF ✅ · envio Moodle ⏳
- **Entrega 2:** HTML/CSS responsivo + Bootstrap ⏳
- **Entrega 3:** JavaScript, Web Storage, APIs e deploy ⏳
