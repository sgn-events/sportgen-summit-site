# Instructions pour Claude Code

Ce repo est le site SPORT[GEN] Summit. Lis `README.md` d'abord pour la structure et le mode de déploiement.

## Règles de travail

**Site statique sans build.** Ne pas introduire de bundler, de `package.json`, de framework ni de dépendance npm sans que ce soit demandé explicitement. Les fichiers doivent rester servables tels quels par Vercel.

**Modifications ciblées.** Quand on demande un changement précis (un texte, une couleur, un bloc), ne changer que ça : ne pas retoucher les espacements, tailles, polices, ordres de sections ou couleurs voisines. Ne pas « améliorer » ce qui n'est pas demandé.

**Respecter le design system.** Toutes les couleurs, tailles de texte, espacements et rayons viennent de `ds/tokens/*.css` sous forme de variables CSS (`var(--navy-darkest)`, etc.). Ne jamais coder une valeur en dur si un token existe. Ne pas inventer de nouvelle couleur : si aucun token ne convient, le signaler plutôt que d'improviser.

**Contraintes techniques du chargement JSX.** Pas de bundler, donc :
- chaque fichier `.jsx` doit finir par `Object.assign(window, { ...composants partagés })` — les scripts Babel n'ont pas de portée commune ;
- tout nouveau `.jsx` doit être ajouté dans `index.html` **dans le bon ordre** (un composant doit être défini avant le fichier qui l'utilise ; `App.jsx` reste en dernier) ;
- ne pas utiliser `type="module"` ;
- ne jamais nommer un objet de styles global `styles` — utiliser un nom préfixé par le composant (`heroStyles`, `navStyles`).

**Assets.** Les images optimisées sont dans `assets_opt/`, les originales dans `assets/`, les vidéos de speakers dans `reels/`. Préférer `assets_opt/` pour tout ce qui est affiché. Ne pas remplacer une image par une SVG dessinée à la main.

**Contenu.** Les données de la page (speakers, agenda, partenaires) sont dans `data.js`, les textes légaux dans `legal.js`. Modifier le contenu là plutôt que dans le JSX quand la donnée y existe déjà.

## Vérification avant commit

1. Ouvrir `index.html` en local (`python3 -m http.server` puis `localhost:8000`) — le chargement `file://` casse les scripts.
2. Vérifier la console : aucune erreur.
3. Parcourir les routes touchées par la modif.
4. Commit + push → Vercel redéploie seul.

## Si un build devient nécessaire un jour

Ne le faire que sur demande. Le chemin le plus court serait Vite + React : déplacer les `.jsx` dans `src/`, remplacer les `window.X` par de vrais `import`/`export`, garder `ds/` tel quel comme CSS importé. C'est un refactor à part entière, pas un effet de bord d'une modif de contenu.
