# Product Requirements Document (PRD)

## 1. Identificação

- **Autor:** Isaque Cordeiro
- **Projeto:** BookTracker — Gerenciador de Leituras
- **Tipo:** Aplicação web responsiva para gerenciamento de biblioteca pessoal

## 2. Visão do Produto

O **BookTracker** ajuda leitores a organizar uma biblioteca pessoal digital de forma simples e visual. A aplicação permite cadastrar livros, localizar dados de uma obra pelo ISBN, acompanhar o status da leitura e registrar uma avaliação após a conclusão.

O projeto foi deliberadamente mantido enxuto para priorizar uma implementação correta e demonstrável dos conteúdos da disciplina: layout responsivo, Framework CSS, formulários, validações, Web Storage, bibliotecas JavaScript, API fake, API pública e manipulação dinâmica do DOM.

## 3. Problema

Leitores frequentemente distribuem suas anotações entre listas, aplicativos de notas e memória, dificultando responder perguntas simples como quais livros ainda querem ler, o que estão lendo agora, quais obras concluíram e o que acharam de cada leitura.

O BookTracker centraliza essas informações em uma estante digital acessível pelo navegador.

## 4. Público-alvo

Leitores jovens e adultos que desejam organizar suas leituras sem a complexidade de uma rede social literária ou de um sistema de biblioteca profissional.

## 5. Ator do Sistema

### Leitor

Pessoa que utiliza a aplicação para cadastrar, consultar, organizar, editar e avaliar os livros da própria coleção local do projeto.

> O escopo acadêmico não inclui autenticação de usuários. O foco está nas funcionalidades de front-end e integração exigidas pela disciplina.

## 6. Escopo Funcional

A aplicação terá três páginas HTML principais:

1. **Estante (index.html)**
   - lista de livros em cards;
   - busca textual;
   - filtros por status;
   - ordenação;
   - acesso ao detalhe de cada livro;
   - atalho para cadastrar um novo livro.

2. **Cadastro/Edição (livro-form.html)**
   - busca de livro por ISBN na Google Books API;
   - preenchimento automático quando houver resultado;
   - preenchimento manual como alternativa;
   - validação dos campos;
   - seleção do status de leitura;
   - criação e edição de livros na API fake.

3. **Detalhes (livro.html)**
   - capa, título, autores, ISBN e status;
   - edição e exclusão do livro;
   - cadastro/edição da avaliação para livros concluídos;
   - nota de 1 a 5 estrelas e resenha;
   - modal de confirmação para ações destrutivas.

Além das páginas, o protótipo deverá incluir uma referência visual do Design System e dos principais componentes planejados do Bootstrap.

## 7. Regras de Negócio

- **RN01 — Campos obrigatórios:** todo livro deve possuir ISBN, título, autor(es) e status de leitura.
- **RN02 — Status permitidos:** o status deve ser um entre "quero-ler", "lendo" ou "lido".
- **RN03 — ISBN:** o ISBN deve ser normalizado para conter somente dígitos e possuir 10 ou 13 dígitos.
- **RN04 — ISBN único:** um mesmo ISBN não pode ser cadastrado duas vezes na coleção.
- **RN05 — Busca externa:** ao solicitar busca por ISBN, a aplicação consulta a Google Books API e, quando houver correspondência, sugere título, autor(es) e capa.
- **RN06 — Fallback manual:** se a API pública não encontrar a obra ou estiver indisponível, o leitor poderá continuar o cadastro manualmente.
- **RN07 — Avaliação:** somente livros com status "lido" podem possuir avaliação.
- **RN08 — Nota:** a nota deve ser um número inteiro entre 1 e 5.
- **RN09 — Avaliação única:** cada livro pode possuir no máximo uma avaliação.
- **RN10 — Exclusão:** excluir um livro deve excluir também a avaliação associada, quando existir.
- **RN11 — Mudança de status:** se um livro avaliado deixar o status "lido", a aplicação deve solicitar confirmação antes de remover a avaliação incompatível.
- **RN12 — Persistência principal:** livros e avaliações são persistidos pela API fake baseada em JSON Server.
- **RN13 — Preferências locais:** filtro, ordenação e modo de visualização podem ser persistidos no localStorage.
- **RN14 — Falhas de integração:** erros de rede ou respostas inválidas das APIs devem gerar feedback legível sem apagar os dados já digitados pelo leitor.
- **RN15 — Feedback de interface:** operações de cadastro, edição e exclusão devem apresentar confirmação visual de sucesso ou erro.

## 8. Histórias de Usuário

### HU01 — Visualizar e organizar a estante

**Como** leitor,  
**eu quero** visualizar, buscar, filtrar e ordenar meus livros,  
**para que** eu encontre rapidamente uma obra e acompanhe o estado das minhas leituras.

**Critérios de aceitação:**

- [ ] Os livros são exibidos em cards com capa, título, autor e status.
- [ ] É possível filtrar por Todos, Quero ler, Lendo e Lido.
- [ ] É possível buscar por título ou autor.
- [ ] É possível ordenar a coleção por título ou inclusão mais recente.
- [ ] A preferência de filtro/ordenação pode ser restaurada pelo Web Storage.
- [ ] Quando não houver livros, a página apresenta um estado vazio com ação para cadastrar o primeiro.

### HU02 — Buscar livro por ISBN

**Como** leitor,  
**eu quero** consultar um ISBN,  
**para que** os principais dados do livro sejam preenchidos automaticamente.

**Critérios de aceitação:**

- [ ] O campo aceita e valida ISBN-10 ou ISBN-13.
- [ ] A consulta utiliza a Google Books API.
- [ ] Quando encontrado, título, autor(es) e capa são preenchidos/sugeridos.
- [ ] Quando não encontrado, o sistema informa o ocorrido e mantém o preenchimento manual disponível.
- [ ] Falhas de rede são tratadas com mensagem amigável.

### HU03 — Cadastrar e editar livro

**Como** leitor,  
**eu quero** cadastrar ou editar um livro,  
**para que** minha estante represente corretamente minha coleção e meu progresso.

**Critérios de aceitação:**

- [ ] ISBN, título, autor(es) e status são obrigatórios.
- [ ] ISBN duplicado é recusado.
- [ ] O status é escolhido por um elemento select.
- [ ] Os erros são mostrados próximos aos respectivos campos.
- [ ] Um cadastro válido é persistido na API fake.
- [ ] Uma edição válida atualiza o registro existente.

### HU04 — Consultar detalhes de um livro

**Como** leitor,  
**eu quero** abrir os detalhes de um livro,  
**para que** eu veja suas informações completas e as ações disponíveis.

**Critérios de aceitação:**

- [ ] A página apresenta capa, título, autor(es), ISBN e status.
- [ ] Há ações para editar e excluir o livro.
- [ ] A ação de exclusão exige confirmação em modal.
- [ ] A interface funciona em mobile e desktop.

### HU05 — Avaliar leitura concluída

**Como** leitor,  
**eu quero** registrar uma nota e uma resenha em um livro concluído,  
**para que** eu preserve minha opinião sobre a leitura.

**Critérios de aceitação:**

- [ ] A avaliação só é habilitada para livros com status "lido".
- [ ] A nota aceita somente valores inteiros de 1 a 5.
- [ ] A resenha possui limite de caracteres informado na interface.
- [ ] Existe no máximo uma avaliação por livro.
- [ ] Uma avaliação existente pode ser editada.

### HU06 — Excluir livro

**Como** leitor,  
**eu quero** excluir um livro que não desejo mais acompanhar,  
**para que** a estante permaneça atualizada.

**Critérios de aceitação:**

- [ ] A exclusão exige confirmação explícita.
- [ ] Cancelar a confirmação não altera os dados.
- [ ] Confirmar remove o livro da API fake.
- [ ] Se houver avaliação associada, ela também é removida.

## 9. Estados de Experiência Obrigatórios

Além das três páginas principais, a implementação deverá contemplar estados de interface que já estão documentados no protótipo aprovado:

- **Estante populada** com busca, filtros, ordenação e cards.
- **Estante vazia** com orientação e CTA para cadastrar o primeiro livro.
- **Offcanvas mobile** com somente "Minha estante" e "Adicionar livro".
- **Formulário normal** de cadastro/edição.
- **Formulário com validação/API**, incluindo ISBN inválido, campos obrigatórios, livro não encontrado e preenchimento automático bem-sucedido.
- **Detalhes de livro Lido** com avaliação.
- **Detalhes de livro não concluído** com avaliação indisponível.
- **Modal de confirmação de exclusão**.
- **Feedback e loading**, incluindo sucesso, erro e skeleton/carregamento.

Esses estados reutilizam as mesmas páginas e componentes; eles não representam novas páginas HTML.

## 10. Fora do Escopo

Para manter o projeto compatível com o objetivo e o prazo da disciplina, não fazem parte desta versão:

- autenticação, cadastro, perfil ou avatar de usuários;
- backend de produção próprio;
- coleções personalizadas;
- citações e notas;
- diário de leitura;
- metas, streaks ou gamificação;
- progresso por páginas ou porcentagem;
- número de páginas;
- formato da edição;
- ano de edição ou data de publicação como dados do domínio;
- upload manual de capa;
- rede social, seguidores ou comentários públicos;
- recomendações;
- dashboard ou estatísticas;
- sincronização entre dispositivos;
- leitura de e-books dentro da aplicação;
- pagamentos ou assinaturas;
- recomendações por inteligência artificial.

## 11. Critérios de Sucesso do Projeto

O projeto será considerado funcional quando:

- as três páginas principais estiverem implementadas e responsivas;
- o fluxo cadastro → listagem → detalhe → edição/avaliação estiver navegável;
- livros e avaliações forem persistidos e consultados via API fake;
- a Google Books API for consumida com tratamento de erros;
- os requisitos técnicos e os 24 Indicadores de Desempenho aplicáveis da disciplina estiverem demonstrados no código e nas evidências de entrega.
