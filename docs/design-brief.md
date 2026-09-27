# Design Brief Final — BookTracker

## 1. Objetivo

Este documento é a **fonte de verdade visual** do BookTracker para a implementação das próximas etapas da disciplina.

O protótipo oficial está no Google Stitch:

https://stitch.google.com/u/1/projects/18205289966603005290?pli=1

O canvas final foi consolidado para manter somente o conjunto aprovado e os fluxos necessários para apresentação e implementação.

## 2. Conceito Visual

**Biblioteca pessoal contemporânea.**

A experiência deve transmitir:

- organização;
- calma;
- clareza;
- maturidade;
- gosto por leitura;
- simplicidade;
- sensação editorial sem parecer um site antigo.

Evitar:

- visual infantil;
- dashboard administrativo;
- glassmorphism;
- gradientes chamativos;
- sombras pesadas;
- excesso de cores;
- componentes difíceis de reproduzir com Bootstrap 5.3 + Sass;
- funcionalidades que não pertencem ao PRD.

## 3. Design System Oficial

### Cores

| Token | Valor | Uso |
|---|---|---|
| Primary | `#3F5144` | identidade e ações primárias |
| Primary dark | `#2C3A30` | hover/ênfase |
| Accent | `#C47A4A` | detalhes editoriais, sem substituir a ação primária |
| Background | `#F5F3EE` | fundo geral |
| Surface | `#FFFFFF` | cards, formulários e modal |
| Text | `#20231F` | texto principal |
| Muted | `#62685F` | texto secundário com contraste adequado |
| Border | `#D9DDD6` | divisórias e campos |
| Success | `#2F7D4A` | sucesso e status Lido |
| Info | `#3F6F8E` | informação e status Lendo |
| Warning | `#A56A22` | status Quero ler / atenção |
| Danger | `#B4423C` | erros e ações destrutivas |

### Tipografia

- **Títulos:** DM Serif Display, Georgia, serif.
- **Interface e corpo:** Inter, system-ui, sans-serif.

### Forma e espaçamento

- ritmo de espaçamento baseado em 8 px;
- controles com aproximadamente 12–16 px de raio;
- cards com aproximadamente 16–20 px de raio;
- sombras leves;
- bordas discretas;
- alvos de toque confortáveis;
- capas de livros com proporção consistente.

## 4. Componentes Bootstrap Representados

Os frames foram desenhados para corresponder diretamente a componentes do Bootstrap 5.3:

1. Navbar;
2. Offcanvas;
3. Card;
4. Modal;
5. Forms;
6. Input Group;
7. Buttons;
8. Badges;
9. Alert/Toast;
10. Select/Dropdown.

Isso permite apontar no vídeo de apresentação pelo menos Navbar/Offcanvas, Cards e Modal, atendendo ao requisito mínimo de três componentes.

## 5. Inventário Oficial do Stitch

Somente este conjunto é considerado oficial.

### Design System

- **APPROVED DESIGN SYSTEM**

### Mobile

- **APPROVED M1 — Minha Estante / Populada**
- **APPROVED M2 — Minha Estante / Vazia**
- **APPROVED M3 — Offcanvas**
- **APPROVED M4 — Adicionar/Editar Livro / Normal**
- **APPROVED M5 — Adicionar/Editar Livro / Validação e API**
- **APPROVED M6 — Detalhes / Lido**
- **APPROVED M7 — Detalhes / Não concluído**
- **APPROVED M8 — Modal de Exclusão**
- **APPROVED M9 — Feedback e Loading**

### Desktop

- **APPROVED D1 — Minha Estante / Populada**
- **APPROVED D2 — Minha Estante / Vazia**
- **APPROVED D4 — Adicionar/Editar Livro / Normal**
- **APPROVED D5 — Adicionar/Editar Livro / Validação e API**
- **APPROVED D6 — Detalhes / Lido**
- **APPROVED D7 — Detalhes / Não concluído**
- **APPROVED D8 — Modal de Exclusão**

Os estados são frames de uma mesma aplicação; eles **não representam páginas extras**. O produto continua tendo somente três páginas HTML principais: Estante, Cadastro/Edição e Detalhes.

## 6. Estados de Interface

### Estante populada

- busca por título/autor;
- filtro Todos / Quero ler / Lendo / Lido;
- ordenação;
- cards com capa, título, autor, status e ação Ver detalhes;
- avaliação visual somente quando o livro estiver Lido;
- CTA Adicionar livro.

### Estante vazia

- mensagem clara;
- CTA Adicionar primeiro livro;
- orientação curta sobre busca por ISBN;
- sem métricas, objetivos ou dashboard.

### Offcanvas mobile

Possui **somente**:

- Minha estante;
- Adicionar livro.

Não contém perfil, conta, coleções, notas, citações ou outras áreas.

### Cadastro/Edição

- ISBN + Buscar;
- Título;
- Autor(es);
- Status da leitura;
- preview de capa somente leitura;
- Salvar livro;
- Cancelar.

A capa é obtida pela Google Books API ou por fallback local. Não existe upload de imagem.

### Validação e API

O protótipo documenta:

- ISBN inválido;
- campo obrigatório;
- livro não encontrado na API;
- preenchimento manual disponível;
- preenchimento automático bem-sucedido;
- feedback de salvamento;
- loading/skeleton.

### Detalhes — Lido

- capa;
- título;
- autor;
- ISBN;
- status;
- Editar;
- Excluir;
- Minha avaliação;
- nota de 1 a 5;
- resenha;
- Editar avaliação.

### Detalhes — Não concluído

A área de avaliação informa que a avaliação fica disponível somente quando o status for Lido.

### Exclusão

Modal com:

- título direto;
- consequência da ação;
- Cancelar;
- Excluir livro em estilo destrutivo.

## 7. Protótipos Interativos Oficiais

O Stitch mantém dois fluxos separados para apresentação:

### BookTracker Mobile Prototype

Inicia em **APPROVED M1**.

Fluxo principal:

- M1 → M4 por Adicionar livro;
- M1 → M6/M7 por Ver detalhes;
- M1 → M3 pelo menu;
- M3 → M1 ou M4;
- M4 → M1 por Cancelar/Voltar;
- M4 → M9 → M1 após salvar;
- M6/M7 → M4 por Editar;
- M6/M7 → M8 por Excluir;
- M8 → Detalhes por Cancelar;
- M8 → M1 por Excluir livro.

### BookTracker Desktop Prototype

Inicia em **APPROVED D1**.

Fluxo principal:

- D1 → D4 por Adicionar livro;
- D1 → D6/D7 por Ver detalhes;
- D4 → D1 por Cancelar/Voltar/Salvar;
- D6/D7 → D4 por Editar;
- D6/D7 → D8 por Excluir;
- D8 → Detalhes por Cancelar;
- D8 → D1 por Excluir livro.

Os fluxos foram planejados para não possuir dead-ends nas ações principais.

## 8. Acessibilidade

A implementação deverá preservar:

- labels visíveis;
- mensagens de erro em texto junto aos campos;
- foco de teclado visível;
- bom contraste;
- status não comunicados apenas por cor;
- texto alternativo para capas;
- alvo de toque confortável;
- modal com foco e fechamento adequados;
- feedback de sucesso/erro legível;
- suporte a `prefers-reduced-motion` em animações customizadas.

## 9. Fora do Escopo Visual e Funcional

Não adicionar ao protótipo ou à implementação:

- autenticação;
- perfil/avatar;
- contas de usuário;
- coleções;
- citações;
- notas;
- diário de leitura;
- metas;
- streaks;
- progresso em páginas ou porcentagem;
- número de páginas;
- formato do livro;
- ano de edição;
- data de publicação;
- upload de capa;
- rede social;
- recomendações;
- dashboard ou estatísticas.

Esses itens foram deliberadamente excluídos para manter o produto coerente com o PRD e com o escopo da disciplina.

## 10. Regra para Implementação

Ao transformar o protótipo em código:

- reproduzir o conjunto APPROVED, não versões antigas;
- reutilizar os mesmos componentes para estados diferentes;
- não transformar cada frame em um HTML separado;
- manter as três páginas principais;
- implementar com Bootstrap 5.3 + Sass/CSS próprio;
- usar JavaScript Vanilla ES6+ para a lógica principal;
- não usar Tailwind CSS.
