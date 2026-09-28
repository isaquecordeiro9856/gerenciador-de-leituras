# Especificação Técnica — BookTracker

Este documento registra os contratos técnicos oficiais do **BookTracker**. O escopo funcional está em [prd.md](prd.md) e as decisões de arquitetura em [architecture.md](architecture.md).

## 1. Stack Oficial

| Tecnologia | Versão/linha | Uso |
|---|---|---|
| HTML | HTML5 | Estrutura semântica. |
| CSS | CSS3 | Estilos próprios. |
| Bootstrap | **5.3.8** | Framework CSS principal. |
| JavaScript | ES6+ | Lógica, DOM, validações e requisições assíncronas. |
| Sass | definida na instalação | Tokens, mixins, funções e organização do CSS. |
| jQuery | versão do package.json | Requisito da disciplina. |
| Biblioteca/plugin complementar | a definir | Atendimento ao ID 21. |
| JSON Server | definida na instalação | API fake acadêmica. |
| Google Books API | **v1** | Busca por ISBN. |
| Node.js | linha LTS | Ambiente de desenvolvimento. |
| NPM | versão fornecida pelo Node | Dependências. |
| GitHub Pages | serviço | Publicação estática posterior. |

Tailwind CSS não será utilizado.

## 2. Páginas Reais

A implementação terá cinco documentos HTML principais:

- login.html
- cadastro.html
- index.html
- livro-form.html
- livro.html

Estados como vazio, loading, validação, modal e feedback não devem ser implementados como páginas redundantes.

## 3. Contrato de Adicionar/Editar Livro

livro-form.html é uma única página reutilizada.

### Modo Adicionar

Condição: ausência de identificador de livro.

Comportamento:

- campos vazios;
- título da interface “Adicionar livro”;
- botão principal “Salvar livro”;
- sucesso retorna para a Estante com feedback.

### Modo Editar

Condição: identificador do livro informado, por exemplo livro-form.html?id={livroId}.

Comportamento:

1. verificar sessão;
2. carregar o livro;
3. confirmar que usuario_id corresponde ao usuário atual;
4. preencher ISBN, título, autor(es), status e capa;
5. permitir alterações;
6. “Salvar alterações” usa PATCH;
7. sucesso retorna ao Detalhes atualizado;
8. “Cancelar” retorna ao Detalhes sem persistir.

Não criar M4B, D4B ou outra página de edição.

### Avaliação

O formulário de livro não contém estrelas, resenha ou notas pessoais.

A avaliação pertence somente aos Detalhes.

## 4. Bootstrap 5.3

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

Para a 1ª Entrega, o protótipo deve permitir identificar visualmente pelo menos:

1. Navbar/Offcanvas;
2. Card;
3. Modal.

Durante atividades que exigirem Bootstrap via NPM, serão usados os arquivos locais conforme orientação do professor.

## 5. API Fake — JSON Server

Base local planejada: http://localhost:3000

Recursos:

- /usuarios
- /livros
- /avaliacoes

### Contrato de Usuário

Campos:

- id
- nome
- email
- senha
- data_criacao

As credenciais devem ser fictícias. JSON Server não fornece autenticação segura de produção.

### Contrato de Livro

Campos:

- id
- usuario_id
- isbn
- titulo
- autor
- capa_url
- status_leitura
- data_criacao
- data_atualizacao

### Contrato de Avaliação

Campos:

- id
- livro_id
- nota_estrelas
- resenha
- data_avaliacao

## 6. Rotas da API Fake

### Usuários

- GET /usuarios?email={email}
- POST /usuarios
- GET /usuarios/{id}

### Livros

- GET /livros?usuario_id={usuarioId}
- GET /livros/{id}
- GET /livros?usuario_id={usuarioId}&isbn={isbn}
- POST /livros
- PATCH /livros/{id}
- DELETE /livros/{id}

### Avaliações

- GET /avaliacoes?livro_id={livroId}
- POST /avaliacoes
- PATCH /avaliacoes/{id}
- DELETE /avaliacoes/{id}

## 7. Autenticação Acadêmica

### Cadastro

1. validar nome, e-mail e senha;
2. verificar e-mail duplicado;
3. criar usuário na API fake;
4. iniciar sessão acadêmica ou direcionar para Login.

### Login

1. validar campos;
2. localizar usuário pelo e-mail;
3. comparar credenciais no ambiente de demonstração;
4. armazenar somente o userId;
5. redirecionar para Estante.

### Sessão

Usar preferencialmente sessionStorage com a chave:

booktracker.session.userId

Nunca armazenar senha no Web Storage.

## 8. Google Books API v1

Endpoint:

GET https://www.googleapis.com/books/v1/volumes?q=isbn:{isbn}

Campos consumidos:

- items[0].volumeInfo.title
- items[0].volumeInfo.authors
- items[0].volumeInfo.imageLinks.thumbnail

Tratamento:

- nenhum resultado → informar e manter preenchimento manual;
- sem capa → fallback local;
- falha de rede/HTTP → feedback sem apagar campos;
- resultado → dados editáveis antes de salvar.

No modo Editar, uma nova busca por ISBN pode atualizar título, autoria e capa antes do usuário salvar.

Não existe upload manual de capa.

## 9. Web Storage

### Sessão

- booktracker.session.userId em sessionStorage.

### Preferências

Exemplos:

- booktracker.filters.status
- booktracker.sort
- busca textual, se adotada

Nenhuma credencial deve ser persistida no Web Storage.

## 10. Validações

### Cadastro

- nome obrigatório;
- e-mail obrigatório e válido;
- e-mail único;
- senha com no mínimo 8 caracteres, letras e números;
- confirmação igual à senha.

### Login

- e-mail obrigatório;
- senha obrigatória;
- credenciais inválidas → feedback genérico e claro.

### ISBN

1. remover espaços e hífens;
2. aceitar somente dígitos;
3. comprimento 10 ou 13;
4. verificar duplicidade para o mesmo usuário.

Regex de formato: ^(?:\d{10}|\d{13})$

### Livro

- título obrigatório;
- autor(es) obrigatório(s);
- status obrigatório.

### Avaliação

- disponível somente para status lido;
- nota inteira entre 1 e 5;
- uma avaliação por livro;
- resenha até 1000 caracteres.

## 11. Regra de Status e Avaliação

- lido + avaliação → mostrar estrelas correspondentes;
- lido sem avaliação → “Ainda não avaliado”;
- lendo / quero-ler → não mostrar estrelas;
- avaliação não aparece em M4/D4;
- mudar um livro avaliado de lido para outro status exige confirmação antes de remover a avaliação incompatível.

## 12. Navegação do Formulário

### Adicionar

Estante → Adicionar → livro-form.html → Salvar livro → Estante

### Editar

Detalhes → Editar → livro-form.html?id={id} → Salvar alterações → Detalhes

Detalhes → Editar → Cancelar → Detalhes

## 13. Responsividade

Breakpoints Bootstrap 5.3:

- xs: <576px;
- sm: ≥576px;
- md: ≥768px;
- lg: ≥992px;
- xl: ≥1200px;
- xxl: ≥1400px.

Estratégia: mobile-first.

## 14. Design Tokens

- Primary: #3F5144
- Primary dark: #2C3A30
- Accent: #C47A4A
- Background: #F5F3EE
- Surface: #FFFFFF
- Text: #20231F
- Muted: #62685F
- Border: #D9DDD6
- Success: #2F7D4A
- Info: #3F6F8E
- Warning: #A56A22
- Danger: #B4423C
- Títulos: DM Serif Display
- Corpo/UI: Inter

## 15. Acessibilidade — Critérios para Implementação

O protótipo não comprova código acessível por si só. A implementação deverá validar:

- labels corretamente associados;
- mensagens de erro ligadas aos campos;
- navegação por teclado;
- foco visível;
- contraste adequado;
- texto alternativo;
- foco do Modal/Offcanvas;
- status não comunicado somente por cor;
- ARIA apenas quando necessário.

## 16. Inventário Oficial do Protótipo

### Design System

- APPROVED DESIGN SYSTEM

### Mobile

- M0A Login
- M0B Cadastro
- M1 Estante
- M2 Estante Vazia
- M3 Offcanvas
- M4 Adicionar/Editar Livro
- M5 Validação/API
- M6 Detalhes Lido
- M7 Detalhes Não Concluído
- M8 Modal de Exclusão
- M9 Feedback/Loading

### Desktop

- D0A Login
- D0B Cadastro
- D1 Estante
- D2 Estante Vazia
- D4 Adicionar/Editar Livro
- D5 Validação/API
- D6 Detalhes Lido
- D7 Detalhes Não Concluído
- D8 Modal de Exclusão

Não existem M4B/D4B no contrato final.

## 17. Fora do Escopo

Não criar campos, endpoints ou persistência para:

- perfil/avatar;
- OAuth/login social;
- coleções;
- citações/notas pessoais;
- diário;
- metas/streaks;
- progresso/páginas;
- número de páginas;
- formato;
- editora;
- ano/data de edição/publicação;
- upload de capa;
- recursos sociais;
- recomendações;
- dashboard/estatísticas.

## 18. Dependências da Atividade 06

Já registradas:

- jquery;
- uuid;
- gh-pages como dependência de desenvolvimento.

Dependências futuras serão adicionadas somente nas atividades correspondentes.

## 19. Deploy

GitHub Pages hospedará a interface estática.

JSON Server não roda dentro do GitHub Pages. Antes da Entrega 3 será definido, conforme orientação da disciplina, como demonstrar/hospedar a API fake sem tratar localhost:3000 como produção.
