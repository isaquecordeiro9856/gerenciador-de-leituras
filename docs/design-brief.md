# Design Brief Final — BookTracker

## 1. Objetivo

Este documento é a **fonte de verdade visual** do BookTracker para a implementação das próximas etapas da disciplina.

Protótipo oficial no Google Stitch:

https://stitch.google.com/u/1/projects/18205289966603005290?pli=1

O conjunto final contempla autenticação acadêmica, estante, adicionar/editar livro, detalhes, avaliação, validação, feedback e exclusão em versões Mobile e Desktop.

## 2. Conceito Visual

**Biblioteca pessoal contemporânea.**

A experiência deve transmitir:

- organização;
- calma;
- clareza;
- maturidade;
- gosto por leitura;
- simplicidade;
- aparência editorial moderna.

Evitar:

- visual infantil;
- dashboard administrativo;
- glassmorphism;
- gradientes chamativos;
- sombras pesadas;
- excesso de cores;
- componentes difíceis de reproduzir com Bootstrap 5.3 + Sass.

## 3. Design System Oficial

### Cores

| Token | Valor | Uso |
|---|---|---|
| Primary | #3F5144 | identidade e CTA principal |
| Primary dark | #2C3A30 | hover/ênfase |
| Accent | #C47A4A | detalhes editoriais e estrelas |
| Background | #F5F3EE | fundo geral |
| Surface | #FFFFFF | cards, formulários e modal |
| Text | #20231F | texto principal |
| Muted | #62685F | texto secundário |
| Border | #D9DDD6 | divisórias/campos |
| Success | #2F7D4A | sucesso/Lido |
| Info | #3F6F8E | informação/Lendo |
| Warning | #A56A22 | atenção/Quero ler |
| Danger | #B4423C | erro/exclusão |

### Tipografia

- **Títulos:** DM Serif Display, Georgia, serif.
- **Interface e corpo:** Inter, system-ui, sans-serif.

### Forma e Espaçamento

- ritmo baseado em 8 px;
- controles com aproximadamente 12–16 px de raio;
- cards com aproximadamente 16–20 px;
- bordas discretas;
- sombras leves;
- alvos de toque confortáveis;
- capas com proporção consistente;
- verde como cor principal;
- terracota como acento.

## 4. Componentes Bootstrap Identificados

Para atender à 1ª Entrega, o Design System/protótipo deve identificar visualmente pelo menos três componentes que serão implementados com Bootstrap 5.3:

1. **Navbar / Offcanvas**
2. **Card**
3. **Modal**

Também fazem parte do contrato:

- Forms;
- Input Group;
- Buttons;
- Badges;
- Alert/Toast;
- Select/Dropdown.

Essas identificações são documentação visual. As classes Bootstrap reais serão introduzidas na fase de código.

## 5. Inventário Oficial do Stitch

Somente frames com prefixo **APPROVED** pertencem ao contrato final.

### Design System

- APPROVED DESIGN SYSTEM

### Mobile

- APPROVED M0A — Login
- APPROVED M0B — Cadastro
- APPROVED M1 — Minha Estante
- APPROVED M2 — Estante Vazia
- APPROVED M3 — Offcanvas
- APPROVED M4 — Adicionar/Editar Livro
- APPROVED M5 — Validação e API
- APPROVED M6 — Detalhes Lido
- APPROVED M7 — Detalhes Não Concluído
- APPROVED M8 — Excluir Livro
- APPROVED M9 — Feedback e Loading

### Desktop

- APPROVED D0A — Login
- APPROVED D0B — Cadastro
- APPROVED D1 — Minha Estante
- APPROVED D2 — Estante Vazia
- APPROVED D4 — Adicionar/Editar Livro
- APPROVED D5 — Validação e API
- APPROVED D6 — Detalhes Lido
- APPROVED D7 — Detalhes Não Concluído
- APPROVED D8 — Excluir Livro

### Regra de inventário

Não existem M4B/D4B no conjunto final. A edição utiliza o próprio M4/D4 em modo preenchido.

## 6. Login e Cadastro

### Login

- marca BookTracker;
- título “Entrar”;
- E-mail;
- Senha;
- botão Entrar;
- link Criar conta;
- estados de erro claros.

### Cadastro

- marca BookTracker;
- título “Criar conta”;
- Nome;
- E-mail;
- Senha;
- Confirmar senha;
- regra de senha visível;
- botão Criar conta;
- link Entrar.

Não incluir OAuth, avatar, telefone, endereço ou planos.

## 7. Estante

### Estante Populada

- Navbar;
- título “Minha estante”;
- exatamente um CTA principal “Adicionar livro”;
- busca;
- filtros Todos / Quero ler / Lendo / Lido;
- ordenação;
- cards;
- ação “Ver detalhes”.

### Regra de estrelas nos cards

- Lido + avaliação → estrelas;
- Lido sem avaliação → “Ainda não avaliado”;
- Lendo / Quero ler → nenhuma estrela falsa.

### Estante Vazia

- mesma estrutura visual;
- mensagem “Sua estante ainda está vazia”;
- CTA “Adicionar primeiro livro”;
- orientação curta sobre ISBN;
- sem outro CTA duplicado.

## 8. Offcanvas Mobile

Conteúdo permitido:

- Minha estante;
- Adicionar livro.

Sem:

- perfil;
- avatar;
- coleções;
- notas;
- citações;
- contadores;
- configurações extras.

## 9. Adicionar/Editar Livro — M4/D4

M4 e D4 representam **um mesmo formulário** em dois contextos.

### Modo Adicionar

- título “Adicionar livro”;
- campos vazios;
- ISBN + Buscar;
- Título;
- Autor(es);
- Status;
- preview de capa;
- “Salvar livro”;
- Cancelar.

Após salvar:

- Mobile pode passar por M9 para mostrar feedback e então voltar à Estante;
- Desktop retorna à Estante com feedback.

### Modo Editar

Ao acessar pelo botão “Editar” dos Detalhes:

- título muda para “Editar livro”;
- ISBN vem preenchido;
- Título vem preenchido;
- Autor(es) vêm preenchidos;
- Status atual vem selecionado;
- capa atual aparece no preview;
- ação principal muda para “Salvar alterações”;
- Cancelar retorna aos Detalhes;
- Salvar retorna aos Detalhes atualizado.

O usuário pode alterar:

- ISBN;
- título;
- autor(es);
- status.

Uma nova busca por ISBN pode atualizar título, autoria e capa antes do salvamento.

### Restrições do formulário

Não incluir:

- estrelas;
- resenha;
- notas pessoais;
- editora;
- ano/data de edição;
- formato;
- número de páginas;
- progresso;
- upload manual de capa.

A capa vem apenas da Google Books API ou do fallback visual.

## 10. Validação e API — M5/D5

Estados previstos:

- ISBN inválido;
- campo obrigatório;
- livro não encontrado;
- preenchimento manual disponível;
- busca ISBN bem-sucedida;
- falha de rede;
- feedback de salvamento;
- loading.

Erros não devem apagar dados já digitados.

## 11. Detalhes — M6/M7/D6/D7

### Livro Lido

- capa;
- título;
- autor;
- ISBN;
- badge Lido;
- Editar;
- Excluir;
- seção “Minha avaliação”;
- estrelas;
- resenha;
- ação Editar avaliação.

### Livro Não Concluído

- capa;
- título;
- autor;
- ISBN;
- status Lendo ou Quero ler;
- Editar;
- Excluir;
- mensagem: “A avaliação fica disponível quando o livro for marcado como Lido.”

Não exibir estrelas ou avaliação falsa.

Mudança de status deve acontecer pelo formulário M4/D4.

## 12. Avaliação

A avaliação pertence aos Detalhes, não ao formulário de livro.

Regras:

- apenas Lido pode ser avaliado;
- nota de 1 a 5;
- uma avaliação por livro;
- resenha editável;
- ao remover o status Lido de um livro avaliado, a implementação deve pedir confirmação antes de remover a avaliação incompatível.

## 13. Exclusão — M8/D8

Modal com:

- “Excluir livro da estante?”;
- consequência explícita;
- Cancelar;
- “Excluir livro” em estilo Danger.

Cancelar retorna aos Detalhes. Confirmar retorna à Estante.

## 14. Feedback e Loading — M9

Estados:

- sucesso ao salvar;
- erro de salvamento;
- busca por ISBN em andamento;
- skeletons de cards.

Esses elementos são estados/componentes, não novas funcionalidades.

## 15. Fluxo Interativo Mobile

Início: **APPROVED M0A — Login**

Fluxos principais:

- M0A ↔ M0B;
- M0A/M0B → M1 após sucesso;
- M1 → M3;
- M3 → M1 ou M4;
- M1 → M4 em modo Adicionar;
- M4 Adicionar → M9 → M1;
- M1 → M6/M7;
- M6/M7 → M4 em modo Editar;
- M4 Editar → Salvar alterações → M6/M7 atualizado;
- M4 Editar → Cancelar → M6/M7;
- M6/M7 → M8;
- M8 Cancelar → Detalhes;
- M8 Excluir → M1.

## 16. Fluxo Interativo Desktop

Início: **APPROVED D0A — Login**

Fluxos principais:

- D0A ↔ D0B;
- D0A/D0B → D1 após sucesso;
- D1 → D4 em modo Adicionar;
- D4 Adicionar → D1;
- D1 → D6/D7;
- D6/D7 → D4 em modo Editar;
- D4 Editar → Salvar alterações → D6/D7 atualizado;
- D4 Editar → Cancelar → D6/D7;
- D6/D7 → D8;
- D8 Cancelar → Detalhes;
- D8 Excluir → D1.

## 17. Acessibilidade

O protótipo deve orientar:

- labels visíveis;
- mensagens de erro em texto;
- foco visual;
- bom contraste;
- status não comunicados somente por cor;
- hierarquia clara para ação destrutiva;
- alvos de toque confortáveis.

A implementação futura deverá comprovar semanticamente labels, teclado, foco, contraste e ARIA quando necessário.

## 18. Fora do Escopo

Não adicionar:

- perfil/avatar;
- OAuth/login social;
- coleções;
- citações;
- notas pessoais;
- diário;
- metas/streaks;
- progresso/páginas;
- número de páginas;
- formato;
- editora;
- ano/data de edição/publicação;
- upload de capa;
- rede social;
- recomendações;
- dashboard/estatísticas.

## 19. Regra para Implementação

Ao transformar o protótipo em código:

- usar somente o conjunto APPROVED;
- não recriar versões antigas;
- reutilizar M4/D4 para Adicionar e Editar;
- manter avaliação nos Detalhes;
- manter cinco páginas HTML reais;
- usar Bootstrap 5.3 + Sass/CSS;
- usar JavaScript Vanilla ES6+;
- não usar Tailwind CSS;
- tratar Login/Cadastro como autenticação acadêmica de demonstração.
