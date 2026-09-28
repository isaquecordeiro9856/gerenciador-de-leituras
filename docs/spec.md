# Especificação Técnica

Este documento registra o contrato técnico oficial do **BookTracker**. O escopo funcional está em [prd.md](prd.md) e as decisões de arquitetura/design em [architecture.md](architecture.md).

## 1. Stack Oficial

| Tecnologia | Versão/linha | Uso |
|---|---|---|
| HTML | HTML5 | Estrutura semântica. |
| CSS | CSS3 | Estilos próprios e responsividade. |
| Bootstrap | **5.3.8** | Grid/Flexbox, responsividade e componentes. |
| JavaScript | ES6+ | Lógica, DOM, validações e requisições. |
| Sass | a definir na instalação | Variáveis, mixins, funções e modularização. |
| jQuery | versão do `package.json` | Requisito de manipulação/interatividade da disciplina. |
| Biblioteca/plugin complementar | a definir | Atendimento ao ID 21. |
| JSON Server | a definir na instalação | API fake para usuários, livros e avaliações. |
| Google Books API | **v1** | Busca por ISBN. |
| Node.js | linha LTS | Ambiente. |
| NPM | versão fornecida pelo Node | Pacotes. |
| GitHub Pages | serviço | Hospedagem estática final. |

> Tailwind CSS não será utilizado.

## 2. Páginas Reais

- `login.html`
- `cadastro.html`
- `index.html`
- `livro-form.html`
- `livro.html`

Os demais frames do Stitch representam estados de interface, não páginas HTML independentes.

## 3. Bootstrap

Versão oficial: **5.3.8**.

Componentes-alvo:

- Navbar;
- Offcanvas;
- Card;
- Modal;
- Forms;
- Input Group;
- Button;
- Badge;
- Alert/Toast;
- Select/Dropdown.

Durante atividades que exigirem instalação local via NPM, usar os arquivos locais conforme instrução do professor. O formato final de entrega estática será ajustado à etapa de deploy.

## 4. API Fake — JSON Server

Base local:

`http://localhost:3000`

Recursos:

- `/usuarios`
- `/livros`
- `/avaliacoes`

### Usuário

```json
{
  "id": "uuid-ou-id-gerado",
  "nome": "Leitor Exemplo",
  "email": "leitor@example.test",
  "senha": "senha-ficticia-de-demonstracao",
  "data_criacao": "2026-09-27T00:00:00.000Z"
}
```

> As credenciais são exclusivamente fictícias. O JSON Server não transforma esse contrato em autenticação segura de produção.

### Livro

```json
{
  "id": "uuid-ou-id-gerado",
  "usuario_id": "id-do-usuario",
  "isbn": "9780000000000",
  "titulo": "Título do livro",
  "autor": "Autor",
  "capa_url": "https://...",
  "status_leitura": "quero-ler",
  "data_criacao": "2026-09-27T00:00:00.000Z",
  "data_atualizacao": "2026-09-27T00:00:00.000Z"
}
```

### Avaliação

```json
{
  "id": "uuid-ou-id-gerado",
  "livro_id": "id-do-livro",
  "nota_estrelas": 5,
  "resenha": "Comentário do leitor.",
  "data_avaliacao": "2026-09-27T00:00:00.000Z"
}
```

## 5. Contratos de Autenticação Acadêmica

### Cadastro

Fluxo conceitual:

1. validar campos;
2. `GET /usuarios?email={email}`;
3. se existir usuário, rejeitar;
4. senão, `POST /usuarios`;
5. iniciar sessão acadêmica ou direcionar para Login.

### Login

Fluxo conceitual:

1. validar e-mail/senha;
2. localizar usuário por e-mail;
3. comparar credenciais no ambiente de demonstração;
4. armazenar apenas `userId` da sessão;
5. redirecionar para Estante.

### Sessão

Usar preferencialmente:

`sessionStorage["booktracker.session.userId"]`

Nunca armazenar senha em Web Storage.

Páginas da estante/livro devem redirecionar para Login quando não houver sessão.

## 6. Google Books API v1

Endpoint:

`GET https://www.googleapis.com/books/v1/volumes?q=isbn:{isbn}`

Campos consumidos:

- `items[0].volumeInfo.title`;
- `items[0].volumeInfo.authors`;
- `items[0].volumeInfo.imageLinks.thumbnail`.

Tratamento:

- nenhum resultado → informar e manter preenchimento manual;
- sem capa → fallback local;
- falha HTTP/rede → feedback sem apagar dados;
- resultado → dados continuam editáveis antes de salvar.

Nenhuma chave secreta deve ser versionada.

## 7. Web Storage

### Sessão

- `booktracker.session.userId` → `sessionStorage`.

### Preferências

- `booktracker.filters.status`;
- `booktracker.sort`;
- busca textual, se adotada.

Preferências não contêm credenciais.

## 8. Validações

### Cadastro de usuário

- nome obrigatório;
- e-mail obrigatório e formato válido;
- e-mail único;
- senha: mínimo 8 caracteres, contendo letras e números;
- confirmação idêntica à senha.

### Login

- e-mail obrigatório;
- senha obrigatória;
- credenciais inválidas → mensagem genérica e legível.

### ISBN

1. remover espaços/hífens;
2. aceitar somente dígitos;
3. 10 ou 13 dígitos;
4. verificar duplicidade para o mesmo `usuario_id`.

Regex de formato:

`^(?:\d{10}|\d{13})$`

### Livro

- título obrigatório;
- autor obrigatório;
- status obrigatório.

### Avaliação

- somente para `lido`;
- nota inteira 1–5;
- uma avaliação por livro;
- resenha até 1000 caracteres.

## 9. Regra de Estrelas

- `lido` + avaliação → mostrar nota correspondente;
- `lido` sem avaliação → mostrar “Ainda não avaliado”;
- `lendo` → não mostrar estrelas;
- `quero-ler` → não mostrar estrelas.

Não exibir estrelas fictícias.

## 10. Responsividade

Breakpoints Bootstrap 5.3:

- xs: <576px;
- sm: ≥576px;
- md: ≥768px;
- lg: ≥992px;
- xl: ≥1200px;
- xxl: ≥1400px.

Estratégia mobile-first.

## 11. Design Tokens

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
- Títulos: DM Serif Display
- Corpo/UI: Inter

## 12. Acessibilidade — Critérios para o Código

O protótipo orienta o design, mas a implementação ainda deve comprovar:

- `label for/id`;
- feedback associado a campos;
- foco visível;
- teclado;
- contraste suficiente;
- alt text;
- modal com foco correto;
- status não apenas por cor;
- ARIA apenas quando semanticamente necessário.

Não considerar atributos/classes como existentes até o código ser implementado e auditado.

## 13. Contrato de Interface Aprovado

### Design System

- APPROVED DESIGN SYSTEM

### Mobile

- M0A Login
- M0B Cadastro
- M1 Estante
- M2 Estante Vazia
- M3 Offcanvas
- M4 Adicionar/Editar
- M5 Validação/API
- M6 Detalhes Lido
- M7 Detalhes Não Concluído
- M8 Exclusão
- M9 Feedback/Loading

### Desktop

- D0A Login
- D0B Cadastro
- D1 Estante
- D2 Estante Vazia
- D4 Adicionar/Editar
- D5 Validação/API
- D6 Detalhes Lido
- D7 Detalhes Não Concluído
- D8 Exclusão

## 14. Itens Fora do Escopo

Não criar persistência/endpoints para:

- perfil/avatar;
- OAuth/login social;
- coleções;
- citações/notas/diário;
- metas/streaks;
- progresso/páginas;
- formato/edição/publicação;
- upload de capa;
- recursos sociais;
- recomendações;
- dashboard/estatísticas.

## 15. Deploy

GitHub Pages hospeda arquivos estáticos.

O JSON Server não roda dentro do GitHub Pages. Antes da Entrega 3 será definido, conforme orientação da disciplina, como demonstrar/hospedar a API fake sem fingir que `localhost:3000` funciona em produção.
