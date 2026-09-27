# Software Design Document / Architecture

## 1. Visão Técnica

O **BookTracker** será uma aplicação web responsiva desenvolvida com HTML5, CSS/Sass e JavaScript ES6+, usando **Bootstrap 5.3.8** como Framework CSS principal.

O projeto seguirá uma arquitetura front-end simples, adequada ao escopo da disciplina:

- páginas HTML separadas;
- JavaScript modular por responsabilidade;
- Bootstrap para Grid, utilitários e componentes;
- Sass/CSS próprio para identidade visual e requisitos que não devem depender somente do framework;
- JSON Server como API fake durante o desenvolvimento;
- Google Books API v1 como API pública real;
- localStorage para preferências de interface;
- GitHub Pages como hospedagem estática da interface final.

Não haverá autenticação nem backend próprio nesta versão acadêmica.

## 2. Páginas Principais

### 2.1 Estante — index.html

Responsabilidades:

- carregar a coleção pela API fake;
- renderizar livros em cards;
- buscar por título/autor;
- filtrar por status;
- ordenar a listagem;
- restaurar preferências do localStorage;
- direcionar para cadastro e detalhes.

### 2.2 Cadastro/Edição — livro-form.html

Responsabilidades:

- validar ISBN;
- consultar Google Books API;
- preencher dados encontrados;
- permitir fallback manual;
- validar formulário;
- criar ou atualizar livro na API fake.

### 2.3 Detalhes — livro.html

Responsabilidades:

- exibir informações completas do livro;
- abrir fluxo de edição;
- excluir livro com confirmação;
- criar/editar avaliação de livros concluídos;
- remover avaliação quando necessário pelas regras de negócio.

## 3. Modelo de Dados

A API fake terá duas entidades principais: LIVRO e AVALIACAO.

```mermaid
erDiagram
    LIVRO ||--o| AVALIACAO : possui

    LIVRO {
        string id PK
        string isbn UK
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

### Dicionário de Dados

| Entidade | Campo | Tipo | Regra |
|---|---|---|---|
| LIVRO | id | string | Identificador único. |
| LIVRO | isbn | string | Obrigatório; 10 ou 13 dígitos normalizados; único na coleção. |
| LIVRO | titulo | string | Obrigatório; 2–150 caracteres. |
| LIVRO | autor | string | Obrigatório; autores exibidos em texto. |
| LIVRO | capa_url | string | URL da capa retornada pela API pública ou fallback local. |
| LIVRO | status_leitura | string | quero-ler, lendo ou lido. |
| LIVRO | data_criacao | string | ISO 8601. |
| LIVRO | data_atualizacao | string | ISO 8601. |
| AVALIACAO | id | string | Identificador único. |
| AVALIACAO | livro_id | string | Referência ao livro; relação 1:1. |
| AVALIACAO | nota_estrelas | integer | Valor entre 1 e 5. |
| AVALIACAO | resenha | string | Até 1000 caracteres. |
| AVALIACAO | data_avaliacao | string | ISO 8601. |

## 4. Contratos da API Fake

Base de desenvolvimento: `http://localhost:3000`

### Livros

| Método | Rota | Uso |
|---|---|---|
| GET | /livros | listar livros |
| GET | /livros/{id} | obter livro |
| GET | /livros?isbn={isbn} | verificar duplicidade |
| POST | /livros | cadastrar livro |
| PATCH | /livros/{id} | editar livro |
| DELETE | /livros/{id} | excluir livro |

### Avaliações

| Método | Rota | Uso |
|---|---|---|
| GET | /avaliacoes?livro_id={id} | consultar avaliação do livro |
| POST | /avaliacoes | criar avaliação |
| PATCH | /avaliacoes/{id} | editar avaliação |
| DELETE | /avaliacoes/{id} | remover avaliação |

> O JSON Server não implementa regras relacionais ou cascata automaticamente. Regras como excluir a avaliação junto com o livro serão executadas explicitamente pelo JavaScript da aplicação.

## 5. API Pública

### Google Books API v1

Objetivo: buscar metadados de um livro a partir do ISBN.

Endpoint base:

`GET https://www.googleapis.com/books/v1/volumes?q=isbn:{isbn}`

Dados usados:

- `volumeInfo.title`;
- `volumeInfo.authors`;
- `volumeInfo.imageLinks.thumbnail`.

Comportamentos previstos:

- resultado encontrado → preencher/sugerir dados;
- nenhum resultado → liberar preenchimento manual;
- erro HTTP/rede → mostrar feedback e preservar os dados digitados;
- ausência de capa → usar placeholder local.

A aplicação deverá seguir a forma de identificação/autorização definida pela documentação oficial da Google Books API no momento da implementação, sem armazenar chaves secretas no repositório.

## 6. Arquitetura de Front-end

Estrutura-alvo prevista:

```text
/
├── index.html
├── livro-form.html
├── livro.html
├── db.json
├── package.json
├── README.md
├── docs/
│   ├── prd.md
│   ├── architecture.md
│   └── spec.md
└── src/
    ├── js/
    │   ├── api/
    │   │   ├── books-api.js
    │   │   └── library-api.js
    │   ├── pages/
    │   │   ├── estante.js
    │   │   ├── livro-form.js
    │   │   └── livro-detalhe.js
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

A estrutura poderá ser adaptada nas atividades seguintes caso o professor determine outra organização.

## 7. Design System

### Direção Visual

A interface seguirá uma linguagem **editorial contemporânea**: acolhedora como uma biblioteca pessoal, mas limpa e digital.

Princípios:

- leitura confortável;
- hierarquia tipográfica forte;
- bastante espaço em branco;
- capas dos livros como elemento visual principal;
- poucos tons de destaque;
- cards discretos, sem excesso de sombras;
- estados e ações facilmente reconhecíveis;
- aparência moderna sem depender de tendências difíceis de reproduzir em Bootstrap.

### Paleta

| Token | Valor | Uso |
|---|---|---|
| color-primary | #3F5144 | verde profundo; ações primárias e identidade |
| color-primary-dark | #2C3A30 | hover/ênfase |
| color-accent | #C47A4A | detalhe editorial e destaques |
| color-background | #F5F3EE | fundo geral quente |
| color-surface | #FFFFFF | cards, formulários e modais |
| color-text | #20231F | texto principal |
| color-muted | #6F746D | texto secundário |
| color-border | #D9DDD6 | divisórias e campos |
| color-success | #2F7D4A | estado Lido e sucesso |
| color-info | #3F6F8E | estado Lendo e informação |
| color-warning | #A56A22 | estado Quero ler/destaques |
| color-danger | #B4423C | erros e ações destrutivas |

### Tipografia

- **Títulos:** "DM Serif Display", Georgia, serif
- **Interface e corpo:** "Inter", system-ui, sans-serif

Tokens principais:

- font-size-base: `clamp(1rem, 0.96rem + 0.2vw, 1.125rem)`
- font-size-h1: `clamp(2rem, 1.65rem + 1.8vw, 3.25rem)`
- font-size-h2: `clamp(1.5rem, 1.3rem + 1vw, 2.25rem)`
- line-height-body: `1.6`

### Espaçamento e Forma

- spacing-unit: `0.5rem`
- radius-sm: `0.5rem`
- radius-md: `0.875rem`
- radius-lg: `1.25rem`
- shadow-card: `0 0.5rem 1.5rem rgba(32, 35, 31, 0.08)`
- content-max-width: `75rem`

## 8. Componentes Bootstrap Planejados

O protótipo deverá evidenciar componentes que serão implementados com Bootstrap. Entre eles:

1. **Navbar / Offcanvas** — navegação responsiva;
2. **Cards** — livros da estante;
3. **Modal** — confirmação de exclusão;
4. **Forms / Input groups** — cadastro e busca por ISBN;
5. **Badges** — status de leitura;
6. **Buttons** — ações principais e secundárias;
7. **Alerts ou Toasts** — feedback de operações;
8. **Dropdown/Select** — ordenação e filtros quando aplicável.

Os três primeiros já satisfazem o requisito mínimo de identificar pelo menos três componentes do framework no protótipo.

## 9. Responsividade

Estratégia mobile-first:

- xs: uma coluna de cards e navegação compacta;
- sm/md: melhor aproveitamento horizontal de filtros e formulários;
- lg+: grade com múltiplos cards e maior separação entre conteúdo principal e controles.

A implementação deverá combinar:

- Grid/Flexbox do Bootstrap;
- CSS Grid/Flexbox próprio em pontos específicos para atender também ao ID 03;
- unidades relativas;
- tipografia com `clamp()`;
- imagens com `object-fit`;
- `picture`, `srcset` ou outra técnica equivalente quando houver imagens locais relevantes.

## 10. Acessibilidade

Diretrizes previstas:

- HTML semântico;
- labels explícitos em formulários;
- navegação por teclado;
- foco visível;
- textos alternativos adequados;
- contraste suficiente;
- mensagens de erro associadas aos campos;
- não depender somente de cor para transmitir status;
- suporte a `prefers-reduced-motion` para animações customizadas, quando existirem.

## 11. Persistência Local

O localStorage será usado apenas para preferências não críticas, por exemplo:

- filtro selecionado;
- ordenação;
- modo de visualização, se implementado.

Os dados principais da coleção não serão duplicados no localStorage; ficarão na API fake.

## 12. Qualidade e Ferramentas

Ao longo das atividades, o projeto deverá incluir:

- Node.js LTS e NPM;
- Git/GitHub;
- Bootstrap;
- Sass;
- ESLint;
- Prettier;
- jQuery;
- plugin/biblioteca adicional compatível com o requisito da disciplina;
- JSON Server;
- GitHub Pages.

As versões exatas adotadas ficam registradas em `docs/spec.md`.

## 13. Restrições

- Tailwind CSS não será utilizado.
- Não haverá framework JavaScript como React/Vue.
- A lógica principal será JavaScript Vanilla ES6+.
- Bootstrap será o Framework CSS oficial.
- O projeto deverá permanecer simples o suficiente para que o autor consiga explicar as decisões e o código durante a avaliação.
