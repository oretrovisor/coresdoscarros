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

After adding a photo here, set `photo: "<filename>"` on that color's entry in `src/data.js`:

```js
{ code: "BGY5", name: "AMARELO BOREAL", hex: "#DE5C1E",
  photo: "1971-dodge-charger-rt-amarelo-boreal.jpg" },
```

The detail card resolves the file via Vite's `BASE_URL`, so it works in both dev and on GitHub Pages. If the file is missing or fails to load, the UI falls back to the "Foto do carro" placeholder automatically.
