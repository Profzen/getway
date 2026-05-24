# GETWAY - Plan de Sprint Projet

## Objectif du document
Ce document définit le cadrage d'exécution de GETWAY depuis l'initialisation du projet jusqu'au MVP, puis jusqu'à la finalisation complète de la plateforme. Il sert de référence opérationnelle pour piloter les travaux, garder le cap produit, et maintenir un niveau d'exigence élevé sur la sécurité, la qualité, la maintenabilité et la scalabilité.

## Principes de pilotage
- La construction démarre en local et s'appuie sur des aperçus de préproduction via Vercel pour valider rapidement les premières vues.
- La sécurité est une exigence transversale, pas une couche ajoutée à la fin.
- Le MVP doit démontrer la valeur métier réelle, pas seulement une vitrine.
- Chaque sprint doit produire un incrément vérifiable, documenté et réversible.
- Les décisions d'architecture doivent rester simples au début, mais compatibles avec une montée en charge internationale.

## Cadre produit
GETWAY est une plateforme collaborative orientée apprentissage, collaboration, travail et montée en autonomie. Le produit doit permettre à terme de gérer :
- des profils partenaires et apprenants,
- des niveaux et parcours d'évolution,
- des missions et collaborations,
- des évaluations et historiques,
- des services, formations et accompagnements,
- une base d'administration fiable et sécurisée.

## Hypothèses de démarrage
- Développement local comme environnement principal de travail.
- Déploiements de prévisualisation sur Vercel pour les premières itérations visibles.
- Architecture évolutive, avec séparation claire entre présentation, logique métier et données.
- Sécurité intégrée dès les premières décisions techniques.

## Découpage stratégique

### Phase 0 - Cadrage initial et fondations
Durée indicative : 1 sprint.

Objectif : transformer le cahier des charges en base de travail exploitable.

Livrables attendus :
- vision produit clarifiée,
- périmètre MVP borné,
- priorisation des fonctionnalités,
- hypothèses techniques validées,
- règles de sécurité initiales,
- structure documentaire et méthode de suivi.

Travaux détaillés :
- relire le cahier des charges et isoler les objectifs métier essentiels,
- distinguer le MVP du périmètre long terme,
- identifier les rôles utilisateurs principaux,
- définir les flux critiques,
- lister les risques métier, techniques et sécurité,
- poser les conventions de nommage, de versioning et de suivi,
- préparer la stratégie d'environnements local et Vercel.

Critères de sortie :
- le périmètre MVP est écrit noir sur blanc,
- les priorités sont classées,
- les risques majeurs sont connus,
- aucune décision importante n'est implicite.

### Phase 1 - Architecture et socle technique
Durée indicative : 1 à 2 sprints.

Objectif : établir une base technique robuste, sécurisée et maintenable.

Livrables attendus :
- architecture cible de haut niveau,
- structure du projet,
- conventions de code,
- base de navigation et de layout,
- environnement de prévisualisation,
- politique de gestion de configuration et secrets,
- fondations sécurité et qualité.

Travaux détaillés :
- choisir la stack technique finale ou confirmer l'existant,
- définir les couches applicatives,
- mettre en place les variables d'environnement,
- préparer la séparation des responsabilités,
- établir la stratégie de logs et de monitoring,
- concevoir un socle UI cohérent avec l'identité GETWAY,
- intégrer la sécurité de base sur chaque point d'entrée.

Critères de sortie :
- l'application démarre proprement en local,
- les aperçus Vercel fonctionnent sur les premières pages,
- la structure du code est lisible,
- les données sensibles sont exclues du code source,
- la base est prête pour des développements métiers.

### Phase 2 - Identité produit et expérience initiale
Durée indicative : 1 sprint.

Objectif : rendre GETWAY crédible, compréhensible et désirable dès les premières interactions.

Livrables attendus :
- page d'accueil,
- présentation claire de la vision,
- mise en avant des services et de la proposition de valeur,
- navigation initiale,
- design premium et cohérent,
- adaptation mobile.

Travaux détaillés :
- construire la page d'accueil,
- traduire la vision en message produit lisible,
- présenter les axes apprentissage, collaboration, travail et évolution,
- mettre en place une première charte visuelle exploitable,
- soigner la hiérarchie des contenus,
- préparer les premiers parcours de découverte.

Critères de sortie :
- un visiteur comprend ce qu'est GETWAY en moins d'une minute,
- le design reflète la promesse premium,
- l'interface est utilisable sur mobile et desktop,
- aucune fuite de contenu brouillon n'apparaît.

### Phase 3 - Authentification et comptes
Durée indicative : 1 sprint.

Objectif : permettre la gestion sécurisée des utilisateurs.

Livrables attendus :
- inscription et connexion,
- récupération d'accès,
- gestion de session,
- séparation des rôles,
- protection des routes sensibles.

Travaux détaillés :
- définir les rôles principaux,
- concevoir le cycle de vie du compte,
- gérer la validation des entrées,
- limiter les tentatives abusives,
- préparer les politiques de mot de passe et de session,
- journaliser les événements critiques.

Critères de sortie :
- les comptes fonctionnent de manière fiable,
- les accès sont contrôlés selon le rôle,
- les chemins sensibles sont protégés,
- les erreurs d'authentification sont propres et non bavardes.

### Phase 4 - Profils, niveaux et réputation
Durée indicative : 1 sprint.

Objectif : construire le cœur de l'identité partenaire GETWAY.

Livrables attendus :
- profil partenaire,
- profil apprenant,
- niveaux d'évolution,
- historique d'activité,
- début de système de réputation,
- portfolio de base.

Travaux détaillés :
- définir les champs du profil,
- structurer les états d'évolution,
- permettre l'ajout d'expériences et de réalisations,
- prévoir les évaluations,
- rendre les données cohérentes et vérifiables,
- établir les règles d'affichage selon le niveau.

Critères de sortie :
- le modèle de progression est compréhensible,
- les profils reflètent réellement le parcours,
- les données sont modifiables selon des règles claires,
- les abus de réputation sont anticipés.

### Phase 5 - Missions et collaboration
Durée indicative : 1 à 2 sprints.

Objectif : introduire la valeur opérationnelle de la plateforme.

Livrables attendus :
- création et consultation de missions,
- candidatures ou affectations,
- suivi d'état des missions,
- collaboration par équipe,
- historique d'exécution,
- premiers indicateurs de qualité.

Travaux détaillés :
- définir le cycle de vie d'une mission,
- clarifier les règles d'accès et de participation,
- structurer les étapes de validation,
- prévoir les commentaires internes si nécessaires,
- sécuriser les actions critiques,
- tracer les transitions d'état.

Critères de sortie :
- une mission peut être créée, suivie et clôturée,
- les permissions empêchent les actions non autorisées,
- la traçabilité est suffisante pour l'exploitation.

### Phase 6 - Formation, services et administration MVP
Durée indicative : 1 sprint.

Objectif : compléter le MVP avec les fonctions qui rendent le service exploitable.

Livrables attendus :
- catalogue de services,
- modules de formation ou d'orientation initiaux,
- administration de base,
- gestion des contenus,
- contrôle qualité simple,
- tableaux de bord minimum.

Travaux détaillés :
- organiser les catégories de services,
- prévoir une gestion simple des contenus,
- doter l'administration d'outils de supervision,
- mettre en place les KPI de départ,
- préparer les parcours de support et de validation,
- durcir les accès administratifs.

Critères de sortie :
- l'administration permet de piloter le produit,
- les contenus sont gérables sans intervention technique permanente,
- le socle MVP est exploitable en contexte réel.

### Phase 7 - Sécurité, qualité et durcissement MVP
Durée indicative : 1 sprint.

Objectif : verrouiller la fiabilité avant ouverture élargie.

Livrables attendus :
- revue de sécurité,
- validation des permissions,
- nettoyage des données et règles d'entrée,
- gestion des erreurs,
- tests fonctionnels essentiels,
- préparation du déploiement MVP.

Travaux détaillés :
- vérifier les failles d'accès,
- contrôler les injections et entrées non valides,
- revoir les headers et protections web,
- tester les parcours critiques,
- sécuriser les logs,
- documenter les points de vigilance.

Critères de sortie :
- les flux critiques sont testés,
- les erreurs restent maîtrisées,
- les protections de base sont actives,
- le MVP est publiable sans dette de sécurité évidente.

## Définition du MVP
Le MVP GETWAY doit prouver les fondamentaux suivants :
- un visiteur comprend la plateforme,
- un utilisateur peut créer ou rejoindre un compte,
- un profil peut exister et évoluer,
- une mission ou activité peut être suivie,
- l'administration peut piloter les contenus et les accès,
- la sécurité est déjà sérieuse,
- les premières vues fonctionnent en local et en prévisualisation Vercel.

## Finalisation complète
Après le MVP, la finalisation porte sur l'industrialisation du produit.

Axes de finalisation :
- paiements et commissions,
- évaluations avancées,
- réputation détaillée,
- collaboration d'équipe enrichie,
- formation structurée,
- automatisation des processus,
- analytics et supervision,
- internationalisation,
- performance et montée en charge,
- conformité et durcissement sécurité.

Travaux attendus :
- stabiliser l'architecture,
- renforcer les tests,
- optimiser les temps de réponse,
- améliorer l'observabilité,
- préparer la croissance multi-pays,
- consolider les règles d'exploitation.

## Exigences de sécurité transversales
La sécurité doit être appliquée partout et dès le départ.

Exigences minimales :
- validation stricte de toutes les entrées,
- contrôle d'accès fondé sur les rôles et permissions,
- protection contre les attaques courantes du web,
- gestion sûre des secrets et environnements,
- journalisation des événements sensibles,
- principe du moindre privilège,
- séparation claire des responsabilités,
- révision régulière des dépendances,
- gestion propre des erreurs pour éviter la fuite d'informations.

Exigences complémentaires :
- préparation à l'audit,
- documentation des décisions de sécurité,
- revue des comportements à risque,
- stratégie de sauvegarde et récupération,
- surveillance des anomalies.

## Rythme de travail recommandé
- Sprint court et lisible.
- Un objectif principal par sprint.
- Un incrément démontrable à la fin de chaque sprint.
- Une revue de sécurité systématique.
- Une mise à jour de la mémoire projet à chaque décision importante.

## Règle de suivi
Ce document doit être mis à jour à chaque changement de direction, de périmètre, d'architecture ou de priorité. Toute évolution importante doit être tracée dans memoire.md avec la date, le contexte, la décision, l'impact et le statut.