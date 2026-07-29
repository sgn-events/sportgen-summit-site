# SPORT[GEN] Summit — site

Site statique. **Aucun build, aucune dépendance npm.** Vercel sert le dossier tel quel.

## Déploiement — mise en place (une seule fois)

### 1. Repo GitHub

```bash
git init && git add . && git commit -m "init site"
gh repo create sportgen-site --private --source=. --push   # ou repo créé à la main
```

### 2. Connexion Vercel (à faire à la main dans le navigateur)

vercel.com → **Add New… → Project** → importer le repo → Framework Preset : **Other** → Deploy.
Root directory : la racine du repo. Build command : **vide**. Output directory : **vide**.

Cette étape ne peut pas être automatisée : c'est ce qui crée le lien repo ↔ Vercel. Elle ne se fait qu'une fois.

### 3. Ensuite, chaque mise à jour

```bash
git add . && git commit -m "..." && git push
```

Vercel redéploie automatiquement (~30 s). Chaque branche obtient une URL de preview ; `main` va en production.

## Structure

- `index.html` — site principal (21 routes, routage côté client par hash)
- `sis.html` — SPORT[GEN] Investment Summit (site secondaire)
- `_standalone_full.html` — export mono-fichier autonome, non utilisé par le site (supprimable)
- `ds/` — design system SPORT[GEN] : `styles.css` (point d'entrée, importe `tokens/`, `fonts/`, `base.css`, `components/`) + `_ds_bundle.js`
- `kit.css`, `kit2.css`, `invest.css`, `sis.css` — styles propres au site
- `data.js`, `legal.js` — contenu (speakers, agenda, mentions légales)
- `*.jsx` — composants React, transpilés dans le navigateur par Babel standalone
- `assets/`, `assets_opt/`, `reels/` — images, vidéos, PDF

## Comment ça tourne

React 18 + ReactDOM + Babel standalone sont chargés depuis unpkg dans `index.html`, puis chaque `.jsx` est inclus en `<script type="text/babel" src="...">`. Il n'y a pas de bundler : **l'ordre des `<script>` dans `index.html` compte**, et chaque fichier `.jsx` expose ses composants sur `window` à la fin (`Object.assign(window, { ... })`), car les scripts Babel ne partagent pas de portée.

Conséquence : ajouter un nouveau fichier `.jsx` demande deux choses — l'ajouter dans `index.html` au bon endroit dans l'ordre, et exporter ses composants sur `window`.

## Points d'attention

- Ne pas renommer les variables CSS de `ds/tokens/` — elles sont utilisées partout.
- `ds/fonts/fonts.css` charge Plus Jakarta Sans depuis Google Fonts. Pour passer en auto-hébergé, déposer les `.woff2` dans `ds/fonts/` et remplacer l'`@import` par des `@font-face`.
- Les balises `<script>` React/Babel ont des attributs `integrity` : si tu changes de version, il faut aussi changer le hash, sinon le script est bloqué.
- Babel transpile à l'exécution : c'est ~200 ko de JS en plus et un court délai au premier chargement. Acceptable ici ; si un jour la perf devient un sujet, l'étape suivante est un build Vite (voir CLAUDE.md).
