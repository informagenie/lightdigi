# Light Digital Consulting

Refonte front-end de la landing page Light Digital Consulting.

## Stack

- Next.js App Router
- React
- TypeScript strict
- pnpm
- SCSS + CSS Modules
- GSAP + ScrollTrigger

## Commandes

```bash
pnpm install
pnpm dev
pnpm lint
pnpm typecheck
pnpm build
```

## Regles de contenu

Les contenus commerciaux visibles doivent rester centralises dans `src/data`.
Les chiffres, contacts, offres et references non confirmes sont conserves dans
`src/data/pending-validation.ts` et ne doivent pas etre affiches comme donnees
publiques avant validation.

## Contraintes fortes

Ce projet ne doit pas utiliser WordPress, Elementor, Tailwind, Bootstrap, UI kit,
CMS ou backend pendant la phase 1.
