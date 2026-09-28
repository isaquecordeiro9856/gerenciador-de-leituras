# Product Requirements Document (PRD)

## 1. Identificação

- **Autor:** Isaque Cordeiro
- **Projeto:** BookTracker — Gerenciador de Leituras
- **Tipo:** Aplicação web responsiva para gerenciamento de biblioteca pessoal

## 2. Visão do Produto

O **BookTracker** permite que um leitor crie uma conta, acesse sua própria estante digital, cadastre livros, consulte metadados por ISBN, acompanhe o status de leitura e registre uma avaliação após concluir uma obra.

O escopo foi mantido enxuto para priorizar os requisitos da disciplina: responsividade, Framework CSS, formulários, validações, Web Storage, bibliotecas JavaScript, API fake, API pública, manipulação dinâmica do DOM e boas práticas de Git/NPM.

## 3. Problema

Leitores frequentemente espalham informações de leitura entre anotações, listas e memória. O BookTracker centraliza:

- livros que deseja ler;
- livros em andamento;
- livros concluídos;
- avaliações pessoais;
- uma estante separada por usuário.

## 4. Público-alvo

Leitores jovens e adultos que desejam organizar suas leituras em uma interface simples, sem a complexidade de uma rede social literária.

## 5. Ator

### Leitor

Usuário cadastrado que acessa a própria estante para consultar, cadastrar, editar, excluir e avaliar livros.

> A autenticação é parte do fluxo acadêmico do projeto, mas será implementada sobre a API fake da disciplina. Ela não deve ser apresentada como autenticação segura de produção.

## 6. Escopo Funcional

A aplicação terá cinco páginas HTML principais:

1. **Login (`login.html`)**
   - entrada por e-mail e senha;
   - validação;
   - acesso ao cadastro.

2. **Cadastro (`cadastro.html`)**
   - nome;
   - e-mail;
   - senha;
   - confirmação de senha;
   - validações;
   - criação do usuário na API fake.

3. **Estante (`index.html`)**
   - livros do usuário autenticado;
   - busca;
   - filtros por status;
   - ordenação;
   - acesso a cadastro e detalhes;
   - estado vazio.

4. **Cadastro/Edição de Livro (`livro-form.html`)**
   - consulta de ISBN pela Google Books API;
   - preenchimento automático;
   - fallback manual;
   - validações;
   - criação e edição.

5. **Detalhes (`livro.html`)**
   - capa, título, autores, ISBN e status;
   - edição e exclusão;
   - avaliação para livros concluídos;
   - confirmação de exclusão.

## 7. Regras de Negócio

- **RN01 — Conta:** nome, e-mail e senha são obrigatórios no cadastro.
- **RN02 — E-mail único:** não podem existir dois usuários com o mesmo e-mail.
- **RN03 — Senha acadêmica:** a senha deve ter no mínimo 8 caracteres e conter letras e números.
- **RN04 — Confirmação de senha:** senha e confirmação devem coincidir.
- **RN05 — Login:** e-mail e senha devem corresponder a um usuário existente na API fake.
- **RN06 — Sessão:** o usuário autenticado é identificado durante a sessão para limitar a estante aos próprios livros.
- **RN07 — Campos do livro:** ISBN, título, autor(es) e status são obrigatórios.
- **RN08 — Status:** `quero-ler`, `lendo` ou `lido`.
- **RN09 — ISBN:** após normalização, deve conter somente 10 ou 13 dígitos.
- **RN10 — ISBN único por usuário:** o mesmo usuário não pode cadastrar duas vezes o mesmo ISBN.
- **RN11 — Google Books:** a consulta por ISBN pode sugerir título, autoria e capa.
- **RN12 — Fallback manual:** falha ou ausência de resultado da API não impede o preenchimento manual.
- **RN13 — Avaliação:** somente livros com status `lido` podem possuir avaliação.
- **RN14 — Nota:** inteiro entre 1 e 5.
- **RN15 — Avaliação única:** cada livro possui no máximo uma avaliação.
- **RN16 — Exibição de estrelas:** livros `lido` com avaliação podem exibir estrelas; livros `lendo` ou `quero-ler` não exibem avaliação falsa.
- **RN17 — Exclusão:** excluir um livro remove também sua avaliação associada, quando existir.
- **RN18 — Mudança de status:** se um livro avaliado deixar de ser `lido`, a aplicação deve solicitar confirmação antes de remover a avaliação incompatível.
- **RN19 — Persistência:** usuários, livros e avaliações ficam na API fake baseada em JSON Server.
- **RN20 — Preferências:** filtro e ordenação podem ser persistidos no `localStorage`.
- **RN21 — Falhas:** erros de API/rede devem gerar feedback sem apagar os dados já digitados.
- **RN22 — Feedback:** cadastro, edição, exclusão e autenticação devem apresentar retorno visual claro.

## 8. Histórias de Usuário

### HU01 — Criar conta
Como leitor, quero criar uma conta para manter minha estante separada.

Critérios:
- [ ] Nome, e-mail, senha e confirmação são validados.
- [ ] E-mail duplicado é recusado.
- [ ] Senha segue a regra mínima definida.
- [ ] Cadastro válido cria o usuário e permite seguir para a aplicação.

### HU02 — Entrar
Como leitor, quero entrar com e-mail e senha para acessar minha estante.

Critérios:
- [ ] Campos obrigatórios são validados.
- [ ] Credenciais inválidas geram mensagem clara.
- [ ] Login válido direciona para a estante.

### HU03 — Organizar a estante
Como leitor, quero buscar, filtrar e ordenar meus livros.

Critérios:
- [ ] Só os livros do usuário atual são exibidos.
- [ ] Filtros: Todos, Quero ler, Lendo, Lido.
- [ ] Busca por título/autor.
- [ ] Ordenação por inclusão mais recente e título A–Z.
- [ ] Estado vazio possui CTA para adicionar o primeiro livro.

### HU04 — Buscar livro por ISBN
Como leitor, quero consultar um ISBN para reduzir digitação.

Critérios:
- [ ] Valida ISBN-10 ou ISBN-13.
- [ ] Consulta Google Books API.
- [ ] Preenche/sugere título, autor e capa quando encontrado.
- [ ] Permite preenchimento manual quando não encontrado.
- [ ] Trata falhas sem apagar o formulário.

### HU05 — Cadastrar e editar livro
Como leitor, quero cadastrar e editar livros da minha estante.

Critérios:
- [ ] Campos obrigatórios são validados.
- [ ] ISBN duplicado para o mesmo usuário é recusado.
- [ ] Status é selecionável.
- [ ] Erros ficam próximos aos campos.
- [ ] Dados válidos são persistidos na API fake.

### HU06 — Consultar detalhes
Como leitor, quero abrir um livro para ver seus dados e ações.

Critérios:
- [ ] Capa, título, autor, ISBN e status são exibidos.
- [ ] Há ações Editar e Excluir.
- [ ] Exclusão exige modal de confirmação.
- [ ] Funciona em Mobile e Desktop.

### HU07 — Avaliar leitura concluída
Como leitor, quero avaliar um livro concluído.

Critérios:
- [ ] Avaliação somente para status Lido.
- [ ] Nota de 1 a 5.
- [ ] Uma avaliação por livro.
- [ ] Resenha pode ser editada.
- [ ] Livros não concluídos mostram que a avaliação ainda não está disponível.

## 9. Estados de Interface Obrigatórios

O protótipo final documenta, sem necessariamente criar uma página HTML para cada estado:

- Login;
- Cadastro;
- Estante populada;
- Estante vazia;
- Offcanvas mobile;
- Formulário normal;
- Formulário com validação/API;
- Detalhes Lido;
- Detalhes não concluído;
- Modal de exclusão;
- feedback de sucesso/erro;
- loading/skeleton.

## 10. Fora do Escopo

Não fazem parte desta versão:

- perfil/avatar;
- login social/OAuth;
- recuperação real de senha;
- backend de autenticação de produção;
- coleções personalizadas;
- citações/notas;
- diário de leitura;
- metas, streaks e gamificação;
- progresso por páginas/porcentagem;
- número de páginas;
- formato/edição/data de publicação como domínio;
- upload manual de capa;
- rede social, seguidores e comentários públicos;
- recomendações;
- dashboard/estatísticas;
- pagamentos;
- leitura de e-books.

## 11. Critérios de Sucesso

O projeto será considerado funcional quando:

- as cinco páginas principais estiverem implementadas e responsivas;
- autenticação acadêmica, estante, cadastro, detalhe, edição e avaliação estiverem navegáveis;
- livros estiverem isolados por usuário;
- usuários, livros e avaliações forem persistidos/consultados pela API fake;
- Google Books API funcionar com tratamento de erros;
- os requisitos técnicos e indicadores da disciplina estiverem demonstrados no código e nas evidências.
