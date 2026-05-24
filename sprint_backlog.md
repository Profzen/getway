# Sprint Backlog - GETWAY (initial)

## Sprint 0 - Cadrage initial et fondations (1 sprint)
- [ ] Relire le `cdc.txt` et valider le périmètre MVP.
- [ ] Lister les rôles utilisateurs (apprenant, partenaire, admin).
- [ ] Définir les flux critiques (inscription, mission, profil).
- [ ] Établir les conventions de code et de sécurité.
- [ ] Mettre en place l'environnement local + Vercel previews.

## Sprint 1 - Architecture et socle technique (1-2 sprints)
- [ ] Confirmer stack technique et structure monorepo.
- [ ] Installer les dépendances (pnpm install) sur le workspace.
- [ ] Ajouter fichiers d'env et gestion des secrets (example .env.local).
- [ ] Basculer `apps/web` sur Next dev + config Tailwind si nécessaire.
- [ ] Préparer scripts `dev:web`, `dev:mobile`, `dev:all`.
- [ ] Tests unitaires de base et linting.

## Sprint 2 - Identité produit et expérience initiale (1 sprint)
- [ ] Page d'accueil (home) complet responsive — contenu + hero.
- [ ] Traduire maquette en composants réutilisables (Button, Card, Header).
- [ ] Adapter styles mobile et créer vues basiques dans `apps/mobile`.
- [ ] Ajouter switch thème light/dark et vérifier accessibilité.

## Sprint 3 - Authentification et comptes (1 sprint)
- [ ] Conception du modèle utilisateur (roles, champs, validations).
- [ ] Implémentation d'inscriptions / connexions (email + password).
- [ ] Messagerie d'erreur propre, blocage des tentatives abusives.
- [ ] Protection des routes / sessions.

## Priorités immédiates (ordre d'exécution conseillé)
1. Installer dépendances et vérifier `dev:web` et `dev:mobile`.
2. Finaliser tokens + primitives UI (déjà fait).
3. Créer backlog détaillé des tickets pour Sprint 1 (issue tracker).
4. Initialiser CI/CD minimal (Vercel pour web, EAS/Expo pour mobile).
5. Implémenter page d'accueil et cycle d'inscription simple.

## Notes
- Branch strategy: travailler sur `etl_aziz_test` pour les développements.
- Sécurité: garder secrets hors du repo; utiliser variables d'environnement.
- Livraison: chaque PR doit inclure capture d'écran et tests basiques.

---
Generated from `sprint.md` on {date}.
