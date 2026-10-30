# videmtech.github.io

Site de VidemTech (https://videmtech.github.io), en français. Site statique : HTML, CSS et un peu de JavaScript, sans outil de compilation.
Hébergé gratuitement avec GitHub Pages.

## Structure

- `index.html` : accueil et liste des projets
- `ludonook.html`, `mathematix.html` : une page par application, avec sa politique de confidentialité
- `css/site.css` : toute la mise en forme (thème clair et sombre selon le système)
- `js/site.js` : année du pied de page
- `assets/` : polices (licence OFL), icônes et images

## Voir le site en local

```
python3 -m http.server 8000
```

Puis ouvrir http://localhost:8000.

## Ajouter un projet

1. Copier `mathematix.html` vers `mon-projet.html`, puis adapter le titre, la description et le contenu.
2. Dans `index.html`, copier une ligne `<li>` de la liste `projects` et pointer vers la nouvelle page.
3. Ajouter l'adresse dans `sitemap.xml`.
4. Pour une couleur propre au projet, ajouter une règle `body[data-projet="mon-projet"]` en haut de `css/site.css`.
