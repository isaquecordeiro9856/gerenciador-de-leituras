# Product Requirements Document (PRD)

## Identificação
**Autor:** Isaque Cordeiro
**Projeto:** BookTracker - Gerenciador de Leituras

## Descrição
O BookTracker é uma aplicação web responsiva voltada para o gerenciamento de uma biblioteca pessoal. O sistema resolve o problema da desorganização no hábito de leitura, permitindo que o usuário cadastre livros, organize-os por status (Quero Ler, Lendo, Lido) e registre avaliações das obras finalizadas.

## Público-Alvo
Leitores amadores e ávidos (jovens e adultos) que desejam organizar sua biblioteca pessoal, acompanhar o progresso das leituras em andamento e registrar suas impressões sobre as obras concluídas.

## Atores do Sistema
* **Leitor:** Pessoa que utiliza a aplicação para gerenciar seus próprios livros e leituras.
* **Usuário:** Pessoa que possui conta na aplicação, com login e senha, para acessar sua estante pessoal de livros.

## Regras de Negócio
* **RN01:** Todo livro cadastrado deve possuir obrigatoriamente ISBN, título, autor e status de leitura.
* **RN02:** O status de leitura aceita apenas os valores: `Quero Ler`, `Lendo` ou `Lido`.
* **RN03:** O campo ISBN deve conter entre 10 e 13 dígitos numéricos (com ou sem hífen) e não pode estar duplicado na estante do usuário.
* **RN04:** Ao informar um ISBN válido no cadastro, o sistema deve consultar a Google Books API para preencher automaticamente título, autor e capa; se o livro não for encontrado, o usuário poderá preencher os dados manualmente.
* **RN05:** Avaliações (nota e resenha) só podem ser registradas para livros com status `Lido`.
* **RN06:** A nota da avaliação deve ser um número inteiro entre 1 e 5 estrelas.
* **RN07:** Cada livro pode ter no máximo uma avaliação associada.
* **RN08:** Os dados da estante devem ser persistidos na API Fake (JSON Server); preferências de exibição (ex: filtro ativo) devem ser mantidas no Web Storage.
* **RN09:** A exclusão de um livro deve remover também a avaliação a ele associada.
* **RN10:** Todo usuário deve possuir obrigatoriamente nome, e-mail e senha para se cadastrar no sistema.
* **RN11:** O e-mail deve ser único no sistema (não pode haver dois usuários com o mesmo e-mail).
* **RN12:** A senha deve ter no mínimo 6 caracteres.
* **RN13:** O usuário só pode acessar e gerenciar seus próprios livros (cada livro está vinculado a um único usuário).
* **RN14:** Ao cadastrar um livro, o sistema deve associá-lo automaticamente ao usuário logado.
* **RN15:** O usuário deve estar logado para acessar funcionalidades da aplicação (cadastro, edição, exclusão, avaliação).

## Histórias de Usuário (Escopo)

### HU01 - Cadastro de Usuário
* **Como** Leitor,
* **Eu quero** me cadastrar no sistema com nome, e-mail e senha,
* **Para que** eu possa ter minha própria estante de livros pessoal.

**Critérios de Aceitação:**
- [ ] DADO que o usuário está na tela de cadastro, QUANDO informa nome, e-mail e senha válidos, ENTAO o sistema cria sua conta e redireciona para a tela de login.
- [ ] DADO que o e-mail já está cadastrado no sistema, QUANDO o usuário tenta se cadastrar, ENTAO o sistema exibe mensagem de erro: "Este e-mail já está em uso".
- [ ] DADO que a senha tem menos de 6 caracteres, QUANDO o usuário tenta se cadastrar, ENTAO o sistema exibe mensagem de erro: "A senha deve ter no mínimo 6 caracteres".
- [ ] DADO que o nome ou e-mail estão em branco, QUANDO o usuário tenta se cadastrar, ENTAO o sistema exibe mensagem de erro: "Preencha todos os campos obrigatórios".

### HU02 - Login de Usuário
* **Como** Leitor,
* **Eu quero** fazer login no sistema com e-mail e senha,
* **Para que** eu possa acessar minha estante de livros.

**Critérios de Aceitação:**
- [ ] DADO que o usuário está na tela de login, QUANDO informa e-mail e senha corretos, ENTAO o sistema autentica e redireciona para a estante.
- [ ] DADO que o e-mail não está cadastrado, QUANDO o usuário tenta fazer login, ENTAO o sistema exibe mensagem de erro: "E-mail ou senha incorretos".
- [ ] DADO que a senha está incorreta, QUANDO o usuário tenta fazer login, ENTAO o sistema exibe mensagem de erro: "E-mail ou senha incorretos".
- [ ] DADO que os campos estão em branco, QUANDO o usuário tenta fazer login, ENTAO o sistema exibe mensagem de erro: "Preencha todos os campos".

### HU03 - Buscar Livro por ISBN
* **Como** Leitor,
* **Eu quero** buscar um livro pelo ISBN (via Google Books API),
* **Para que** o sistema preencha a capa, título e autor automaticamente, poupando meu tempo de digitação.

**Critérios de Aceitação:**
- [ ] DADO que o usuário informou um ISBN válido (10 ou 13 dígitos), QUANDO o sistema consulta a Google Books API, ENTAO os campos título, autor e capa são preenchidos automaticamente.
- [ ] DADO que o ISBN informado não existe na Google Books API, QUANDO o sistema recebe a resposta vazia, ENTAO exibe mensagem: "Livro não encontrado. Preencha os dados manualmente."
- [ ] DADO que o ISBN já está cadastrado na estante do usuário, QUANDO o sistema valida, ENTAO exibe mensagem: "Este livro já está na sua estante".
- [ ] DADO que houve falha de rede, QUANDO o sistema tenta consultar a API, ENTAO exibe mensagem: "Erro de conexão. Verifique sua internet."

### HU04 - Visualizar Coleção em Cards
* **Como** Leitor,
* **Eu quero** visualizar minha coleção de livros em formato de cards,
* **Para que** eu possa identificar rapidamente as obras pela capa e pelo status.

**Critérios de Aceitação:**
- [ ] DADO que o usuário possui livros cadastrados, QUANDO acessa a estante, ENTAO visualiza cards com capa, título e status de leitura.
- [ ] DADO que o usuário possui livros em diferentes status, QUANDO visualiza a estante, ENTAO os cards são exibidos com cores diferentes para cada status (Quero Ler, Lendo, Lido).
- [ ] DADO que o usuário não possui livros, QUANDO acessa a estante, ENTAO exibe mensagem: "Sua estante está vazia. Comece cadastrando um livro!"
- [ ] DADO que existem livros cadastrados, QUANDO o usuário aplica filtro por status, ENTAO apenas os livros do status selecionado são exibidos.

### HU05 - Adicionar Avaliação
* **Como** Leitor,
* **Eu quero** adicionar uma nota e uma resenha aos livros com status "Lido",
* **Para que** eu possa manter um histórico do que achei de cada obra.

**Critérios de Aceitação:**
- [ ] DADO que o livro possui status "Lido", QUANDO o usuário preenche nota (1-5) e resenha, ENTAO a avaliação é salva associada ao livro.
- [ ] DADO que o livro possui status diferente de "Lido", QUANDO o usuário tenta avaliar, ENTAO o botão de avaliação fica desabilitado.
- [ ] DADO que o livro já possui avaliação, QUANDO o usuário tenta adicionar outra, ENTAO exibe mensagem: "Este livro já possui avaliação. Você pode editá-la."
- [ ] DADO que a nota está fora do intervalo 1-5, QUANDO o usuário tenta salvar, ENTAO exibe mensagem de erro: "A nota deve ser entre 1 e 5 estrelas".

### HU06 - Editar ou Excluir Livro
* **Como** Leitor,
* **Eu quero** editar o status da leitura ou excluir um livro da minha estante,
* **Para que** minha coleção virtual reflita a realidade.

**Critérios de Aceitação:**
- [ ] DADO que o usuário seleciona um livro, QUANDO altera o status de leitura, ENTAO a mudança é refletida imediatamente na estante.
- [ ] DADO que o usuário deseja excluir um livro, QUANDO confirma a exclusão, ENTAO o livro e sua avaliação associada são removidos do sistema.
- [ ] DADO que o usuário deseja excluir um livro, QUANDO clica em exibir, ENTAO o sistema exibe modal de confirmação: "Tem certeza que deseja excluir este livro?"
- [ ] DADO que o usuário edita um livro com avaliação, QUANDO altera o status para "Quero Ler" ou "Lendo", ENTAO a avaliação associada é removida automaticamente.