# Overview — warsha-tahla.github.io

For anyone meeting this repository for the first time.

## What it is

The public face of Warsha Tahla, served by GitHub Pages from `main` at <https://warsha-tahla.github.io/>. It exists so
Omar can show the workshop and the effort behind it, in LinkedIn posts and on WhatsApp Business, count who visits, and
let a visitor ask about an idea or request a project.

## What is in it

| Path | What it is |
|---|---|
| `index.html` | The Arabic landing page |
| `en/index.html` | The English mirror |
| `privacy.html`, `terms.html` | The privacy and usage policies, in Arabic |
| `styles.css`, `legal.css` | The site's own layout, on top of the identity's sheets |
| `site.js` | The three outside values (WhatsApp number, Formspree form, Cloudflare token) and the code that uses them |
| `assets/almukhtar-identity/` | Sheets, fonts and the mark, copied from the published identity |

## Who writes what

- **The identity draws the chrome.** `_tools/site/build-pages.mjs` in the workshop copies the identity's assets and
  redraws each page's header and footer from `almukhtar-identity`'s registry entry `warsha-tahla`. A page keeps its own
  parts between `<!-- zone:center -->`, `<!-- zone:end -->` and `<!-- zone:foot -->` comments; anything else in the
  header or footer is overwritten on the next build.
- **The stamp comes from `.docs/CHANGELOG.md`**: its newest `## X.Y.Z — YYYY-MM-DD` entry.
- **The content is written here**: the sections between the header and the footer.

## The fence

The private workspace is a different repository, so nothing of it reaches this one by accident. Nothing here names
Octohub or Tahakom work, and there is no page about Omar beyond the footer's credit.
