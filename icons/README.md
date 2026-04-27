# Icons

Chrome Web Store requires three icon sizes referenced by `manifest.json`.
Drop the final PNG files in this directory before submission.

## Required files

| File           | Size      | Purpose                                                  |
| -------------- | --------- | -------------------------------------------------------- |
| `icon-16.png`  | 16 × 16   | Toolbar icon (used in menus and small tooltips)          |
| `icon-48.png`  | 48 × 48   | Extensions management page                                |
| `icon-128.png` | 128 × 128 | Chrome Web Store listing and installation prompt          |

## Format requirements

- **Format:** 8-bit PNG (PNG-24 with alpha is fine; PNG-8 also accepted).
- **Color space:** sRGB.
- **Background:** transparent. The Web Store auto-applies a rounded mask;
  the visible art should sit inside a ~12% safe-zone padding so corners
  don't get clipped.
- **Filenames:** exactly as listed above. Manifest paths are case-sensitive.

## Design guidance

- The current visual identity is the lowercase wordmark **"codi"** in a
  dark slate (#0f172a) with a subtle gradient. See `popup/popup.css` for
  the in-popup logo styling — match that direction for icons so the
  toolbar, popup, and Web Store listing all read as one product.
- Avoid fine line-weights at 16 × 16; the icon will be rendered at
  device-pixel sizes that punish strokes thinner than 1.5 px.
- Avoid color-only contrast: the toolbar can render against light or
  dark Chrome themes.

## Asset pipeline (suggested)

1. Author at 1024 × 1024 in your design tool of choice.
2. Export at 128, 48, 16 with no anti-alias smoothing for the 16 px raster.
3. Run through `pngcrush` or `oxipng` to keep the bundle small.
4. Drop into this directory and verify with
   `chrome://extensions` → **Load unpacked** → reload extension.

The scaffold ships without final icons because they are out of scope for
the engineering scaffold. The extension will load and run with missing
icon files, but **the Chrome Web Store listing requires all three before
the review can begin.**
