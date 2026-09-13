# BookTracker - Gerenciador de Leituras

**Autor:** Isaque Cordeiro

## 📖 Descrição do Projeto
O BookTracker é uma aplicação web responsiva para gerenciamento de biblioteca pessoal. O usuário cadastra livros (buscando os dados automaticamente pelo ISBN na **Google Books API**), organiza a estante por status de leitura (`Quero Ler`, `Lendo`, `Lido`) e registra avaliações das obras concluídas. Os dados são persistidos em uma **API Fake (JSON Server)** e no **Web Storage** do navegador.

## 📚 Documentação do Projeto
* 📄 [Product Requirements Document (PRD)](docs/prd.md) - Escopo, atores, histórias de usuário e regras de negócio.
* 🛠️ [Especificação Técnica](docs/spec.md) - Versões das tecnologias e contrato da API pública.
* 🏗️ [Arquitetura e Design System](docs/architecture.md) - Modelo de dados (DER), API fake e Design Tokens.

## 🎨 Design
* 🎨 Design System: [`docs/architecture.md#design-tokens`](docs/architecture.md)
* 🖼️ Protótipo no Figma: <!-- COLE AQUI O LINK DO SEU PROJETO NO FIGMA --> `_adicionar link_`
* 🤖 Protótipo no Google Stitch: <!-- COLE AQUI O LINK DO SEU PROJETO NO STITCH --> `_adicionar link_`

## 🌐 Site em Produção
<!-- APÓS O DEPLOY, COLE AQUI A URL DO GITHUB PAGES -->
`_adicionar URL após o deploy no GitHub Pages_`

## 💻 Tecnologias e Dependências
| Tecnologia | Uso |
|---|---|
| **Bootstrap 5.3.8** | Framework CSS: grid responsivo, navbar, cards, modais, formulários. |
| **JavaScript (ES6+)** | Lógica de negócio, DOM e requisições assíncronas (`fetch`). |
| **jQuery** | Manipulação do DOM, eventos e animações. |
| **jQuery Mask Plugin** | Máscara de entrada no campo ISBN. |
| **Sass (SCSS)** | Variáveis, mixins e funções para modularizar o CSS. |
| **JSON Server** | API Fake para simular um backend REST. |
| **Google Books API v1** | API pública real para busca de livros por ISBN. |

### Escolha do framework CSS e da API pública

O projeto utiliza **Bootstrap 5.3.8** porque seu grid mobile-first e seus componentes prontos (como cards, formulários e modais) atendem às telas planejadas e facilitam adaptar a estante de livros a celulares, tablets e desktops. A versão 5 não depende de jQuery para os componentes interativos. O projeto Bootstrap segue ativo, publica a série 5.3 e usa licença MIT, adequada ao uso neste projeto. [Documentação e versões](https://getbootstrap.com/docs/versions/) · [Repositório e releases](https://github.com/twbs/bootstrap/releases) · [Licença MIT](https://getbootstrap.com/docs/5.3/about/license/) · [Migração para Bootstrap 5](https://getbootstrap.com/docs/5.3/migration/).

A **Google Books API v1** agrega valor ao cadastro: uma busca pelo ISBN pode preencher automaticamente título, autores e capa, reduzindo a digitação manual. A API aceita consultas pelo parâmetro `q` com o operador `isbn:`. [Documentação oficial da busca](https://developers.google.com/books/docs/v1/using).

## Checklist da Atividade 06

- [ ] Configurei minha identidade no Git.
- [ ] Clonei o repositório do meu projeto.
- [x] Inicializei o NPM (`package.json`).
- [x] Configurei o `.gitignore` para ignorar `node_modules` e `.env`.
- [x] Instalei `jquery` e `uuid` como dependências de produção.
- [x] Instalei `gh-pages` como dependência de desenvolvimento.
- [ ] Fiz commit e push para a branch `main`.
- [ ] Salvei screenshots do terminal e gerei o PDF de entrega.

## ✅ Checklist | Indicadores de Desempenho (ID) dos Resultados de Aprendizagem (RA)

### RA1 - Utilizar Frameworks CSS para estilização de elementos HTML e criação de layouts responsivos.
- [ ] ID 01 - Prototipa interfaces adaptáveis para no mínimo mobile e desktop, usando Figma ou IA (Stitch).
- [ ] ID 02 - Implementa layout responsivo com Framework CSS (Bootstrap 5) usando Flexbox ou Grid do próprio framework.
- [ ] ID 03 - Implementa layout responsivo com CSS puro, usando Flexbox ou Grid Layout.
- [ ] ID 04 - Utiliza componentes prontos do Framework CSS (card, button) e componentes JavaScript (modal).
- [ ] ID 05 - Cria layout fluido usando unidades relativas (vw, vh, %, em, rem) no lugar de px.
- [ ] ID 06 - Aplica um Design System consistente (cores, tipografia, padrões de componentes) em toda a aplicação.
- [ ] ID 07 - Utiliza Sass (SCSS) aplicando variáveis, mixins e funções para modularizar o código.
- [ ] ID 08 - Aplica tipografia fluida (função clamp() + unidades relativas).
- [ ] ID 09 - Aplica técnicas de responsividade de imagens usando CSS (object-fit, containers relativos).
- [ ] ID 10 - Otimiza imagens usando formatos modernos (WebP) e carregamento adaptativo (srcset/picture).

### RA2 - Realizar tratamento de formulários e aplicar validações customizadas no lado cliente.
- [ ] ID 11 - Implementa validação HTML nativa (campos obrigatórios, tipos, limites) com mensagens de erro/sucesso.
- [ ] ID 12 - Aplica expressões regulares (REGEX) para validações customizadas (ISBN).
- [ ] ID 13 - Utiliza elementos de seleção em formulários (select de status, radio/checkbox de filtros).
- [ ] ID 14 - Implementa leitura e escrita no Web Storage (localStorage/sessionStorage).

### RA3 - Aplicar ferramentas para otimização do processo de desenvolvimento web.
- [ ] ID 15 - Configura ambiente com Node.js e NPM para gerenciamento de pacotes e dependências.
- [ ] ID 16 - Utiliza boas práticas de versionamento no Git/GitHub (branch main, .gitignore).
- [x] ID 17 - Mantém um README.md padronizado, conforme template da disciplina, com checklist preenchido.
- [ ] ID 18 - Organiza arquivos do projeto de forma modular.
- [ ] ID 19 - Configura linters e formatadores (ESLint, Prettier).

### RA4 - Aplicar bibliotecas de funções e componentes em JavaScript para aprimorar a interatividade de páginas web.
- [ ] ID 20 - Utiliza jQuery para manipulação do DOM e interatividade (eventos, animações).
- [ ] ID 21 - Integra e configura um plugin jQuery relevante (jQuery Mask Plugin).

### RA5 - Efetuar requisições assíncronas para uma API fake e APIs públicas.
- [ ] ID 22 - Realiza requisições assíncronas para uma API fake (JSON Server) para persistir dados de um formulário.
- [ ] ID 23 - Realiza requisições assíncronas para uma API fake para exibir dados na página.
- [ ] ID 24 - Realiza requisições assíncronas para APIs públicas reais (Google Books API), tratando erros.

## 🚀 Instruções de Execução
1. Clone o repositório:
   ```bash
   git clone https://github.com/<seu-usuario>/gerenciador-de-leituras.git
   ```
2. Abra o projeto no VS Code.
3. Instale as dependências (Node.js e NPM necessários):
   ```bash
   npm i
   ```
4. Execute a API Fake (JSON Server):
   ```bash
   npm run json:server
   ```
   Por padrão, a API executa em `http://localhost:3000`.
5. Abra o arquivo `index.html` no navegador (ou use a extensão *Live Server*).

> Para a versão em produção (GitHub Pages), as dependências são carregadas via CDN.

## 📱 Telas da Aplicação
<!-- INSIRA AQUI PRINTS DAS TELAS ASSIM QUE FOREM IMPLEMENTADAS -->
`_screenshots serão adicionados durante as Entregas 2 e 3_`

---

## 🔮 Roadmap de Entregas
- **Entrega 1:** Documentação (prd.md + architecture.md) e prototipação no Stitch/Figma. ✅
- **Entrega 2:** Tradução do protótipo para HTML5/CSS3 com Bootstrap 5 (layout responsivo). ⏳
- **Entrega 3:** JavaScript (validações, Web Storage, fetch), APIs e deploy no GitHub Pages. ⏳
