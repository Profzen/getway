# GETWAY - Mémoire Projet

## Rôle du document
Ce fichier est la mémoire vivante du projet GETWAY. Il doit conserver les décisions utiles, l'état d'avancement, les problèmes résolus, les choix d'architecture, les contraintes de sécurité, et tout élément qui pourrait redevenir nécessaire plus tard.

## Mode d'utilisation
- À mettre à jour à chaque évolution importante.
- À enrichir après chaque décision d'architecture, de sécurité, de produit ou de delivery.
- À utiliser comme base de reprise si le contexte doit être reconstruit rapidement.
- À garder factuel, structuré et exploitable.

## Directives de collaboration
- Dire clairement quand une hypothèse utilisateur semble fausse, incomplète ou sous-optimale.
- Argumenter les désaccords avec des faits, des contraintes techniques ou des compromis concrets.
- Privilégier une discussion professionnelle et directe plutôt qu'une validation automatique.
- Garder cette mémoire comme source de reprise autonome pour une nouvelle conversation.
- Mettre à jour ce fichier au fur et à mesure des décisions, des corrections de méthode et de l'évolution de l'architecture.
- Pour ce projet, travailler directement sur `main` car le dépôt est géré en solo.

## État initial du projet
- Projet : GETWAY.
- Nature : startup collaborative numérique.
- Vision : apprentissage, travail, collaboration, autonomie et revenus par le numérique.
- Zone de départ : Togo, avec vision internationale.
- Source de référence : cdc.txt.
- Statut actuel : cadrage documentaire initial en cours.
- Repo GitHub déclaré : https://github.com/Profzen/getway.
- Le dépôt distant existe, mais le repo local et les sous-dossiers applicatifs ne sont pas encore initialisés.
- La cible doit séparer clairement la partie web et la partie mobile, avec React/Expo pour le mobile.

## Compréhension métier actuelle
GETWAY vise à créer une plateforme où des apprenants, partenaires et talents peuvent progresser de manière structurée vers l'expérience professionnelle, la collaboration et l'autonomie. Le produit doit couvrir à terme les profils, missions, niveaux, formations, évaluations, commissions et pilotage opérationnel.

## Hypothèses techniques retenues à ce stade
- Développement local comme environnement principal.
- Vercel utilisable pour les premières vues et prévisualisations.
- Architecture évolutive et sécurisée.
- Documentation vivante obligatoire pour réduire la perte de contexte.
- Structure projet attendue : une base web et une base mobile distinctes.
- Tout ce qui doit être consommé par le mobile doit être exposé via HTTP(S) et ne pas dépendre d'un état serveur privé inaccessible au client mobile.
- Le mobile ne consomme pas le dossier source du web : il consomme des endpoints publics.

## Décisions d'architecture
Décision : démarrer avec une approche pragmatique centrée sur un socle simple, lisible et extensible, en gardant la sécurité comme contrainte de base.

Motif : le projet doit avancer vite sans compromettre la qualité ni la future montée en charge.

Impact : le périmètre initial doit favoriser la clarté, la maintenabilité et la vérifiabilité.

Statut : validée.

Décision : considérer les fonctionnalités appelables par le mobile comme des surfaces HTTP publiques, pas comme des liens directs au code du front web.

Motif : le mobile doit pouvoir fonctionner indépendamment du dépôt web et de l'organisation interne des dossiers.

Impact : toute fonctionnalité destinée au mobile doit être exposée par une API consommable à distance.

Statut : validée.

Décision : utiliser localhost pour le développement et Vercel pour les premières prévisualisations publiques ou de validation.

Motif : réduire le délai de feedback tout en gardant un environnement de travail simple.

Impact : les premières pages doivent être compatibles avec un flux de déploiement rapide.

Statut : validée.

## Sécurité - Base de référence
- Valider toutes les entrées côté interface et côté serveur.
- Protéger les routes sensibles par rôle et permission.
- Ne jamais exposer les secrets dans le code source.
- Journaliser les événements critiques sans divulguer d'informations sensibles.
- Éviter les messages d'erreur trop détaillés côté utilisateur.
- Réduire la surface d'attaque dès les premières versions.

## Problèmes résolus
Contexte : nécessité d'un cadrage exploitable à partir d'un cahier des charges très large.

Résolution : mise en place d'un plan de sprint structuré en phases allant du cadrage au MVP puis à la finalisation complète.

Impact : le projet devient pilotable et les priorités sont visibles.

Statut : résolu.

Contexte : besoin de garder le contexte projet dans le temps sans dépendre uniquement de la mémoire conversationnelle.

Résolution : création d'un fichier de mémoire projet dédié et évolutif.

Impact : les décisions, contraintes et faits importants restent récupérables rapidement.

Statut : résolu.

## État d'avancement
- Cahier des charges lu et synthétisé.
- Plan de sprint initial créé.
- Mémoire de projet initialisée.
- Architecture technique en cours de stabilisation autour d'un web Next.js, d'un mobile Expo SDK 54 et de packages partagés.
- Le workspace ne montre pas encore de backend API dédié dans `apps/web` ; à ce stade, il faut exposer les fonctionnalités appelables via des routes HTTP si elles doivent être consommées par le mobile.
- Développement produit démarré côté socle web/mobile et base de design partagée.

## Contraintes à conserver
- La sécurité reste transversale et prioritaire.
- Les premières validations s'appuient sur localhost et Vercel.
- L'architecture doit rester simple, lisible et extensible.
- La mémoire projet doit être maintenue à chaque évolution importante.
- Le light mode est la base visuelle du produit.
- Le dark mode reste la variante premium.
- Le mobile doit toujours pouvoir appeler les fonctions métier via des API stables et documentées.
- Les changements d'architecture doivent être discutés avec des arguments si une solution plus robuste existe.
- La branche de travail de référence pour ce projet est `main`.

## Format de mise à jour recommandé
Chaque nouvelle entrée devrait suivre ce modèle :

Contexte : bref rappel du sujet.

Décision ou changement : ce qui a été décidé ou modifié.

Motif : pourquoi cette décision a été prise.

Impact : ce que cela change sur l'architecture, le produit ou la sécurité.

Statut : proposé, validé, en cours, résolu, abandonné.

## Registre évolutif
Contexte : démarrage du cadrage GETWAY à partir du cahier des charges.

Décision ou changement : création des documents sprint.md et memoire.md.

Motif : structurer immédiatement l'exécution et conserver un historique fiable.

Impact : base de pilotage disponible pour la suite du projet.

Statut : validé.

Contexte : clarification du périmètre appelable par le mobile.

Décision ou changement : établir que le mobile consomme uniquement des endpoints HTTP(S) publics, même si le front web et le backend cohabitent dans le même projet Next.js.

Motif : garantir que l'application mobile reste indépendante de l'organisation interne du code web.

Impact : la conception doit privilégier des routes API stables et réutilisables.

Statut : validé.

## Règle de maintien
Ce fichier doit rester concret. Toute information qui aide à reprendre le projet plus vite, à éviter une régression, ou à sécuriser une décision future doit y être notée.