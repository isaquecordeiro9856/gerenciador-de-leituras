# Product Requirements Document (PRD)

## 1. Identificação

- **Autor:** Isaque Cordeiro
- **Projeto:** BookTracker — Gerenciador de Leituras
- **Tipo:** Aplicação web responsiva para gerenciamento de biblioteca pessoal

## 2. Visão do Produto

O **BookTracker** é uma aplicação para leitores organizarem a própria estante digital de forma simples e visual.

O usuário poderá:

- criar uma conta acadêmica de demonstração;
- entrar na aplicação;
- cadastrar livros;
- pesquisar dados de livros por ISBN;
- editar informações de livros já cadastrados;
- controlar o status de leitura;
- consultar detalhes;
- avaliar livros concluídos;
- excluir livros.

O projeto foi mantido propositalmente enxuto para favorecer uma implementação clara e demonstrável dos conteúdos da disciplina.

## 3. Problema

Leitores frequentemente distribuem informações de leitura entre listas, aplicativos de notas e memória. Isso dificulta acompanhar quais livros desejam ler, quais estão em andamento, quais foram concluídos e qual foi a avaliação de cada obra.

O BookTracker centraliza essas informações em uma estante digital pessoal.

## 4. Público-alvo

Leitores jovens e adultos que desejam organizar suas leituras em uma interface simples, responsiva e sem a complexidade de uma rede social literária.

## 5. Ator

### Leitor

Usuário cadastrado que acessa a própria estante para consultar, cadastrar, editar, excluir e avaliar livros.

> A autenticação faz parte do fluxo acadêmico do protótipo e será simulada com JSON Server. Não deve ser apresentada como autenticação segura de produção.

## 6. Escopo Funcional

A aplicação terá cinco páginas HTML principais.

### 6.1 Login — `login.html`

- e-mail;
- senha;
- validações;
- acesso ao Cadastro;
- entrada na aplicação após credenciais válidas.

### 6.2 Cadastro — `cadastro.html`

- nome;
- e-mail;
- senha;
- confirmação de senha;
- validações;
- criação de usuário de demonstração.

### 6.3 Estante — `index.html`

- listagem de livros em cards;
- busca por título/autor;
- filtros por status;
- ordenação;
- estado vazio;
- acesso ao formulário de livro;
- acesso aos detalhes.

### 6.4 Adicionar/Editar Livro — `livro-form.html`

A mesma página será reutilizada em dois modos.

**Modo Adicionar**
- campos inicialmente vazios;
- busca por ISBN;
- preenchimento automático quando houver resultado;
- preenchimento manual como fallback;
- seleção do status;
- ação `Salvar livro`.

**Modo Editar**
- dados do livro pré-carregados;
- possibilidade de alterar ISBN, título, autor(es) e status;
- nova busca por ISBN pode atualizar os metadados/capa;
- ação `Salvar alterações`;
- cancelar retorna aos Detalhes sem modificar o livro.

> Não existem páginas separadas M4B/D4B. M4/D4 representam o mesmo formulário nos dois modos.

### 6.5 Detalhes do Livro — `livro.html`

- capa;
- título;
- autor(es);
- ISBN;
- status;
- ação Editar;
- ação Excluir;
- avaliação de livros concluídos;
- confirmação de exclusão.

## 7. Regras de Negócio

### Conta e sessão

- **RN01 — Cadastro:** nome, e-mail, senha e confirmação são obrigatórios.
- **RN02 — E-mail único:** não podem existir dois usuários com o mesmo e-mail.
- **RN03 — Senha acadêmica:** mínimo de 8 caracteres, contendo letras e números.
- **RN04 — Confirmação:** senha e confirmação devem coincidir.
- **RN05 — Login:** e-mail e senha devem corresponder a um usuário existente na API fake.
- **RN06 — Sessão:** a estante deve ser limitada ao usuário da sessão acadêmica.

### Livro

- **RN07 — Campos obrigatórios:** ISBN, título, autor(es) e status.
- **RN08 — Status permitidos:** `quero-ler`, `lendo` ou `lido`.
- **RN09 — ISBN:** após normalização, deve possuir 10 ou 13 dígitos.
- **RN10 — ISBN único por usuário:** o mesmo ISBN não pode ser cadastrado duas vezes na estante do mesmo usuário.
- **RN11 — Google Books:** a busca por ISBN pode sugerir título, autor(es) e capa.
- **RN12 — Fallback manual:** ausência de resultado ou falha da API não impede o preenchimento manual.
- **RN13 — Capa:** a capa vem da Google Books API ou de um fallback visual local; não existe upload manual.
- **RN14 — Edição reutiliza formulário:** Adicionar e Editar usam a mesma página/formulário.
- **RN15 — Cancelamento de edição:** cancelar uma edição não persiste alterações e retorna ao Detalhes.
- **RN16 — Salvamento de edição:** salvar alterações retorna ao Detalhes atualizado.

### Avaliação

- **RN17 — Disponibilidade:** somente livros com status `lido` podem possuir avaliação.
- **RN18 — Nota:** inteiro de 1 a 5.
- **RN19 — Avaliação única:** cada livro possui no máximo uma avaliação.
- **RN20 — Local da avaliação:** estrelas e resenha pertencem à seção `Minha avaliação` dos Detalhes, não ao formulário de livro.
- **RN21 — Estrelas nos cards:** `lido` com avaliação pode exibir estrelas; `lido` sem avaliação mostra `Ainda não avaliado`; `lendo` e `quero-ler` não mostram estrelas falsas.
- **RN22 — Mudança de status:** se um livro avaliado deixar de ser `lido`, a aplicação deve solicitar confirmação antes de remover a avaliação incompatível.

### Persistência e feedback

- **RN23 — Persistência:** usuários, livros e avaliações ficam na API fake baseada em JSON Server.
- **RN24 — Preferências:** filtro e ordenação podem ser mantidos no Web Storage.
- **RN25 — Falhas:** erros de rede/API devem gerar feedback legível sem apagar os dados já digitados.
- **RN26 — Feedback:** operações de autenticação, cadastro, edição e exclusão devem indicar sucesso ou erro.

## 8. Histórias de Usuário

### HU01 — Criar conta

**Como** leitor,  
**quero** criar uma conta,  
**para** manter minha estante separada.

Critérios:

- [ ] nome, e-mail, senha e confirmação são validados;
- [ ] e-mail duplicado é recusado;
- [ ] senha segue a regra mínima;
- [ ] cadastro válido permite continuar para a aplicação.

### HU02 — Entrar

**Como** leitor,  
**quero** entrar com minhas credenciais,  
**para** acessar minha estante.

Critérios:

- [ ] campos obrigatórios são validados;
- [ ] credenciais inválidas geram mensagem clara;
- [ ] login válido direciona para a Estante.

### HU03 — Organizar a Estante

**Como** leitor,  
**quero** buscar, filtrar e ordenar meus livros,  
**para** encontrar rapidamente uma obra.

Critérios:

- [ ] somente livros do usuário atual são exibidos;
- [ ] filtros Todos, Quero ler, Lendo e Lido;
- [ ] busca por título/autor;
- [ ] ordenação por mais recentes e Título A–Z;
- [ ] estado vazio possui CTA para o primeiro livro.

### HU04 — Buscar por ISBN

**Como** leitor,  
**quero** consultar um ISBN,  
**para** preencher rapidamente os dados do livro.

Critérios:

- [ ] valida ISBN-10 ou ISBN-13;
- [ ] consulta Google Books API;
- [ ] sugere título, autoria e capa quando encontrado;
- [ ] mantém preenchimento manual disponível;
- [ ] falhas não apagam o formulário.

### HU05 — Adicionar livro

**Como** leitor,  
**quero** cadastrar um livro,  
**para** incluí-lo na minha estante.

Critérios:

- [ ] ISBN, título, autor(es) e status são obrigatórios;
- [ ] duplicidade por usuário é recusada;
- [ ] dados válidos são persistidos;
- [ ] sucesso gera feedback visual.

### HU06 — Editar livro e status

**Como** leitor,  
**quero** editar os dados e o status de um livro existente,  
**para** manter minha estante atualizada.

Critérios:

- [ ] o formulário abre com os dados atuais preenchidos;
- [ ] ISBN, título, autor(es) e status podem ser alterados;
- [ ] nova busca por ISBN pode atualizar título/autoria/capa;
- [ ] `Salvar alterações` persiste e retorna aos Detalhes;
- [ ] `Cancelar` retorna aos Detalhes sem salvar;
- [ ] avaliação/resenha não aparecem nesse formulário.

### HU07 — Consultar detalhes

**Como** leitor,  
**quero** abrir os detalhes de um livro,  
**para** consultar seus dados e ações.

Critérios:

- [ ] apresenta capa, título, autor, ISBN e status;
- [ ] oferece Editar e Excluir;
- [ ] funciona em Mobile e Desktop;
- [ ] exclusão exige confirmação.

### HU08 — Avaliar leitura concluída

**Como** leitor,  
**quero** avaliar um livro concluído,  
**para** registrar minha opinião.

Critérios:

- [ ] avaliação somente para status Lido;
- [ ] nota de 1 a 5 estrelas;
- [ ] no máximo uma avaliação por livro;
- [ ] resenha pode ser editada;
- [ ] livros não concluídos mostram que a avaliação está indisponível.

### HU09 — Excluir livro

**Como** leitor,  
**quero** remover um livro,  
**para** manter a estante atualizada.

Critérios:

- [ ] exclusão exige confirmação;
- [ ] cancelar não modifica dados;
- [ ] confirmar remove o livro;
- [ ] avaliação associada também é removida, quando existir.

## 9. Estados de Interface Obrigatórios

O protótipo documenta:

- Login;
- Cadastro;
- Estante populada;
- Estante vazia;
- Offcanvas mobile;
- formulário Adicionar;
- formulário Editar usando a mesma M4/D4;
- estados de validação/API;
- Detalhes Lido;
- Detalhes Não Concluído;
- Modal de Exclusão;
- feedback de sucesso/erro;
- loading/skeleton.

Esses estados não devem ser transformados automaticamente em páginas HTML separadas.

## 10. Fora do Escopo

Não fazem parte desta versão:

- perfil/avatar;
- OAuth/login social;
- recuperação real de senha;
- backend de autenticação de produção;
- coleções personalizadas;
- citações/notas pessoais;
- diário de leitura;
- metas, streaks ou gamificação;
- progresso em páginas/porcentagem;
- número de páginas;
- formato do livro;
- editora;
- ano de edição/data de publicação como dados do domínio;
- upload manual de capa;
- rede social;
- recomendações;
- dashboard/estatísticas;
- pagamentos;
- leitura de e-books.

## 11. Critérios de Sucesso

O projeto será considerado funcional quando:

- as cinco páginas principais estiverem implementadas e responsivas;
- Login/Cadastro, Estante, Adicionar/Editar, Detalhes, Avaliação e Exclusão estiverem navegáveis;
- o mesmo formulário atender corretamente Adicionar e Editar;
- livros estiverem associados ao usuário da sessão acadêmica;
- usuários, livros e avaliações forem persistidos/consultados na API fake;
- Google Books API funcionar com tratamento de erros;
- os requisitos técnicos da disciplina estiverem comprovados no código e nas evidências.
