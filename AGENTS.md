# Instructions Projet

Lire `LIGHT_DIGITAL_MASTER_INSTRUCTIONS.md` avant toute modification.

## Priorites

- Respecter la phase 1: landing page front-end uniquement.
- Utiliser Next.js App Router, React, TypeScript strict, pnpm, SCSS Modules.
- Centraliser les contenus dans `src/data`.
- Ne pas inventer de client, chiffre, contact, resultat, membre d'equipe ou offre.
- Mettre les donnees a confirmer dans `src/data/pending-validation.ts`.
- Verifier avant livraison: `pnpm lint`, `pnpm typecheck`, `pnpm build`.

## Interdits

- WordPress, Elementor, WooCommerce ou logique de theme WordPress.
- Tailwind, Bootstrap, Material UI, Chakra, Ant Design ou template marketplace.
- CMS, backend, analytics ou tracking sans instruction explicite.
- Polices proprietaires non fournies ou non licenciees.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
