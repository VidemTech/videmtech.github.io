// VidemTech — scripts du site. Aucune dépendance.
(function () {
  // Année courante dans le pied de page
  var annee = document.getElementById('annee');
  if (annee) annee.textContent = new Date().getFullYear();

  // Fiche de jeu à onglets (page LudoNook). Sans JavaScript, toutes les rubriques restent visibles.
  document.querySelectorAll('[data-tabs]').forEach(function (racine) {
    var onglets = Array.prototype.slice.call(racine.querySelectorAll('[role="tab"]'));
    var panneaux = onglets.map(function (o) { return document.getElementById(o.getAttribute('aria-controls')); });

    function activer(index, focus) {
      onglets.forEach(function (o, i) {
        var actif = i === index;
        o.setAttribute('aria-selected', actif ? 'true' : 'false');
        o.tabIndex = actif ? 0 : -1;
        panneaux[i].hidden = !actif;
      });
      if (focus) onglets[index].focus();
    }

    onglets.forEach(function (o, i) {
      o.addEventListener('click', function () { activer(i, false); });
      o.addEventListener('keydown', function (e) {
        var n = onglets.length, cible = null;
        if (e.key === 'ArrowRight') cible = (i + 1) % n;
        else if (e.key === 'ArrowLeft') cible = (i - 1 + n) % n;
        else if (e.key === 'Home') cible = 0;
        else if (e.key === 'End') cible = n - 1;
        if (cible !== null) { e.preventDefault(); activer(cible, true); }
      });
    });

    activer(0, false);
  });
})();
