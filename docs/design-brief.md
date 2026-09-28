# Design Brief Final — BookTracker

## 1. Objetivo

Este documento é a **fonte de verdade visual** do BookTracker para as próximas etapas da disciplina.

Protótipo oficial no Google Stitch:

https://stitch.google.com/u/1/projects/18205289966603005290?pli=1

O conjunto final contempla autenticação acadêmica, estante, cadastro/edição de livros, detalhes, avaliação, estados de validação, feedback e exclusão.

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
- elementos difíceis de reproduzir com Bootstrap 5.3 + Sass.

## 3. Design System Oficial

### Cores

| Token | Valor | Uso |
|---|---|---|
| Primary | `#3F5144` | identidade e ações principais |
| Primary dark | `#2C3A30` | hover/ênfase |
| Accent | `#C47A4A` | detalhes editoriais/estrelas |
| Background | `#F5F3EE` | fundo |
| Surface | `#FFFFFF` | cards/formulários/modais |
| Text | `#20231F` | texto principal |
| Muted | `#62685F` | texto secundário |
| Border | `#D9DDD6` | divisórias/campos |
| Success | `#2F7D4A` | sucesso / Lido |
| Info | `#3F6F8E` | informação / Lendo |
| Warning | `#A56A22` | atenção / Quero ler |
| Danger | `#B4423C` | erro / destrutivo |

### Tipografia

- **Títulos:** DM Serif Display, Georgia, serif.
- **Interface/corpo:** Inter, system-ui, sans-serif.

### Forma

- ritmo de 8 px;
- controles aproximadamente 12–16 px de raio;
- cards aproximadamente 16–20 px;
- sombras discretas;
- bordas leves;
- alvos de toque confortáveis;
- capas em proporção consistente.

## 4. Componentes Bootstrap Representados

- Navbar;
- Offcanvas;
- Card;
- Modal;
- Forms;
- Input Group;
- Buttons;
- Badges;
- Alert/Toast;
- Select/Dropdown.

O protótipo serve como referência visual; a existência de classes Bootstrap/ARIA deve ser comprovada apenas na implementação.

## 5. Inventário Oficial

### Design System

- **APPROVED DESIGN SYSTEM**

### Autenticação Mobile

- **APPROVED M0A — Login**
- **APPROVED M0B — Cadastro**

### Mobile

- **APPROVED M1 — Minha Estante**
- **APPROVED M2 — Estante Vazia**
- **APPROVED M3 — Offcanvas**
- **APPROVED M4 — Adicionar/Editar Livro**
- **APPROVED M5 — Validação e API**
- **APPROVED M6 — Detalhes Lido**
- **APPROVED M7 — Detalhes Não Concluído**
- **APPROVED M8 — Excluir Livro**
- **APPROVED M9 — Feedback e Loading**

### Autenticação Desktop

- **APPROVED D0A — Login**
- **APPROVED D0B — Cadastro**

### Desktop

- **APPROVED D1 — Minha Estante**
- **APPROVED D2 — Estante Vazia**
- **APPROVED D4 — Adicionar/Editar Livro**
- **APPROVED D5 — Validação e API**
- **APPROVED D6 — Detalhes Lido**
- **APPROVED D7 — Detalhes Não Concluído**
- **APPROVED D8 — Excluir Livro**

Total: **1 Design System + 11 estados/telas Mobile + 9 estados/telas Desktop = 21 frames/itens oficiais**, considerando Login/Cadastro dentro de cada conjunto.

## 6. Telas de Autenticação

### Login

- marca BookTracker;
- Entrar;
- E-mail;
- Senha;
- botão Entrar;
- link Criar conta;
- estados de erro.

### Cadastro

- marca BookTracker;
- Criar conta;
- Nome;
- E-mail;
- Senha;
- Confirmar senha;
- regra de senha visível;
- botão Criar conta;
- link Entrar.

Não incluir login social, avatar, telefone, endereço ou planos.

## 7. Estante

### Populada

- navbar;
- título Minha estante;
- um único CTA Adicionar livro;
- busca;
- filtros Todos / Quero ler / Lendo / Lido;
- ordenação;
- cards;
- Ver detalhes.

### Regra de avaliação nos cards

- Lido + avaliação → estrelas;
- Lido sem avaliação → “Ainda não avaliado”;
- Lendo / Quero ler → sem estrelas.

### Vazia

- mesma shell;
- mensagem de estado vazio;
- CTA Adicionar primeiro livro;
- dica sobre ISBN.

## 8. Offcanvas Mobile

Contém somente:

- Minha estante;
- Adicionar livro.

Sem perfil, avatar, coleções, notas ou itens extras.

## 9. Cadastro/Edição de Livro

- Voltar à estante;
- ISBN + Buscar;
- explicação do preenchimento automático;
- Título;
- Autor(es);
- Status;
- preview de capa somente leitura;
- Salvar livro;
- Cancelar.

Não existe upload manual de capa.

## 10. Validação e API

Estados previstos:

- ISBN inválido;
- campo obrigatório;
- livro não encontrado;
- preenchimento manual disponível;
- busca ISBN bem-sucedida;
- erro de rede;
- feedback de salvamento;
- loading/skeleton.

## 11. Detalhes

### Lido

- capa;
- título;
- autor;
- ISBN;
- badge Lido;
- Editar;
- Excluir;
- Minha avaliação;
- estrelas;
- resenha;
- Editar avaliação.

### Não concluído

- mesmos dados essenciais;
- status Lendo ou Quero ler;
- sem estrelas;
- mensagem de avaliação indisponível;
- ação opcional “Marcar como Lido agora” pode alterar o status dentro do escopo existente.

## 12. Exclusão

Modal:

- “Excluir livro da estante?”;
- consequência explícita;
- Cancelar;
- Excluir livro em Danger.

## 13. Protótipos Interativos

### Mobile

Início oficial: **M0A Login**.

Fluxos:

- M0A ↔ M0B;
- M0A/M0B → M1 após sucesso;
- M1 → M3;
- M3 → M1/M4;
- M1 → M4;
- M1 → M6/M7;
- M4 → M9 → M1 após salvar;
- M4 → M1 por Cancelar/Voltar;
- M6/M7 → M4 por Editar;
- M6/M7 → M8 por Excluir;
- M8 → Detalhes por Cancelar;
- M8 → M1 por confirmar exclusão.

### Desktop

Início oficial: **D0A Login**.

Fluxos:

- D0A ↔ D0B;
- D0A/D0B → D1 após sucesso;
- D1 → D4;
- D1 → D6/D7;
- D4 → D1;
- D6/D7 → D4;
- D6/D7 → D8;
- D8 → Detalhes ou D1.

## 14. Acessibilidade

O protótipo orienta:

- labels visíveis;
- feedback textual de erro;
- foco claramente perceptível;
- contraste adequado;
- status não somente por cor;
- ações destrutivas diferenciadas;
- alvos de toque confortáveis.

Na implementação, validar semanticamente `for/id`, ARIA quando necessário, teclado, foco do modal e contraste com ferramentas apropriadas.

## 15. Fora do Escopo

Não adicionar:

- perfil/avatar;
- OAuth/login social;
- coleções;
- citações;
- notas;
- diário;
- metas/streaks;
- progresso/páginas;
- formato/edição/publicação;
- upload de capa;
- rede social;
- recomendações;
- dashboard/estatísticas.

## 16. Regra para Implementação

- reproduzir somente o conjunto APPROVED;
- reutilizar componentes/estados;
- não transformar cada frame em HTML separado;
- manter 5 páginas reais;
- Bootstrap 5.3 + Sass/CSS;
- JavaScript Vanilla ES6+;
- sem Tailwind;
- autenticação tratada como fluxo acadêmico, não segurança de produção.
