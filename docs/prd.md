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

## Histórias de Usuário (Escopo)
* Como **Leitor**, eu quero **buscar um livro pelo ISBN (via Google Books API)** para que **o sistema preencha a capa, título e autor automaticamente, poupando meu tempo de digitação**.
* Como **Leitor**, eu quero **visualizar minha coleção de livros em formato de cards** para que **eu possa identificar rapidamente as obras pela capa e pelo status**.
* Como **Leitor**, eu quero **adicionar uma nota e uma resenha aos livros com status "Lido"** para que **eu possa manter um histórico do que achei de cada obra**.
* Como **Leitor**, eu quero **editar o status da leitura ou excluir um livro da minha estante** para que **minha coleção virtual reflita a realidade**.