# Cores dos Carros

Catálogo histórico das cores de tinta automotiva da **Chrysler do Brasil** entre **1970 e 1981**, organizadas por ano com código original, nome de fábrica, foto e vídeo de referência quando disponíveis.

🔗 **Site no ar:** https://oretrovisor.github.io/coresdoscarros/

Um projeto de [O Retrovisor](https://oretrovisor.com/), com inspiração na [coleção do AGBadolato](https://www.youtube.com/@agbadolato/videos).

---

## Sobre o projeto

A ideia é simples: reunir num só lugar a paleta de cores oferecida pela Chrysler do Brasil em cada linha (1970, 1971, 1972…), com material visual que ajude a identificar a cor "como ela aparecia" — fotos de carros restaurados, vídeos de canais especializados, e a memória dos códigos de fábrica.

Os dados foram compilados a partir de fontes na internet — principalmente a [tabela de cores do Chrysler Clube](https://www.chryslerclube.com.br/frisinho-cores.html) e [esta publicação de @chryslerdobrasil no Instagram](https://www.instagram.com/p/B-H9MvjACgl). **Os dados são provisórios e ainda estão em revisão.** Fotos e vídeos têm finalidade ilustrativa; as cores na tela não devem ser usadas como referência para restaurações.

---

## Tecnologias

- **Vite + React** (single-page app)
- **Tailwind CSS** (utilitários + algumas classes próprias em `src/index.css`)
- **Font Awesome** (todos os ícones de UI)
- **GitHub Pages** + **GitHub Actions** (deploy automático)

Fontes: Luxurious Script (logotipo), Inter (corpo), JetBrains Mono (rótulos/metadados).

---

## Como rodar localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173/coresdoscarros/`.

Para gerar a build de produção:

```bash
npm run build      # gera /dist
npm run preview    # serve o /dist localmente para testar
```

---

## Como o deploy funciona

Todo `push` para `main` dispara o workflow `.github/workflows/deploy.yml`, que:

1. Roda `npm install` + `npm run build` no Ubuntu
2. Publica o conteúdo de `/dist` no GitHub Pages

Não há ambiente de homologação — testa localmente (ou direto no PR) antes de mandar pra `main`.

A `vite.config.js` define `base: '/coresdoscarros/'`, então **todos os assets respeitam esse prefixo automaticamente**. Para usar um domínio próprio (ex.: `coresdoscarros.com.br`), ajustar o `base` para `'/'` e configurar o domínio nas settings do Pages.

---

## Estrutura do projeto

```
src/
├── data.js                  # TUDO: cores, modelos, helpers
├── App.jsx                  # raiz, gerencia ano/cor selecionados
├── index.css                # variáveis CSS (paleta) + classes próprias
└── components/
    ├── TopStrip.jsx         # faixa "UM PROJETO DE O Retrovisor"
    ├── Header.jsx           # logo + título + botão Contato
    ├── Selectors.jsx        # Marca + pílulas de Ano (uma linha por década)
    ├── ColorGrid.jsx        # lista da paleta na coluna esquerda
    ├── DetailCard.jsx       # card grande de detalhe + lightbox
    ├── Footer.jsx           # três callouts + rodapé
    ├── Logo.jsx             # logo da marca (chips de cor empilhados)
    ├── UnconfirmedBadge.jsx # ícone "?" para entradas não confirmadas
    └── InfoBadge.jsx        # ícone "i" reutilizável com tooltip

public/photos/               # fotos dos carros (.jpg)
.github/workflows/deploy.yml # CI: build + deploy no GitHub Pages
```

---

## Editando os dados

Tudo vive em **`src/data.js`**. Cada cor é um objeto dentro de `DATA[ano]`.

### Anatomia de uma cor

```js
{
  code: "BGY5",                                       // obrigatório
  name: "AMARELO BOREAL",                             // obrigatório (CAIXA ALTA)
  hex: "#DE5C1E",                                     // obrigatório (cor do swatch)
  unconfirmed: true,                                  // opcional — mostra ícone "?"
  video: "J5uxLHuhZQo",                               // opcional — ID do YouTube
  photo: "1971-dodge-charger-rt-amarelo-boreal.jpg",  // opcional — arquivo em public/photos/
  photoCaption: "1971 Dodge Charger R/T Amarelo Boreal", // opcional — legenda
  models: ["Charger R/T"],                            // opcional — sobrescreve a lista do ano
}
```

A ordem dentro do array não importa: o `data.js` reordena cada ano alfabeticamente em tempo de carregamento (ciente de acentos pt-BR).

### Adicionando uma foto

1. Salva a imagem em **`public/photos/`** seguindo o padrão:
   ```
   {ano}-{modelo}-{nome-da-cor}.jpg
   ```
   Tudo em minúsculas, com hífens, **sem acentos** e sem caracteres especiais. Exemplos:
   - `1971-dodge-charger-rt-amarelo-boreal.jpg`
   - `1974-dodge-dart-ocre-amarelo-barroco.jpg`

2. Na cor correspondente, adiciona:
   ```js
   photo: "1971-dodge-charger-rt-amarelo-boreal.jpg",
   photoCaption: "1971 Dodge Charger R/T Amarelo Boreal",
   ```

3. A foto aparece automaticamente no card de detalhe. Se o arquivo não existir ou falhar ao carregar, o placeholder "Foto do carro" entra no lugar.

Mais detalhes: [`public/photos/README.md`](public/photos/README.md).

### Adicionando um vídeo

Pega o ID do YouTube na URL (`https://www.youtube.com/watch?v=ABC123XYZ` → `ABC123XYZ`) e cola em `video: "ABC123XYZ"`. O detalhe da cor renderiza o embed via `youtube-nocookie.com`.

### Marcando como não confirmado

Para entradas cujo código/nome ainda precisam de verificação, adiciona `unconfirmed: true`. Um ícone "?" aparece no card e no detalhe, com tooltip *"Não confirmado"*.

---

## Modelos por ano

A lista de modelos exibida no detalhe é calculada a partir de **`MODELS`** em `data.js`, que tem o intervalo de produção de cada modelo:

```js
export const MODELS = [
  { name: "1800",        from: 1973, to: 1975 },
  { name: "Charger",     from: 1971, to: 1981 },
  { name: "Charger R/T", from: 1971, to: 1981 },
  { name: "Dart Sedã",   from: 1970, to: 1981 },
  { name: "Dart Coupé",  from: 1970, to: 1981 },
  { name: "LeBaron",     from: 1979, to: 1980 },
  { name: "Magnum",      from: 1979, to: 1981 },
  { name: "Polara",      from: 1976, to: 1981 },
  // …
];
```

`modelsForYear(year)` filtra os modelos cujo intervalo cobre aquele ano.

Quando uma cor é específica de um modelo (caso do Amarelo Boreal em 1971, exclusivo do Charger R/T), usa o override `models: ["Charger R/T"]` na própria cor — ele substitui a lista do ano.

---

## Sobre as cores (hex)

Os hex foram estimados a partir do nome da cor em português (AMARELO → tom amarelado, etc.) e em alguns casos ajustados visualmente com base em fotos/vídeos. **Não são valores oficiais de fábrica.** Substituir por valores autoritativos é literalmente uma edição em `src/data.js`.

---

## Convenções de design

- **Paleta da marca:** teal `#1c7870`, creme `#FFE8A8`, branco, near-black `#222222`. Detalhes em `src/index.css` (`:root`).
- **Três tipos de callout** (no rodapé):
  - `.callout-warning` (âmbar, ícone `!`) — alertas
  - `.callout-info` (azul suave, ícone `i`) — informações/fontes
  - `.callout-thanks` (verde-água, ícone `♥`) — agradecimentos
- **Pílulas de ano** quebram automaticamente uma linha por década (1970s, 1980s…). Implementado em `Selectors.jsx`.
- **Lightbox de foto** usa React Portal (`createPortal`) para escapar do contexto de empilhamento do card e cobrir a tela inteira.

---

## Créditos e fontes

- **Conteúdo:** [Chrysler Clube do Brasil](https://www.chryslerclube.com.br/frisinho-cores.html), [@chryslerdobrasil](https://www.instagram.com/chryslerdobrasil/), [AGBadolato](https://www.youtube.com/@agbadolato/videos)
- **Idealização:** [O Retrovisor](https://oretrovisor.com/)
- **Logo de O Retrovisor:** servida diretamente do site oficial

---

## Licença

A definir. Os dados de cores e códigos são informações históricas de domínio público; fotos e vídeos pertencem aos seus respectivos autores e foram incluídos apenas para fins ilustrativos.
