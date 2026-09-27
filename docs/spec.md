# Especificação Técnica

Este documento registra as versões e contratos técnicos oficiais do **BookTracker**. O escopo funcional está em [prd.md](prd.md) e as decisões de arquitetura/design estão em [architecture.md](architecture.md).

## 1. Stack Oficial

| Tecnologia | Versão/linha | Uso |
|---|---|---|
| HTML | HTML5 | Estrutura semântica das páginas. |
| CSS | CSS3 | Ajustes próprios e requisitos de responsividade fora do framework. |
| Bootstrap | **5.3.8** | Framework CSS principal: Grid, Flexbox, utilitários e componentes. |
| JavaScript | ES6+ | Lógica de negócio, DOM, validações e fetch/async-await. |
| Sass | versão definida na instalação | Variáveis, mixins, funções e modularização do CSS. |
| jQuery | versão instalada no package.json | Manipulação do DOM/interatividade exigida pela disciplina. |
| Biblioteca/plugin complementar | a definir após teste de compatibilidade | Atendimento ao ID 21 sem forçar dependência incompatível. |
| JSON Server | versão definida na instalação | API fake REST para livros e avaliações. |
| Google Books API | **v1** | Busca de livros por ISBN. |
| Node.js | **linha LTS vigente no ambiente da disciplina** | Ambiente e gerenciamento de dependências. |
| NPM | versão fornecida pelo Node | Gerenciamento de pacotes. |
| GitHub Pages | serviço | Hospedagem estática final da interface. |

> Não será usado Tailwind CSS.

## 2. Bootstrap

- **Versão oficial adotada:** Bootstrap 5.3.8.
- **Documentação:** Bootstrap 5.3.
- **Recursos planejados:** container, row/col, Flex utilities, Navbar/Offcanvas, Cards, Modal, Forms, Buttons, Badges e componentes de feedback.
- **Estratégia:** durante atividades que exigirem prova de instalação via NPM, os arquivos locais instalados serão usados conforme instrução da disciplina. No deploy estático final, a forma de entrega será ajustada ao procedimento pedido pelo professor.

## 3. API Pública — Google Books API v1

### Endpoint de busca

`GET https://www.googleapis.com/books/v1/volumes`

### Consulta por ISBN

Parâmetro:

`q=isbn:{isbn}`

Exemplo conceitual:

`GET https://www.googleapis.com/books/v1/volumes?q=isbn:9788535902778`

### Campos consumidos

- `items[0].volumeInfo.title`
- `items[0].volumeInfo.authors`
- `items[0].volumeInfo.imageLinks.thumbnail`

### Tratamento

- `totalItems === 0` ou ausência de `items`: informar que o livro não foi encontrado;
- ausência de capa: usar fallback local;
- falha HTTP/rede: exibir erro sem apagar o formulário;
- dados retornados são sugestões editáveis antes de salvar.

### Identificação da aplicação

A implementação seguirá a orientação vigente da documentação oficial da API. Nenhuma chave secreta será versionada no GitHub.

## 4. API Fake — JSON Server

### Base local

`http://localhost:3000`

### Recursos

- `/livros`
- `/avaliacoes`

### Contratos mínimos

#### Livro

```json
{
  "id": "uuid-ou-id-gerado",
  "isbn": "9780000000000",
  "titulo": "Título do livro",
  "autor": "Autor",
  "capa_url": "https://...",
  "status_leitura": "quero-ler",
  "data_criacao": "2026-09-27T00:00:00.000Z",
  "data_atualizacao": "2026-09-27T00:00:00.000Z"
}
```

#### Avaliação

```json
{
  "id": "uuid-ou-id-gerado",
  "livro_id": "id-do-livro",
  "nota_estrelas": 5,
  "resenha": "Comentário do leitor.",
  "data_avaliacao": "2026-09-27T00:00:00.000Z"
}
```

## 5. Web Storage

Chaves sugeridas:

- `booktracker.filters.status`
- `booktracker.filters.search` — opcional;
- `booktracker.sort`

Nenhum dado sensível será armazenado no Web Storage.

## 6. Convenções

### Nomes

- arquivos: dashed-case;
- variáveis e funções JS: camelCase;
- classes CSS próprias: kebab-case;
- constantes JS: UPPER_SNAKE_CASE quando realmente constantes;
- IDs HTML: kebab-case.

### Git

Commits curtos e específicos, por exemplo:

- `docs: ajusta arquitetura do projeto`
- `feat: cria grid responsivo da estante`
- `feat: adiciona formulário de livro`
- `fix: corrige validação de isbn`

### JavaScript

- preferir `const` e `let`;
- evitar variáveis globais;
- usar `async/await` para chamadas assíncronas;
- tratar erros com `try/catch`;
- separar acesso a API, validação, storage e renderização;
- evitar HTML grande concatenado sem necessidade;
- preservar separação clara entre dados e interface.

## 7. Validações Previstas

### ISBN

1. remover espaços e hífens;
2. aceitar somente dígitos;
3. permitir comprimento 10 ou 13;
4. verificar duplicidade na API fake.

Regex inicial de formato:

`^(?:\d{10}|\d{13})$`

### Livro

- título obrigatório;
- autor obrigatório;
- status obrigatório;
- limites de comprimento no HTML e JS.

### Avaliação

- nota: inteiro 1–5;
- resenha: até 1000 caracteres;
- somente para livro com status `lido`.

## 8. Responsividade

Breakpoints serão os do Bootstrap 5.3:

- xs: <576px;
- sm: ≥576px;
- md: ≥768px;
- lg: ≥992px;
- xl: ≥1200px;
- xxl: ≥1400px.

O design será mobile-first.

## 9. Componentes Bootstrap-alvo

Pelo menos estes componentes serão reconhecíveis no protótipo e depois implementados:

1. Navbar/Offcanvas;
2. Card;
3. Modal;
4. Forms/Input Group;
5. Button;
6. Badge;
7. Alert/Toast;
8. Dropdown/Select.

## 10. Design Tokens Oficiais

Os tokens detalhados ficam em [architecture.md](architecture.md). Resumo:

- Primary: `#3F5144`
- Accent: `#C47A4A`
- Background: `#F5F3EE`
- Surface: `#FFFFFF`
- Text: `#20231F`
- Títulos: DM Serif Display;
- Corpo/UI: Inter.

Esses valores devem ser replicados no Design System do Stitch e posteriormente nas variáveis Sass/CSS do projeto.

## 11. Dependências da Atividade 06

A Atividade 06 exige especificamente a inicialização do NPM e instalação de:

- `jquery` como dependência de produção;
- `uuid` como dependência de produção;
- `gh-pages` como dependência de desenvolvimento.

Essas dependências já fazem parte do repositório atual. Dependências das atividades posteriores serão adicionadas somente quando forem necessárias.

## 12. Deploy

O GitHub Pages hospedará os arquivos estáticos do front-end.

O JSON Server é uma API de desenvolvimento e não é executado pelo GitHub Pages. Antes da Entrega 3, será definido o modo de demonstração/publicação da API fake de acordo com a orientação da disciplina, sem fingir que `localhost:3000` funciona em produção.
