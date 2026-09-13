# Especificação Técnica

Este documento registra as versões escolhidas para o framework CSS e para a API pública do BookTracker. A arquitetura, o modelo de dados e os contratos da API fake estão em [architecture.md](architecture.md).

## Tecnologias selecionadas

| Tecnologia | Versão especificada | Uso |
|---|---|---|
| Bootstrap | **5.3.8** | Grid responsivo, utilitários e componentes visuais. O JavaScript do Bootstrap 5 não exige jQuery; o projeto mantém jQuery separadamente para a máscara de ISBN prevista no escopo. |
| Google Books API | **v1** | Busca de volumes por ISBN e obtenção dos metadados públicos do livro. A API é versionada como `v1` no endpoint, sem número de versão semântica publicado. |

## Bootstrap

- **Documentação da versão:** [Bootstrap 5.3](https://getbootstrap.com/docs/5.3/)
- **CDN oficial fixado na versão:** [CSS](https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css) · [JavaScript bundle com Popper](https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js) · [instruções oficiais](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- **Licença:** MIT.
- **Recursos adotados:** grid mobile-first (`.container`, `.row`, `.col-*`), cards, formulários, navbar, modais e utilitários de espaçamento e cores.

O framework dá suporte ao layout responsivo da estante e oferece componentes prontos compatíveis com as telas planejadas. Sua série 5.3 é mantida pelo projeto oficial; a licença MIT permite seu uso neste projeto.

## API pública: Google Books API v1

- **Documentação de busca:** [Using the API](https://developers.google.com/books/docs/v1/using)
- **Referência do endpoint:** [Volumes: list](https://developers.google.com/books/docs/v1/reference/volumes/list)
- **Endpoint:** `GET https://www.googleapis.com/books/v1/volumes`
- **Consulta por ISBN:** parâmetro `q=isbn:{isbn}` (por exemplo, `q=isbn:9788535902778`).
- **Autenticação:** uma busca pública não exige autenticação, conforme a documentação; limites de uso do serviço ainda se aplicam.
- **Resposta usada:** `items[].volumeInfo.title`, `items[].volumeInfo.authors` e `items[].volumeInfo.imageLinks.thumbnail`.
- **Resultado sem correspondência:** quando `totalItems` for `0` ou não houver `items`, informar que o ISBN não foi encontrado e permitir o preenchimento manual.
- **Falha de requisição:** tratar erros HTTP e falhas de rede com mensagem amigável, sem perder os dados digitados no formulário.

O uso da API enriquece o cadastro ao buscar título, autoria e capa a partir do ISBN. O restante dos dados da biblioteca continua sendo persistido na API fake descrita em [architecture.md](architecture.md).
