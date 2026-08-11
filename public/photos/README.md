# Photos

Drop car photos here following the filename **and** the size convention below.

## Filename

```
YEAR-model-paint-name.jpg
```

Rules:

- **All lowercase**
- **Hyphens between words** — no spaces, no underscores
- **No accents** (use `amarelo-boreal`, not `amarelo-bóreal`)
- **No special characters** — `/`, `,`, `.` etc. get dropped
- `R/T` becomes `rt`; `MET.` becomes `metalico`; `Sedã` becomes `seda`
- Always `.jpg` (convert `.webp`, `.png`, `.heic` etc. before saving)

Examples:

- `1971-dodge-charger-rt-amarelo-boreal.jpg`
- `1970-dodge-dart-seda-verde-imperial.jpg`
- `1972-dodge-charger-rt-branco-polar.jpg`

## Size & aspect

Every photo is normalized before commit:

- **Fixed aspect ratio: 3 : 2 landscape** — the same aspect as the site's thumbnail, so there is no letterbox in the lightbox.
- **Fixed dimensions: 1800 × 1200 px** (center-crop from source; upscale if needed to hit exactly this size).
- **JPEG quality: 85** (mozjpeg encoder for smaller files).
- Convert `.webp`, `.png`, `.heic`, etc. before saving.
- Target file size: under ~500 KB.

`fit: 'cover'` crops from center by default. If the important subject sits off-center in the source, pick a different `position` (`'north'`, `'south'`, `'east'`, `'west'`, or a `left,top` object) so the car stays in frame.

Quick command using [sharp](https://sharp.pixelplumbing.com/) (installed on demand):

```bash
node -e "require('sharp')('SOURCE').resize({width:1800,height:1200,fit:'cover',position:'center'}).jpeg({quality:85,mozjpeg:true}).toFile('public/photos/FILENAME.jpg')"
```

## Wiring it up

After adding a photo here, set `photo` **and** `photoCaption` on that color's entry in `src/data.js`:

```js
{ code: "BGY5", name: "AMARELO BOREAL", hex: "#DE5C1E",
  photo: "1971-dodge-charger-rt-amarelo-boreal.jpg",
  photoCaption: "1971 Dodge Charger R/T Amarelo Boreal" },
```

Multiple photos of the same color? Use an array. Use a suffix like `-front`, `-rear`, `-side` on the filenames:

```js
{ code: "BGY5", name: "AMARELO BOREAL", hex: "#DE5C1E",
  photo: [
    "1971-dodge-charger-rt-amarelo-boreal-front.jpg",
    "1971-dodge-charger-rt-amarelo-boreal-rear.jpg",
  ],
  photoCaption: "1971 Dodge Charger R/T Amarelo Boreal" },
```

`photoCaption` can be a single string (shared across all photos) or an array with one caption per photo.

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
