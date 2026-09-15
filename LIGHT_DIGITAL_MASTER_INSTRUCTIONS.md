# LIGHT DIGITAL CONSULTING — MASTER PROJECT INSTRUCTIONS

> **Fichier maître d’instructions pour Codex, Cursor et tout autre agent de développement**
>
> Statut : **source de vérité du projet**
>
> Phase actuelle : **Phase 1 — Landing page front-end uniquement**
>
> Projet : **Refonte du site Light Digital Consulting**
>
> Toute décision technique ou visuelle prise par un agent doit respecter ce document. En cas de contradiction avec une ancienne instruction du projet, **ce fichier prévaut**.

---

# 1. OBJECTIF DU PROJET

Construire une nouvelle présence digitale pour **Light Digital Consulting**, avec une direction artistique premium, moderne, stratégique et immersive.

Le site doit :

- renforcer la crédibilité de l’agence ;
- améliorer nettement l’expérience UX/UI ;
- mieux présenter les services ;
- valoriser les références et réalisations ;
- augmenter les prises de contact et demandes de devis ;
- donner à Light Digital une image d’agence créative et technologique de niveau international ;
- conserver une identité visuelle propre à Light Digital Consulting ;
- être pensé pour le marché congolais, africain et international ;
- être rapide, responsive, accessible et optimisé pour le référencement.

La première phase ne concerne **qu’une landing page complète côté front-end**.

Aucun back-office et aucun CMS ne doivent être ajoutés pour le moment.

---

# 2. RÈGLE ABSOLUE — PAS DE WORDPRESS

Le projet **n’utilise plus WordPress**.

Il est formellement interdit d’introduire :

- WordPress ;
- Elementor ;
- WooCommerce ;
- PHP WordPress ;
- thèmes WordPress ;
- plugins WordPress ;
- shortcodes ;
- widgets Elementor ;
- dépendances destinées à une migration WordPress ;
- structure pensée autour d’un futur thème WordPress.

Le site doit être conçu comme une **application web autonome**.

Ne pas sacrifier l’architecture ou la qualité du front-end pour préserver une éventuelle compatibilité avec WordPress ou Elementor.

---

# 3. STACK TECHNIQUE OBLIGATOIRE

## 3.1 Framework

Utiliser :

- **Next.js**
- **App Router**
- **React**
- **TypeScript en mode strict**

Utiliser la dernière version stable compatible avec la version LTS de Node.js disponible au moment de l’initialisation du projet.

Ne pas utiliser l’ancien `pages/ router`.

---

## 3.2 Runtime et gestionnaire de paquets

Utiliser :

- **Node.js LTS**
- **pnpm**

Créer et maintenir :

```text
.nvmrc
package.json
pnpm-lock.yaml
```

Ne jamais mélanger npm, Yarn et pnpm dans le même projet.

---

## 3.3 Styling

Utiliser :

- **SCSS**
- **CSS Modules**
- **CSS Custom Properties / variables CSS**
- système de design centralisé

Exemples :

```text
styles/
  _tokens.scss
  _mixins.scss
  _reset.scss
  _typography.scss
  _animations.scss
  globals.scss
```

Les composants doivent utiliser autant que possible :

```text
ComponentName.module.scss
```

### Interdit

Ne pas utiliser :

- Tailwind CSS ;
- Bootstrap ;
- Material UI ;
- Chakra UI ;
- Ant Design ;
- UI kits préconstruits ;
- templates de marketplace.

L’identité du site doit être construite sur mesure.

---

# 4. ANIMATIONS ET INTERACTIONS

## 4.1 Librairies autorisées

Utiliser principalement :

- **GSAP**
- **GSAP ScrollTrigger**

Pour le smooth scroll :

- **Lenis**, uniquement si son utilisation améliore réellement l’expérience.

Ne pas installer plusieurs librairies d’animation concurrentes sans nécessité.

En particulier, ne pas utiliser Framer Motion et GSAP en parallèle simplement par commodité.

---

## 4.2 Philosophie motion design

Les animations doivent donner une impression :

- premium ;
- fluide ;
- précise ;
- éditoriale ;
- moderne ;
- maîtrisée.

Elles ne doivent jamais devenir décoratives au point de ralentir la navigation.

Prioriser :

- reveal de textes ;
- transitions de panneaux ;
- apparition progressive d’images ;
- mouvements subtils au scroll ;
- transformations de navigation ;
- micro-interactions de boutons ;
- hover sophistiqués ;
- changement d’état du header ;
- transitions entre sections.

Éviter :

- animations permanentes inutiles ;
- objets qui flottent sans raison ;
- effets 3D gratuits ;
- parallaxe excessive ;
- accumulation de `blur`, `glow`, `shadow` et gradients ;
- animations qui perturbent la lecture.

---

# 5. ACCESSIBILITÉ DES ANIMATIONS

Toutes les animations doivent respecter :

```css
@media (prefers-reduced-motion: reduce)
```

Si l’utilisateur demande une réduction des mouvements :

- supprimer le smooth scroll ;
- supprimer les transitions complexes ;
- réduire les reveals ;
- rendre les informations immédiatement accessibles.

Le contenu ne doit jamais dépendre d’une animation pour être lisible.

---

# 6. RÉFÉRENCE UX PRINCIPALE

La référence de comportement et de sophistication est :

**https://www.laboucle.fr/**

Cette référence doit inspirer notamment :

- le header ;
- la navigation ;
- les menus expansifs ;
- les transitions ;
- la hiérarchie typographique ;
- les grandes surfaces graphiques ;
- la respiration des sections ;
- la manière de présenter les services ;
- la sensation de studio/agence premium ;
- les interactions au hover ;
- la richesse du motion design.

## IMPORTANT — NE PAS FAIRE UNE COPIE ILLÉGALE

Il est interdit de :

- copier le code source de La Boucle ;
- extraire ou réutiliser ses assets propriétaires ;
- reprendre ses photographies ;
- reprendre ses textes ;
- reprendre ses logos ;
- reprendre ses illustrations ;
- reproduire pixel par pixel des éléments protégés.

Il faut **reconstruire les principes d’interaction et la sophistication visuelle à partir de zéro**, avec :

- les contenus Light Digital ;
- la charte Light Digital ;
- les images Light Digital ;
- les références clients Light Digital ;
- une composition propre au projet.

Objectif :

> obtenir une expérience comparable ou supérieure en qualité, sans produire un clone littéral.

---

# 7. AUTRES RÉFÉRENCES DE DIRECTION ARTISTIQUE

Les documents du projet mentionnent notamment comme références :

- Atalaku Agency ;
- MKAKATI ;
- Voodoo Group ;
- Totem Experience.

Ces références servent à comprendre le niveau attendu.

Elles ne doivent jamais conduire à mélanger plusieurs styles incompatibles.

La direction finale doit rester cohérente et identifiable comme **Light Digital Consulting**.

---

# 8. IDENTITÉ VISUELLE LIGHT DIGITAL

La marque doit conserver son ADN.

## 8.1 Palette générale

Base recommandée :

- orange Light Digital comme couleur signature ;
- noir profond ;
- blanc chaud / crème ;
- gris neutres ;
- accents secondaires uniquement lorsque nécessaires.

Le design doit moderniser les contrastes sans perdre le caractère orange de la marque.

### À éviter

- trop de gradients dans une seule vue ;
- bleu ou rose utilisés comme nouvelles couleurs principales ;
- effet arc-en-ciel ;
- accumulation de couleurs sans logique ;
- transparences excessives ;
- glassmorphism appliqué partout.

---

# 9. TYPOGRAPHIE

L’objectif initial est de se rapprocher du caractère typographique du site modèle La Boucle.

Cependant :

- ne jamais télécharger illégalement une police commerciale ;
- ne jamais intégrer une police récupérée depuis un site tiers sans licence ;
- ne jamais commit une police propriétaire qui n’a pas été fournie ou licenciée pour le projet.

Créer des design tokens permettant le remplacement immédiat de la police :

```css
--font-display
--font-body
--font-mono
```

Si la police exacte du modèle n’est pas légalement disponible dans le dépôt :

1. utiliser temporairement une alternative autorisée ;
2. garder le système typographique prêt pour un remplacement ;
3. documenter clairement la police temporaire utilisée.

Fallback recommandé :

- Satoshi si disponible légalement ;
- Inter ;
- sans-serif système.

Les titres doivent utiliser une échelle expressive et éditoriale.

---

# 10. PRINCIPES DE DESIGN

Le site doit être :

- minimaliste ;
- premium ;
- immersif ;
- moderne ;
- fluide ;
- éditorial ;
- orienté conversion ;
- très visuel ;
- responsive ;
- mobile-first dans sa logique fonctionnelle.

Le site ne doit pas ressembler à :

- un template corporate générique ;
- un thème WordPress ;
- une grille de cartes SaaS ;
- un dashboard ;
- une landing page générée automatiquement.

---

# 11. STRUCTURE DE LA LANDING PAGE — PHASE 1

Ordre recommandé :

```text
01. Header / navigation
02. Hero
03. Bandeau ou preuve sociale clients
04. Présentation / proposition de valeur
05. Univers de services
06. Réalisations sélectionnées
07. Méthode / approche stratégique
08. Pourquoi Light Digital
09. Chiffres clés validés
10. Équipe ou culture agence
11. Offres / packages si validés
12. CTA de conversion
13. Footer
```

L’ordre peut évoluer légèrement si cela améliore nettement le storytelling, mais aucune section essentielle ne doit être supprimée sans justification.

---

# 12. HEADER

Le header doit être une pièce centrale de l’expérience.

Il doit être :

- minimal au repos ;
- très lisible ;
- premium ;
- sticky ou contextuellement sticky si cela améliore l’UX ;
- parfaitement utilisable au clavier ;
- adapté au mobile.

Navigation de départ suggérée :

```text
Services
Expertises
Réalisations
Agence
Contact
```

Le logo Light Digital doit être clairement visible.

---

# 13. MEGA MENU / MENU IMMERSIF

Ne pas utiliser un simple dropdown générique.

L’ouverture d’un item principal peut devenir un véritable panneau de navigation.

Le menu doit pouvoir :

- occuper une grande partie ou la totalité de la fenêtre ;
- modifier visuellement la composition de l’écran ;
- afficher les familles de services ;
- utiliser de grandes typographies ;
- intégrer numérotation, labels ou informations contextuelles ;
- avoir une animation d’entrée/sortie très propre.

### Accessibilité obligatoire

Le menu doit :

- être navigable avec `Tab` ;
- fonctionner avec `Enter` et `Space` ;
- se fermer avec `Escape` ;
- gérer correctement le focus ;
- utiliser les attributs ARIA pertinents ;
- empêcher le scroll arrière lorsque le panneau mobile plein écran est ouvert.

---

# 14. HERO

Le hero doit produire un impact immédiat.

Il peut inclure :

- grande typographie ;
- animation typographique ;
- image ou vidéo optimisée ;
- composition graphique ;
- micro-animation ;
- CTA primaire ;
- CTA secondaire.

Éviter les slogans génériques.

La première vue doit expliquer immédiatement :

1. ce que fait Light Digital ;
2. pour qui ;
3. avec quelle valeur ajoutée.

CTA suggérés :

```text
Parlez-nous de votre projet
Découvrir nos réalisations
```

---

# 15. SERVICES

Les services ne doivent pas apparaître comme une longue liste incohérente de petites cartes.

Regrouper l’offre en grandes familles.

Structure recommandée :

## 15.1 Stratégie & Audit

Peut inclure :

- stratégie digitale ;
- audit digital ;
- conseil ;
- benchmark ;
- veille ;
- analyse de présence digitale ;
- recommandations stratégiques.

## 15.2 Communication & Social

Peut inclure :

- community management ;
- social media ;
- e-réputation ;
- stratégie de communication ;
- influence marketing ;
- animation de communautés.

## 15.3 Web & Produits Digitaux

Peut inclure :

- sites web ;
- sites e-commerce ;
- applications mobiles ;
- applications métiers ;
- UX/UI ;
- développement ;
- SEO ;
- SEA.

## 15.4 Création & Contenus

Peut inclure :

- branding ;
- identité visuelle ;
- design graphique ;
- photographie ;
- production vidéo ;
- media content ;
- contenus pour réseaux sociaux.

## 15.5 Acquisition & Activation

Peut inclure :

- Google Ads ;
- Meta Ads ;
- campagnes display ;
- remarketing ;
- génération de trafic ;
- génération de leads ;
- SMS broadcast ;
- campagnes digitales ;
- formation ;
- accompagnement marque blanche si validé.

Les informations doivent provenir des documents de l’agence ou d’éléments validés.

---

# 16. PORTFOLIO / RÉALISATIONS

Le portfolio est une priorité.

Il doit fonctionner comme une vraie vitrine.

Ne pas afficher les projets comme de simples miniatures de même taille.

Utiliser :

- grandes images ;
- compositions asymétriques ;
- mockups ;
- présentation éditoriale ;
- titres de projets ;
- type de mission ;
- disciplines ;
- année si validée ;
- résultats si validés ;
- filtres seulement s’ils apportent réellement une valeur UX.

Le design doit permettre l’évolution vers de futures pages détaillées de case study.

---

# 17. CLIENTS ET RÉFÉRENCES

Les documents fournis au projet présentent ou citent notamment plusieurs références historiques de l’agence.

Cependant :

## RÈGLE ABSOLUE

Un client ne doit être affiché publiquement que s’il est :

- présent dans une source fournie ;
- présent dans le site officiel ;
- confirmé explicitement par le propriétaire du projet ;
- accompagné si nécessaire d’un visuel ou logo exploitable légalement.

Ne jamais inventer une relation client.

Ne jamais déduire qu’une marque est cliente uniquement parce que son logo apparaît dans une capture ambiguë.

Des références telles que Novotel Kinshasa La Gombe, Shell ou JTI peuvent être mentionnées dans la documentation interne, mais **ne doivent pas être publiées comme cas clients tant que leur statut n’est pas validé pour la version publique du site**.

---

# 18. CHIFFRES CLÉS

Les statistiques animées peuvent fortement renforcer la crédibilité.

Cependant :

- ne jamais inventer de chiffre ;
- ne jamais extrapoler ;
- ne jamais actualiser arbitrairement un ancien chiffre ;
- ne jamais transformer une estimation en donnée officielle.

Si une statistique est ancienne ou non confirmée, la placer dans :

```text
data/pending-validation.ts
```

et ne pas l’afficher dans l’interface de production.

---

# 19. CONTENU

Tous les textes visibles doivent être centralisés dans des fichiers de données.

Exemple :

```text
src/data/
  navigation.ts
  home.ts
  services.ts
  clients.ts
  projects.ts
  metrics.ts
  team.ts
  contact.ts
```

Ne pas disperser les contenus commerciaux importants dans les composants React.

Cela doit permettre :

- correction rapide ;
- traduction future ;
- maintenance ;
- ajout futur d’un CMS headless sans réécrire le design.

---

# 20. AUCUN CMS EN PHASE 1

Ne pas installer de CMS pour la première landing page.

Interdit pour cette phase :

- Sanity ;
- Strapi ;
- Contentful ;
- Payload ;
- Directus ;
- WordPress headless ;
- Supabase comme pseudo-CMS.

Le contenu doit d’abord être stabilisé dans le code.

Une phase ultérieure pourra décider d’un CMS headless si cela devient nécessaire.

---

# 21. ARCHITECTURE DE DOSSIERS RECOMMANDÉE

```text
light-digital/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.scss
│   ├── robots.ts
│   ├── sitemap.ts
│   └── icon.*
│
├── src/
│   ├── components/
│   │   ├── navigation/
│   │   │   ├── Header/
│   │   │   ├── MegaMenu/
│   │   │   └── MobileMenu/
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero/
│   │   │   ├── ClientMarquee/
│   │   │   ├── Intro/
│   │   │   ├── Services/
│   │   │   ├── SelectedWorks/
│   │   │   ├── Approach/
│   │   │   ├── WhyLight/
│   │   │   ├── Metrics/
│   │   │   ├── Team/
│   │   │   ├── FinalCTA/
│   │   │   └── Footer/
│   │   │
│   │   └── ui/
│   │       ├── Button/
│   │       ├── LinkArrow/
│   │       ├── RevealText/
│   │       ├── SectionLabel/
│   │       ├── MediaFrame/
│   │       └── Container/
│   │
│   ├── data/
│   │   ├── navigation.ts
│   │   ├── services.ts
│   │   ├── clients.ts
│   │   ├── projects.ts
│   │   ├── metrics.ts
│   │   └── team.ts
│   │
│   ├── lib/
│   │   ├── gsap.ts
│   │   ├── lenis.ts
│   │   ├── seo.ts
│   │   └── utils.ts
│   │
│   └── styles/
│       ├── _tokens.scss
│       ├── _mixins.scss
│       ├── _reset.scss
│       ├── _typography.scss
│       ├── _animations.scss
│       └── _utilities.scss
│
├── public/
│   ├── brand/
│   ├── clients/
│   ├── projects/
│   ├── team/
│   ├── media/
│   └── icons/
│
├── tests/
│
├── AGENTS.md
├── README.md
├── next.config.ts
├── tsconfig.json
├── eslint.config.*
├── package.json
├── pnpm-lock.yaml
└── .nvmrc
```

Ne pas créer une profondeur de dossiers inutile.

---

# 22. COMPOSANTS

Chaque composant doit :

- avoir une responsabilité claire ;
- rester relativement petit ;
- éviter le code dupliqué ;
- utiliser des props typées ;
- éviter `any` ;
- éviter la logique métier dans le JSX ;
- utiliser un fichier SCSS Module dédié lorsque nécessaire.

Ne pas créer un composant abstrait si celui-ci n’est utilisé qu’une fois sans bénéfice réel.

---

# 23. TYPESCRIPT

Configuration attendue :

```json
{
  "strict": true
}
```

Règles :

- pas de `any` sauf justification documentée ;
- typer les données ;
- typer les props ;
- typer les références ;
- utiliser des unions lorsque pertinent ;
- ne pas désactiver les vérifications TypeScript pour masquer un problème.

Interdit :

```text
@ts-ignore
```

sauf cas exceptionnel documenté.

---

# 24. SERVER COMPONENTS ET CLIENT COMPONENTS

Avec Next.js App Router :

- rester en Server Component par défaut ;
- ajouter `"use client"` uniquement aux composants qui en ont réellement besoin ;
- isoler les animations dans des composants clients ciblés ;
- ne pas transformer toute la page en Client Component.

Objectif :

- meilleur chargement ;
- moins de JavaScript ;
- meilleures performances ;
- meilleur SEO.

---

# 25. IMAGES

Utiliser :

```tsx
next/image
```

pour les images raster chaque fois que possible.

Toujours :

- définir dimensions ou ratio ;
- éviter les layout shifts ;
- utiliser WebP/AVIF lorsque pertinent ;
- compresser intelligemment ;
- préserver la qualité visuelle des réalisations ;
- fournir `alt` pertinent.

Les images décoratives doivent avoir :

```text
alt=""
```

---

# 26. VIDÉOS

Les vidéos hero ou portfolio doivent être fortement optimisées.

Règles :

- ne pas charger une vidéo lourde avant qu’elle soit réellement utile ;
- fournir un poster ;
- permettre un fallback mobile ;
- éviter l’autoplay sonore ;
- utiliser `muted`, `playsInline` lorsque nécessaire ;
- ne pas dégrader le LCP.

Si une vidéo réduit fortement les performances, préférer une image ou un clip très court optimisé.

---

# 27. ICONOGRAPHIE

Préférer :

- SVG propriétaire fourni ;
- SVG simple développé dans le projet ;
- Lucide Icons lorsque nécessaire.

Éviter les bibliothèques massives d’icônes.

Ne jamais utiliser des emojis comme système d’icônes principal.

---

# 28. RESPONSIVE

Le site doit être vérifié au minimum sur :

```text
320 px
375 px
390 px
430 px
768 px
1024 px
1280 px
1440 px
1728 px
1920 px
```

Ne pas simplement réduire la version desktop.

Mobile doit avoir :

- sa propre composition lorsque nécessaire ;
- une navigation pensée pour le tactile ;
- une hiérarchie adaptée ;
- des animations simplifiées ;
- des CTA suffisamment grands ;
- aucune perte d’information.

---

# 29. BREAKPOINTS

Centraliser les breakpoints.

Exemple de départ :

```scss
$bp-sm: 480px;
$bp-md: 768px;
$bp-lg: 1024px;
$bp-xl: 1280px;
$bp-2xl: 1536px;
```

Adapter si le design l’exige.

Ne pas multiplier les media queries avec des valeurs aléatoires.

---

# 30. GRID ET ESPACEMENT

Utiliser un système cohérent.

Exemple :

```text
4
8
12
16
24
32
48
64
80
96
128
160
```

Ne pas utiliser une multitude de valeurs arbitraires comme :

```text
37px
53px
71px
```

sans justification visuelle.

---

# 31. DESIGN TOKENS

Centraliser :

- couleurs ;
- typographies ;
- tailles de caractères ;
- line-heights ;
- espacements ;
- rayons ;
- z-index ;
- timings d’animation ;
- easings ;
- largeurs maximales.

Exemple :

```scss
:root {
  --color-orange: ...;
  --color-black: ...;
  --color-cream: ...;

  --font-display: ...;
  --font-body: ...;

  --page-gutter: ...;
  --container-max: ...;

  --ease-premium: cubic-bezier(...);
}
```

---

# 32. SEO TECHNIQUE — DÈS LA PHASE 1

Même si la première phase est visuelle, elle doit être SEO-ready.

Implémenter :

- metadata Next.js ;
- `title` ;
- `description` ;
- Open Graph ;
- Twitter/X Card ;
- canonical ;
- robots ;
- sitemap ;
- données structurées pertinentes ;
- headings sémantiques ;
- URLs propres pour les futures pages.

Ne pas utiliser plusieurs `h1` simplement pour obtenir un effet graphique.

---

# 33. ACCESSIBILITÉ

Cible minimale :

**WCAG 2.2 AA autant que raisonnablement possible.**

Obligatoire :

- navigation clavier ;
- focus visible ;
- contrastes suffisants ;
- `aria-label` lorsque nécessaire ;
- structure HTML sémantique ;
- labels de formulaires ;
- boutons réels pour les actions ;
- liens réels pour la navigation ;
- taille tactile correcte ;
- texte alternatif ;
- menu accessible.

Ne jamais remplacer un `<button>` par un `<div onClick>`.

---

# 34. PERFORMANCE

Objectif Lighthouse sur une version de production réaliste :

```text
Performance       >= 90
Accessibility     >= 95
Best Practices    >= 95
SEO               >= 95
```

Le design premium ne justifie pas un site lent.

Priorités :

- LCP ;
- CLS ;
- INP ;
- poids des images ;
- poids JavaScript ;
- lazy loading ;
- code splitting ;
- utilisation limitée des composants clients.

---

# 35. DÉPENDANCES

Avant d’installer une dépendance, se demander :

> Peut-on raisonnablement faire cela avec React, Next.js, CSS ou GSAP déjà installés ?

Si oui, ne pas ajouter la dépendance.

Éviter :

- dépendances abandonnées ;
- packages sans maintenance ;
- packages qui dupliquent une fonctionnalité existante ;
- libraries installées pour une seule fonction triviale.

---

# 36. FORMULAIRES — PHASE 1

En phase 1, le formulaire peut avoir :

- interface complète ;
- validation côté client ;
- états visuels ;
- messages d’erreur ;
- état de succès simulé si nécessaire.

Ne pas inventer un backend.

Ne pas connecter un service externe sans instruction explicite.

Préparer l’architecture pour une future API.

---

# 37. CONTACT ET WHATSAPP

Le document de refonte recommande notamment :

- formulaire ;
- WhatsApp ;
- rendez-vous ;
- CTA visibles.

Pour la phase 1 :

- le CTA WhatsApp peut être préparé uniquement avec un numéro validé ;
- ne jamais inventer de numéro ;
- le calendrier de rendez-vous ne doit pas être intégré tant qu’un service de calendrier n’a pas été choisi ;
- aucun tracking publicitaire ne doit être installé sans validation.

---

# 38. ANALYTICS ET TRACKING

Ne pas installer automatiquement :

- Google Analytics ;
- Meta Pixel ;
- TikTok Pixel ;
- LinkedIn Insight Tag ;
- Hotjar ;
- Microsoft Clarity ;
- autres trackers.

Attendre une instruction explicite.

Lorsqu’ils seront ajoutés, prévoir :

- conformité consentement ;
- chargement différé si possible ;
- configuration centralisée.

---

# 39. SÉCURITÉ

Ne jamais commit :

- mot de passe ;
- token ;
- clé privée ;
- clé API ;
- identifiant de production ;
- secret ;
- fichier `.env` contenant des secrets.

Utiliser :

```text
.env.local
```

et fournir :

```text
.env.example
```

sans valeur sensible.

---

# 40. GIT

Les commits doivent rester petits et logiques.

Exemples :

```text
feat: build immersive header navigation
feat: add home hero section
feat: implement selected works grid
fix: prevent menu focus escape
perf: optimize hero media loading
refactor: centralize design tokens
```

Ne pas faire un commit géant mélangeant design, contenu et configuration sans raison.

---

# 41. QUALITÉ DU CODE

Avant de considérer une tâche terminée :

```bash
pnpm lint
pnpm typecheck
pnpm build
```

doivent réussir.

Créer un script `typecheck` si nécessaire.

Aucun warning sérieux ne doit être volontairement ignoré.

---

# 42. TESTS

Pour la phase 1, privilégier les tests à forte valeur :

- navigation ;
- ouverture/fermeture du menu ;
- liens essentiels ;
- responsive ;
- absence d’erreurs console ;
- keyboard navigation ;
- formulaire si présent.

Utiliser **Playwright** lorsque des tests end-to-end deviennent nécessaires.

Ne pas créer une énorme suite de tests unitaires pour des composants purement visuels.

---

# 43. CONTENU TEMPORAIRE

Les placeholders sont autorisés uniquement pendant la construction.

Ils doivent être clairement identifiables :

```text
TODO_CONTENT
TODO_ASSET
TODO_CLIENT_VALIDATION
TODO_METRIC_VALIDATION
```

Ne jamais laisser du Lorem Ipsum dans la version prête à présenter.

---

# 44. RÈGLE ANTI-HALLUCINATION POUR LES AGENTS IA

Codex et Cursor ne doivent jamais inventer :

- client ;
- chiffre ;
- année ;
- résultat de campagne ;
- membre d’équipe ;
- adresse ;
- numéro ;
- e-mail ;
- service non validé ;
- récompense ;
- certification ;
- partenariat ;
- témoignage ;
- donnée commerciale.

Si une information manque :

1. conserver la zone sans donnée ;
2. utiliser un placeholder interne explicite ;
3. demander validation si nécessaire.

Ne jamais transformer une supposition en contenu public.

---

# 45. RÈGLE DE FIDÉLITÉ À LA MARQUE

Le modèle La Boucle est une inspiration d’expérience.

Light Digital ne doit pas devenir :

> “La Boucle avec un logo orange”.

Le résultat final doit avoir :

- sa propre voix ;
- sa propre palette ;
- ses propres photos ;
- ses propres compositions ;
- sa propre iconographie ;
- sa propre hiérarchie visuelle ;
- son propre système de portfolio.

---

# 46. CE QU’IL FAUT ÉVITER VISUELLEMENT

Éviter absolument :

- cartes arrondies répétées sur toutes les sections ;
- blobs de gradients sans fonction ;
- stock photos génériques ;
- icônes multicolores ;
- trop de glassmorphism ;
- titres centrés systématiquement ;
- sections toutes identiques ;
- animations au scroll identiques partout ;
- ombres lourdes ;
- boutons trop nombreux ;
- carrousels automatiques difficiles à contrôler ;
- textes minuscules pour “faire premium”.

---

# 47. DESIGN DES BOUTONS

Les CTA doivent être identifiables immédiatement.

Prévoir au maximum quelques variantes :

```text
Primary
Secondary
Text / Arrow
Icon
```

Chaque bouton doit avoir :

- hover ;
- focus ;
- active ;
- disabled si applicable.

Les effets magnétiques sont autorisés sur desktop mais ne doivent jamais nuire à l’accessibilité ou au tactile.

---

# 48. SELECTED WORKS

La section réalisations doit être un temps fort.

Elle peut utiliser :

- grid éditoriale asymétrique ;
- sticky project title ;
- image reveal ;
- hover média ;
- scrolling horizontal contrôlé ;
- changement de couleur contextuel.

Mais l’utilisateur doit toujours comprendre :

- le client ;
- le projet ;
- la mission ;
- la catégorie.

L’effet visuel ne doit pas masquer l’information.

---

# 49. CLIENT MARQUEE

Un défilement de logos peut être utilisé.

Conditions :

- animation lente ;
- pause ou comportement respectant reduced-motion ;
- logos propres ;
- contraste homogène ;
- pas de répétition agressive ;
- aucun faux logo ou client non validé.

---

# 50. FOOTER

Le footer doit être traité comme une vraie dernière section, pas comme une zone administrative.

Il peut inclure :

- grande accroche ;
- contact ;
- navigation ;
- réseaux sociaux ;
- localisation validée ;
- e-mail validé ;
- CTA ;
- copyright.

Éviter un footer surchargé.

---

# 51. PHASES DE DÉVELOPPEMENT

## Phase 0 — Setup

- initialiser Next.js ;
- TypeScript strict ;
- pnpm ;
- SCSS ;
- structure de dossiers ;
- tokens ;
- reset ;
- lint ;
- build.

## Phase 1 — Design foundation

- palette ;
- typography ;
- container ;
- spacing ;
- buttons ;
- links ;
- motion helpers.

## Phase 2 — Header / Navigation

- desktop header ;
- mega menu ;
- mobile menu ;
- accessibilité ;
- animations.

## Phase 3 — Hero

- composition ;
- media ;
- animation ;
- CTA ;
- responsive.

## Phase 4 — Main landing sections

- clients ;
- intro ;
- services ;
- selected works ;
- approach ;
- why Light ;
- metrics ;
- team ;
- CTA ;
- footer.

## Phase 5 — Polish

- responsive complet ;
- smooth scroll ;
- motion ;
- hover ;
- micro-interactions ;
- reduced-motion.

## Phase 6 — Quality

- Lighthouse ;
- accessibilité ;
- SEO ;
- build ;
- optimisation images ;
- tests desktop/mobile.

---

# 52. CRITÈRES DE VALIDATION DE LA LANDING PAGE

La landing n’est pas terminée tant que :

- le design ne semble pas premium ;
- mobile est pleinement travaillé ;
- le menu fonctionne parfaitement ;
- aucune donnée n’est inventée ;
- le portfolio est visuellement fort ;
- le site est fluide ;
- les animations ne ralentissent pas l’expérience ;
- le build Next.js passe ;
- TypeScript passe ;
- lint passe ;
- aucune erreur console critique n’existe ;
- les CTA importants sont évidents ;
- la charte Light Digital est reconnaissable.

---

# 53. INSTRUCTIONS SPÉCIFIQUES POUR CODEX

Avant toute modification :

1. lire ce fichier en entier ;
2. inspecter l’arborescence existante ;
3. vérifier les composants déjà développés ;
4. réutiliser ce qui est propre et conforme ;
5. ne pas réécrire inutilement une fonctionnalité stable ;
6. faire des changements ciblés ;
7. vérifier `lint`, `typecheck` et `build`.

Codex doit expliquer brièvement les changements effectués dans sa réponse finale.

Il ne doit jamais modifier massivement l’architecture sans justification.

---

# 54. INSTRUCTIONS SPÉCIFIQUES POUR CURSOR

Cursor doit considérer ce fichier comme une règle de projet permanente.

Avant de générer du code :

- vérifier les conventions existantes ;
- utiliser les composants déjà présents ;
- respecter les tokens ;
- ne pas créer une nouvelle convention en parallèle ;
- ne pas installer un package sans nécessité ;
- ne pas ajouter Tailwind ;
- ne pas ajouter de CMS ;
- ne pas introduire WordPress.

Toute génération de plusieurs fichiers doit conserver la cohérence avec l’arborescence décrite ici.

---

# 55. SOURCE DE VÉRITÉ POUR LE CONTENU

Ordre de priorité :

1. instructions explicites du propriétaire du projet ;
2. documents officiels Light Digital fournis au projet ;
3. site officiel Light Digital Consulting ;
4. assets fournis ;
5. informations validées explicitement.

Une référence externe de design ne constitue jamais une source pour les données de Light Digital.

---

# 56. DOCUMENTS DE BASE DU PROJET

Le développement doit notamment tenir compte des documents fournis :

```text
PRESENTATION-AGENCE-DIGITALE_LDC.pdf
PROPOSITION DE REFONTE DU SITE WEB.pdf
```

Le premier présente notamment l’agence, ses expertises, réalisations et références historiques.

Le second définit les objectifs de la refonte :

- crédibilité ;
- UX/UI ;
- présentation premium ;
- conversion ;
- portfolio ;
- storytelling ;
- mobile ;
- SEO ;
- animations ;
- CTA ;
- positionnement moderne.

---

# 57. ÉVOLUTION FUTURE — NON INCLUSE EN PHASE 1

Le projet pourra ensuite évoluer vers :

- pages services ;
- pages expertises ;
- portfolio complet ;
- case studies ;
- agence ;
- équipe ;
- blog / insights ;
- podcasts ;
- formulaire connecté ;
- prise de rendez-vous ;
- CMS headless ;
- analytics ;
- multilingue ;
- espace de gestion.

Mais **aucune de ces couches ne doit compliquer inutilement la landing page initiale**.

On prépare une architecture extensible sans construire aujourd’hui des fonctionnalités non demandées.

---

# 58. PRINCIPE DIRECTEUR

Chaque décision doit répondre à quatre questions :

1. Est-ce plus clair pour le visiteur ?
2. Est-ce plus fort pour la marque ?
3. Est-ce plus rapide et maintenable ?
4. Est-ce réellement nécessaire ?

Si une fonctionnalité est spectaculaire mais nuit à la clarté, à la vitesse ou à la conversion, elle doit être simplifiée.

---

# 59. RÉSULTAT VISÉ

Le résultat final doit donner l’impression que Light Digital Consulting est une agence :

- expérimentée ;
- stratégique ;
- créative ;
- exigeante ;
- contemporaine ;
- technologique ;
- capable d’accompagner des marques importantes ;
- installée dans un environnement digital international.

La landing doit être suffisamment forte pour devenir la nouvelle base graphique de tout l’écosystème Light Digital Consulting.

---

# 60. RÈGLE FINALE

**Ne jamais optimiser le projet pour la facilité de génération par l’IA au détriment de la qualité.**

Codex et Cursor sont des outils d’exécution.

Ils doivent suivre :

- l’architecture ;
- la direction artistique ;
- la qualité UX ;
- les règles de contenu ;
- les contraintes de performance ;
- les règles d’accessibilité ;
- la marque.

Lorsque plusieurs solutions sont possibles, choisir celle qui est :

1. la plus simple à maintenir ;
2. la plus robuste ;
3. la plus performante ;
4. la plus cohérente avec le design ;
5. la moins dépendante de packages inutiles.

---

## Stack résumée

```text
Framework       Next.js — App Router
UI              React
Language        TypeScript strict
Runtime         Node.js LTS
Package manager pnpm
Styles          SCSS + CSS Modules + CSS Variables
Animation       GSAP + ScrollTrigger
Smooth scroll   Lenis si réellement nécessaire
Images           next/image
Icons           SVG / Lucide
Testing         Playwright lorsque nécessaire
Lint            ESLint
CMS             Aucun en Phase 1
Backend         Aucun en Phase 1
WordPress       INTERDIT
Elementor       INTERDIT
Tailwind        INTERDIT
Bootstrap       INTERDIT
UI Kit          INTERDIT
```

---

**Fin du fichier maître d’instructions.**
