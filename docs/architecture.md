# Software Design Document / Architecture

## 1. Visão Técnica

O **BookTracker** será uma aplicação web responsiva desenvolvida com HTML5, CSS/Sass e JavaScript ES6+, usando **Bootstrap 5.3.8** como Framework CSS principal.

Arquitetura-alvo:

- páginas HTML separadas;
- JavaScript modular por responsabilidade;
- Bootstrap para Grid, Flexbox, utilitários e componentes;
- Sass/CSS próprio para identidade visual;
- JSON Server como API fake acadêmica;
- Google Books API v1 para busca por ISBN;
- Web Storage para sessão acadêmica e preferências;
- GitHub Pages para a interface estática final.

A autenticação deste projeto é **didática**, construída sobre a API fake exigida pela disciplina. Não deve ser tratada como autenticação segura de produção.

## 2. Páginas Principais

### 2.1 Login — `login.html`

Responsabilidades:

- validar e-mail e senha;
- consultar usuário na API fake;
- iniciar sessão acadêmica;
- direcionar para Cadastro.

### 2.2 Cadastro — `cadastro.html`

Responsabilidades:

- validar nome, e-mail, senha e confirmação;
- impedir e-mail duplicado;
- criar usuário;
- iniciar fluxo autenticado ou direcionar para Login.

### 2.3 Estante — `index.html`

Responsabilidades:

- exigir sessão válida;
- carregar somente livros do usuário atual;
- renderizar cards;
- buscar, filtrar e ordenar;
- exibir estado vazio;
- restaurar preferências locais;
- direcionar para cadastro e detalhes.

### 2.4 Cadastro/Edição — `livro-form.html`

Responsabilidades:

- validar ISBN;
- consultar Google Books;
- preencher dados encontrados;
- permitir fallback manual;
- validar formulário;
- criar/editar livro associado ao usuário atual.

### 2.5 Detalhes — `livro.html`

Responsabilidades:

- exibir livro do usuário atual;
- editar/excluir;
- criar/editar avaliação quando status for Lido;
- impedir avaliação em livro não concluído;
- confirmar exclusão.

## 3. Modelo de Dados

A API fake terá três entidades: **USUARIO**, **LIVRO** e **AVALIACAO**.

```mermaid
erDiagram
    USUARIO ||--o{ LIVRO : possui
    LIVRO ||--o| AVALIACAO : possui

    USUARIO {
        string id PK
        string nome
        string email UK
        string senha
        string data_criacao
    }

    LIVRO {
        string id PK
        string usuario_id FK
        string isbn
        string titulo
        string autor
        string capa_url
        string status_leitura
        string data_criacao
        string data_atualizacao
    }

    AVALIACAO {
        string id PK
        string livro_id FK UK
        int nota_estrelas
        string resenha
        string data_avaliacao
    }
```

### Regras relacionais

- um usuário possui zero ou muitos livros;
- cada livro pertence a exatamente um usuário;
- ISBN é único **dentro da estante do mesmo usuário**;
- cada livro possui no máximo uma avaliação;
- somente livro com status `lido` pode possuir avaliação;
- excluir livro remove a avaliação associada via lógica JavaScript.

### Observação sobre senha

O JSON Server não fornece autenticação segura, hashing confiável de credenciais no servidor, sessão protegida ou autorização real. Portanto:

- usar somente credenciais fictícias de demonstração;
- nunca reutilizar senha pessoal real;
- não afirmar que esse fluxo é seguro para produção;
- nunca guardar senha em `localStorage` ou `sessionStorage`.

## 4. API Fake

Base local de desenvolvimento:

`http://localhost:3000`

### Usuários

| Método | Rota | Uso |
|---|---|---|
| GET | /usuarios?email={email} | localizar conta / verificar duplicidade |
| POST | /usuarios | criar usuário |
| GET | /usuarios/{id} | recuperar usuário da sessão quando necessário |

### Livros

| Método | Rota | Uso |
|---|---|---|
| GET | /livros?usuario_id={id} | listar estante do usuário |
| GET | /livros/{id} | obter livro |
| GET | /livros?usuario_id={id}&isbn={isbn} | verificar duplicidade |
| POST | /livros | cadastrar |
| PATCH | /livros/{id} | editar |
| DELETE | /livros/{id} | excluir |

### Avaliações

| Método | Rota | Uso |
|---|---|---|
| GET | /avaliacoes?livro_id={id} | consultar |
| POST | /avaliacoes | criar |
| PATCH | /avaliacoes/{id} | editar |
| DELETE | /avaliacoes/{id} | excluir |

> O front-end sempre deve confirmar que o livro carregado pertence ao usuário da sessão antes de permitir ações. Isso é uma proteção didática de interface, não autorização segura de backend.

## 5. Sessão e Web Storage

### Sessão acadêmica

Preferência: `sessionStorage`.

Chave:

- `booktracker.session.userId`

A sessão armazena apenas o identificador do usuário, nunca a senha.

Ao abrir páginas protegidas:

1. ler `userId`;
2. se ausente, redirecionar para Login;
3. carregar dados usando `usuario_id`;
4. ao sair da sessão, remover a chave.

### Preferências

`localStorage` pode armazenar:

- `booktracker.filters.status`;
- `booktracker.sort`;
- busca textual, se fizer sentido.

## 6. Google Books API

Consulta:

`GET https://www.googleapis.com/books/v1/volumes?q=isbn:{isbn}`

Campos principais:

- `volumeInfo.title`;
- `volumeInfo.authors`;
- `volumeInfo.imageLinks.thumbnail`.

Comportamento:

- encontrado → sugerir/preencher dados;
- não encontrado → permitir preenchimento manual;
- erro → feedback sem apagar campos;
- sem capa → fallback visual local.

## 7. Estrutura de Front-end

```text
/
├── login.html
├── cadastro.html
├── index.html
├── livro-form.html
├── livro.html
├── db.json
├── package.json
├── README.md
├── docs/
└── src/
    ├── js/
    │   ├── api/
    │   │   ├── auth-api.js
    │   │   ├── books-api.js
    │   │   └── library-api.js
    │   ├── pages/
    │   │   ├── login.js
    │   │   ├── cadastro.js
    │   │   ├── estante.js
    │   │   ├── livro-form.js
    │   │   └── livro-detalhe.js
    │   ├── session.js
    │   ├── storage.js
    │   ├── validation.js
    │   └── ui.js
    ├── scss/
    │   ├── _tokens.scss
    │   ├── _components.scss
    │   ├── _utilities.scss
    │   └── main.scss
    └── assets/
        └── images/
```

## 8. Design System

### Conceito

**Biblioteca pessoal contemporânea**: editorial, limpa, acolhedora, moderna e fácil de reproduzir com Bootstrap.

### Tokens

| Token | Valor |
|---|---|
| Primary | `#3F5144` |
| Primary dark | `#2C3A30` |
| Accent | `#C47A4A` |
| Background | `#F5F3EE` |
| Surface | `#FFFFFF` |
| Text | `#20231F` |
| Muted | `#62685F` |
| Border | `#D9DDD6` |
| Success | `#2F7D4A` |
| Info | `#3F6F8E` |
| Warning | `#A56A22` |
| Danger | `#B4423C` |

Tipografia:

- títulos: **DM Serif Display**;
- corpo/interface: **Inter**.

Terracota é acento; ações primárias usam verde profundo.

## 9. Componentes Bootstrap Planejados

- Navbar;
- Offcanvas;
- Card;
- Modal;
- Forms;
- Input Group;
- Buttons;
- Badges;
- Alert/Toast;
- Select/Dropdown.

## 10. Responsividade

Estratégia mobile-first:

- xs: uma coluna e navegação compacta;
- sm/md: filtros/formulários reorganizados;
- lg+: grade de cards e layouts em duas colunas.

Combinar:

- Grid/Flexbox Bootstrap;
- CSS Grid/Flexbox próprio onde apropriado;
- unidades relativas;
- `clamp()` para tipografia;
- imagens responsivas com `object-fit`;
- técnicas adaptativas para imagens locais quando aplicáveis.

## 11. Acessibilidade — Requisitos de Implementação

O protótipo representa a intenção visual. O código ainda deverá implementar e validar:

- HTML semântico;
- `label` associado a cada controle;
- mensagens ligadas aos campos;
- navegação por teclado;
- foco visível;
- contraste suficiente;
- texto alternativo;
- status não dependentes somente de cor;
- modal com gerenciamento adequado de foco;
- `prefers-reduced-motion` em animações customizadas.

Não considerar atributos ARIA ou classes Bootstrap como implementados antes de existirem no código.

## 12. Protótipo Final Aprovado

### Design System

- APPROVED DESIGN SYSTEM

### Autenticação Mobile

- APPROVED M0A — Login
- APPROVED M0B — Cadastro

### Mobile

- APPROVED M1 — Estante
- APPROVED M2 — Estante Vazia
- APPROVED M3 — Offcanvas
- APPROVED M4 — Adicionar/Editar Livro
- APPROVED M5 — Validação e API
- APPROVED M6 — Detalhes Lido
- APPROVED M7 — Detalhes Não Concluído
- APPROVED M8 — Modal Exclusão
- APPROVED M9 — Feedback/Loading

### Autenticação Desktop

- APPROVED D0A — Login
- APPROVED D0B — Cadastro

### Desktop

- APPROVED D1 — Estante
- APPROVED D2 — Estante Vazia
- APPROVED D4 — Adicionar/Editar Livro
- APPROVED D5 — Validação e API
- APPROVED D6 — Detalhes Lido
- APPROVED D7 — Detalhes Não Concluído
- APPROVED D8 — Modal Exclusão

## 13. Fluxos

### Mobile

`M0A Login ↔ M0B Cadastro → M1 Estante`

`M1 → M3 Offcanvas → M1/M4`

`M1 → M4 → M9 → M1`

`M1 → M6/M7 → M4`

`M6/M7 → M8 → M1 ou Detalhes`

### Desktop

`D0A Login ↔ D0B Cadastro → D1 Estante`

`D1 → D4 → D1`

`D1 → D6/D7 → D4`

`D6/D7 → D8 → D1 ou Detalhes`

## 14. Restrições

Não adicionar:

- perfil/avatar;
- login social;
- coleções/citações/notas/diário;
- metas/streaks;
- progresso/páginas;
- formato/edição/publicação;
- upload de capa;
- recursos sociais;
- recomendações;
- dashboard/estatísticas.

Também:

- Tailwind não será usado;
- não haverá React/Vue;
- lógica principal será JavaScript Vanilla ES6+;
- Bootstrap será o Framework CSS oficial.
