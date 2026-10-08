# Blueprint — warsha-tahla.github.io

Measured on 2026-10-08.

## 1. What this is

A static site of four pages with no build step of its own and no server. GitHub Pages serves `main`. The only moving
parts are three outside services, each switched off by emptying its value in `site.js`.

## 2. Health

| Part | State |
|---|---|
| Pages | Four: Arabic, English, privacy, terms |
| Chrome | Drawn by `almukhtar-identity` 3.22.0 through `build-pages.mjs` |
| Visitors | Cloudflare Web Analytics, no cookie |
| Contact | WhatsApp Business and Formspree |
| Phone width | Single column under 860px |

## 3. Risks

- **The effort numbers are typed.** The counts in the «المجهود» section were measured on 2026-10-08 and do not update
  themselves. Task T-559 («every number comes from its source») covers it.
- **The English page wears an Arabic chrome.** The identity's footer and motto are Arabic only, as the identity defines
  them.
- **Formspree's free tier** caps monthly submissions; a busy month would lose messages silently.

## 4. What not to build

A server, an account system, or a page about Omar. The site shows the work and opens a conversation; the conversation
continues on WhatsApp or by mail.
