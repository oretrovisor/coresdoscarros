# Photos

Drop car photos here following this filename convention:

```
YEAR-model-paint-name.jpg
```

## Rules

- **All lowercase**
- **Hyphens between words** — no spaces, no underscores
- **No accents** (use `amarelo-boreal`, not `amarelo-bóreal`)
- **No special characters** — `/`, `,`, `.` etc. get dropped
- `R/T` becomes `rt`; `MET.` becomes `metalico`

## Examples

- `1971-dodge-charger-rt-amarelo-boreal.jpg`
- `1974-dodge-dart-ocre-amarelo-barroco.jpg`
- `1972-dodge-charger-marrom-castanha-metalico.jpg`

## Wiring it up

After adding a photo here, set `photo` **and** `photoCaption` on that color's entry in `src/data.js`:

```js
{ code: "BGY5", name: "AMARELO BOREAL", hex: "#DE5C1E",
  photo: "1971-dodge-charger-rt-amarelo-boreal.jpg",
  photoCaption: "1971 Dodge Charger R/T Amarelo Boreal" },
```

### Caption format

Captions appear small and italicized below the photo. Follow this template:

```
{year} {make} {model} {Paint Name in Title Case}
```

Examples:
- `1971 Dodge Charger R/T Amarelo Boreal`
- `1974 Dodge Dart Ocre/Amarelo Barroco`
- `1972 Dodge Charger Marrom Castanha Metálico`

The caption is also used as the image's `alt` text for accessibility, so write it as a natural description.

### Fallback

The detail card resolves the file via Vite's `BASE_URL`, so it works in dev and on GitHub Pages. If the file is missing or fails to load, the UI falls back to the "Foto do carro" placeholder automatically.
