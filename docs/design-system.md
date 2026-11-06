# 🎨 Design System — BookTracker

Este documento resume a identidade visual do BookTracker e mostra como cada decisão vira código. As decisões de origem estão no [Design Brief](design-brief.md) e em [Architecture §8](architecture.md#8-design-system); o protótipo aprovado está no Google Stitch (link no [README](../README.md)).

**Conceito:** biblioteca pessoal contemporânea. Editorial, calma, clara e acolhedora; sem aparência de painel administrativo.

### 1. Framework Base

- **Framework escolhido:** Bootstrap 5.3 (instalado por NPM e usado a partir de `node_modules`).
- **Motivação:** traz Grid, Flexbox e componentes prontos (navbar, offcanvas, card, modal), e pode ser customizado com Sass sem `!important`. Tailwind não é usado.

### 2. Paleta de Cores

| Token | Valor | Uso |
|---|---|---|
| Primary | `#3F5144` | identidade, botão principal, links |
| Primary dark | `#2C3A30` | hover do botão, painel de marca, rodapé |
| Accent | `#C47A4A` | estrelas e detalhes; nunca como botão principal |
| Background | `#F5F3EE` | fundo geral das páginas |
| Surface | `#FFFFFF` | cards, formulários, modais |
| Text | `#20231F` | texto principal |
| Muted | `#62685F` | texto secundário |
| Border | `#D9DDD6` | divisórias e campos |
| Success | `#2F7D4A` | selo "Lido" |
| Info | `#3F6F8E` | selo "Lendo" |
| Warning | `#A56A22` | selo "Quero ler" |
| Danger | `#B4423C` | exclusão |

O fundo `#F5F3EE` é mantido porque está documentado no Design Brief e no protótipo aprovado.

**Contraste (WCAG AA, calculado):** texto principal sobre o fundo 14,3:1; primary sobre o fundo 7,7:1; muted sobre o fundo 5,2:1; branco sobre primary 8,5:1. O terracota puro só chega a 3,0:1 sobre o fundo, por isso o texto em terracota usa `shade-color($bt-accent, 35%)` (6,2:1); sobre o verde escuro usa `tint-color($bt-accent, 55%)` (5,1:1). Os textos dos selos usam `shade-color($cor, 20%)` (5,3:1 a 6,1:1).

### 3. Tipografia

- **Títulos:** DM Serif Display (peso 400), com Georgia como reserva.
- **Corpo e interface:** Inter, com `system-ui` como reserva. Ambas vêm do Google Fonts.
- **Base:** 16 px (`1rem`) e entrelinha 1,65 no texto corrido; 1,15 nos títulos.
- **Escala fluida** (função `clamp()`, sem media query):

| Classe | Mínimo | Máximo | Uso |
|---|---|---|---|
| `.titulo-pagina` | 2 rem | 3,5 rem | `h1` de cada página |
| `.titulo-secao` | 1,375 rem | 1,875 rem | títulos de seção (ex.: "Minha avaliação") e do card de login |
| `.lead` (Bootstrap) | 1,125 rem | 1,125 rem | texto de apoio do título |

- **Medida de leitura:** textos longos usam `max-width: 60ch` (`.medida`).

### 4. Forma e Espaçamento

- **Ritmo:** múltiplos de 8 px, escritos em rem pela função `espaco(n)` (1 passo = 0,5 rem).
- **Raios:** controles `0.75rem`; cards e painéis `1rem`; filtros em pílula.
- **Sombras:** leves e só em elementos que "flutuam" (hover do card, capa dos detalhes, card de login).
- **Capas:** sempre em proporção 2:3 (`aspect-ratio`), com `object-fit: cover`.
- **Breakpoints (Bootstrap):** xs <576, sm ≥576, md ≥768, lg ≥992, xl ≥1200, xxl ≥1400. Mobile first: o padrão é o celular e as colunas surgem com `min-width`.

### 5. Diretrizes de Uso de Componentes

- **Botão primário (`.btn-primary`):** um por tela, para a ação principal ("Adicionar livro", "Salvar livro", "Entrar"). Ações secundárias usam `.btn-outline-*`.
- **Selos de status (`.badge-status`):** sempre ícone + texto, nunca só cor.
- **Cards de livro (`.book-card`):** capa, título, autoria, avaliação (só em livros lidos) e o link "Ver detalhes". O card inteiro é clicável.
- **Campos (`.campo-bt`):** fundo do papel; ao receber foco ficam brancos com anel verde.
- **Foco por teclado:** anel verde de 0,25 rem em links, botões e cards.
- **Movimento:** transições curtas; desligadas quando o sistema pede menos movimento.

### 6. Componentes do Framework no Protótipo

| No protótipo | Componente do Bootstrap | Onde aparece |
|---|---|---|
| Barra superior | Navbar (`navbar navbar-expand-lg`) | estante, formulário e detalhes |
| Menu do celular | Offcanvas (`offcanvas`) — usa JavaScript do Bootstrap | estante, formulário e detalhes |
| Livro na estante | Card (`card`) em Grid (`row row-cols-*`) | estante |
| Confirmação de exclusão | Modal (`modal`) — usa JavaScript do Bootstrap | detalhes |
| Busca | Input Group (`input-group`) | estante e formulário (ISBN) |

### 7. Dos Tokens ao Código

As variáveis Sass são definidas **antes** do `@import` do Bootstrap, que só usa os valores dele quando ninguém definiu antes (`!default`).

| Token | No código (`assets/scss/_variables.scss`) | Efeito no Bootstrap |
|---|---|---|
| Primary | `$bt-primary` → `$primary` | botões, links, foco |
| Background | `$bt-bg` → `$body-bg` | fundo das páginas |
| Text | `$bt-text` → `$body-color` | texto |
| Border | `$bt-border` → `$border-color` | bordas |
| Success / Info / Warning / Danger | `$bt-success` etc. → `$success` etc. | alertas e botões de cada cor |
| Fonte dos títulos | `$bt-font-titulo` → `$headings-font-family` | `h1` a `h6` |
| Fonte do corpo | `$bt-font-corpo` → `$font-family-sans-serif` | texto |
| Raios | `$border-radius`, `$border-radius-lg` | botões, campos, cards |
| Entrelinha | `$line-height-base`, `$headings-line-height` | texto e títulos |
| Botões e campos | `$btn-padding-*`, `$input-padding-*` | tamanho dos controles |

Tokens que o Bootstrap não tem (accent, surface, muted, chip) ficam só em `$bt-*` e são usados nas regras próprias. Funções e mixins próprios: `espaco()`, `superficie`, `selo-status`, `anel-foco`, `sombra-livro`, `titulo-fluido`.

### 8. Imagens

- Capas em **WebP** (256 px de largura e tamanho completo) com JPG de reserva, dentro de `<picture>` com `srcset` e `sizes`.
- `loading="lazy"` nas capas da estante; `width` e `height` informados para evitar salto de layout.
- Texto alternativo descreve cada capa.
