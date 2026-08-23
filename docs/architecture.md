# Especificação Técnica (Architecture)

## Modelo de Dados (Diagrama Mermaid)
Abaixo está o mapeamento das entidades que serão utilizadas na API Fake (JSON Server) e como elas se relacionam. Teremos a entidade "LIVRO" e a entidade "AVALIACAO".

```mermaid
erDiagram
    LIVRO ||--o| AVALIACAO : possui

    LIVRO {
        string id PK
        string isbn
        string titulo
        string autor
        string capa_url
        string status_leitura
    }

    AVALIACAO {
        string id PK
        string livro_id FK
        int nota_estrelas
        string resenha
        string data
    }