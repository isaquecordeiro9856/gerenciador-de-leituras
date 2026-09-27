# Design Brief — BookTracker

## Objetivo

Este documento define a direção visual oficial do novo protótipo do BookTracker no Google Stitch. Ele complementa o PRD e a arquitetura e deve ser usado como referência para evitar divergência entre protótipo, documentação e implementação.

## Conceito

**Biblioteca pessoal contemporânea.**

O visual deve transmitir:

- organização;
- calma;
- gosto por leitura;
- clareza;
- maturidade;
- simplicidade.

Evitar:

- aparência infantil;
- excesso de gradientes;
- glassmorphism exagerado;
- sombras pesadas;
- muitas cores concorrentes;
- visual de dashboard corporativo;
- elementos que seriam difíceis de reproduzir depois com Bootstrap 5.3 + Sass.

## Design System

### Cores

- Primary: `#3F5144`
- Primary dark: `#2C3A30`
- Accent: `#C47A4A`
- Background: `#F5F3EE`
- Surface: `#FFFFFF`
- Text: `#20231F`
- Muted: `#6F746D`
- Border: `#D9DDD6`
- Success: `#2F7D4A`
- Info: `#3F6F8E`
- Warning: `#A56A22`
- Danger: `#B4423C`

### Tipografia

- Títulos: **DM Serif Display**
- Interface/corpo: **Inter**

Títulos devem ter personalidade editorial, mas controles e textos de interface devem permanecer extremamente legíveis.

### Forma

- cantos moderadamente arredondados;
- bordas discretas;
- sombras suaves;
- bastante espaço negativo;
- capas de livros com proporção consistente;
- ícones simples e reconhecíveis.

## Componentes Bootstrap a deixar visualmente identificáveis

O protótipo deve permitir apontar claramente pelo menos:

1. Navbar / Offcanvas;
2. Cards;
3. Modal;
4. Form controls / Input group;
5. Buttons;
6. Badges;
7. Alert ou Toast.

Não escrever "Bootstrap Card" na interface do usuário. A identificação é estrutural: os elementos precisam ser facilmente associáveis aos componentes durante a apresentação.

## Tela 1 — Estante

### Objetivo

Ser a tela principal e mais visual do produto.

### Mobile

- header compacto com marca "BookTracker";
- botão/menu que possa virar Offcanvas;
- título "Minha estante";
- texto curto de apoio;
- CTA "Adicionar livro";
- campo de busca;
- filtros de status em chips/botões: Todos, Quero ler, Lendo, Lido;
- ordenação compacta;
- cards em uma coluna;
- capa com destaque;
- título, autor e badge de status;
- ação secundária "Ver detalhes";
- estado vazio previsto.

### Desktop

- navbar horizontal;
- conteúdo central com largura máxima confortável;
- topo da estante com título à esquerda e CTA à direita;
- busca + filtros + ordenação em uma barra organizada;
- grid de 3 ou 4 cards conforme largura;
- densidade moderada;
- hover discreto nos cards.

## Tela 2 — Cadastro / Edição

### Objetivo

Facilitar o cadastro sem criar um formulário cansativo.

### Mobile

- botão de voltar;
- título "Adicionar livro";
- bloco inicial destacado "Buscar por ISBN";
- campo ISBN + botão "Buscar";
- pequeno texto explicando que os dados podem ser preenchidos automaticamente;
- divisor visual;
- campos Título, Autor(es), URL/capa quando aplicável e Status;
- preview de capa compacto;
- mensagens de validação próximas aos campos;
- botão primário "Salvar livro";
- botão secundário "Cancelar".

### Desktop

- formulário em card/surface amplo;
- duas áreas: campos principais e preview da capa;
- ISBN em destaque no início;
- ações alinhadas ao final;
- sem excesso de largura nos inputs.

## Tela 3 — Detalhes / Avaliação

### Objetivo

Criar uma página agradável de consulta e concentrar as ações de manutenção.

### Mobile

- voltar à estante;
- capa em destaque;
- título e autor;
- badge de status;
- ISBN e metadados;
- botões Editar e Excluir;
- seção "Minha avaliação";
- estrelas/nota;
- resenha;
- estado apropriado quando o livro ainda não estiver Lido.

### Desktop

- layout em duas colunas no topo: capa / informações;
- ações claramente secundárias em relação ao conteúdo;
- avaliação abaixo em surface própria;
- hierarquia tipográfica forte.

### Modal

Projetar estado de modal de confirmação para excluir livro:

- título direto;
- texto explicando que a ação não pode ser desfeita;
- Cancelar;
- Excluir em estilo destrutivo.

## Responsividade

Criar primeiro as três telas em **mobile**.

Depois gerar as três versões **desktop** mantendo:

- mesmos tokens;
- mesma hierarquia;
- mesmos componentes;
- mesma linguagem visual.

Não criar uma interface completamente diferente no desktop.

## Navegação do Protótipo

Fluxo mínimo navegável:

- Estante → Adicionar livro;
- Cadastro → Salvar/voltar → Estante;
- Estante → Ver detalhes;
- Detalhes → Editar;
- Detalhes → Excluir → Modal;
- Detalhes → Voltar à estante.

## Prompt-base para o Google Stitch

Crie um novo projeto WEB para uma aplicação chamada "BookTracker — Gerenciador de Leituras".

Projete primeiro as versões MOBILE de três telas principais: (1) Minha Estante, (2) Adicionar/Editar Livro e (3) Detalhes do Livro com Avaliação.

O produto é uma biblioteca pessoal digital simples. Não há login, cadastro de usuário, rede social ou dashboard administrativo.

Use uma direção visual de "biblioteca pessoal contemporânea": editorial, limpa, acolhedora, elegante e fácil de reproduzir depois com Bootstrap 5.3 + Sass. Evite gradientes chamativos, glassmorphism, excesso de sombras e layouts experimentais difíceis de implementar.

DESIGN TOKENS:
- primary #3F5144
- primary-dark #2C3A30
- accent #C47A4A
- background #F5F3EE
- surface #FFFFFF
- text #20231F
- muted #6F746D
- border #D9DDD6
- success #2F7D4A
- info #3F6F8E
- warning #A56A22
- danger #B4423C
- títulos: DM Serif Display
- corpo/interface: Inter

TELA 1 — MINHA ESTANTE:
Crie header/navbar, título, CTA "Adicionar livro", campo de busca, filtros "Todos / Quero ler / Lendo / Lido", controle de ordenação e uma lista de livros em cards. Cada card deve mostrar capa, título, autor, badge de status e ação "Ver detalhes". Inclua também um estado vazio coerente.

TELA 2 — ADICIONAR/EDITAR LIVRO:
Inclua botão de voltar, bloco destacado para "Buscar por ISBN", campo ISBN + botão Buscar e texto explicando que título, autor e capa podem vir automaticamente. Abaixo, formulário com Título, Autor(es), Status e preview da capa. Mostre exemplos de validação e ações "Salvar livro" e "Cancelar".

TELA 3 — DETALHES DO LIVRO:
Mostre capa, título, autor, status, ISBN, botões Editar e Excluir e seção "Minha avaliação" com nota de 1 a 5 estrelas e resenha. Projete também um modal de confirmação de exclusão.

Os seguintes componentes devem ser visualmente compatíveis com componentes Bootstrap que serão usados depois: Navbar/Offcanvas, Cards, Modal, Forms/Input Group, Buttons, Badges e Alerts/Toasts.

Garanta boa hierarquia visual, contraste, labels claros, foco em acessibilidade, alvos de toque confortáveis e consistência de espaçamento. Use capas de livros como principal elemento visual, sem deixar a interface carregada.

Depois das telas mobile, gere versões DESKTOP correspondentes preservando exatamente o mesmo Design System e a mesma arquitetura de informação. No desktop, use grid de 3–4 cards na estante e layout em duas colunas onde isso melhorar a leitura.

Por fim, conecte as telas em um protótipo navegável: Estante → Adicionar livro; Estante → Detalhes; Detalhes → Editar; Detalhes → Excluir/Modal; telas secundárias → voltar para Estante.
