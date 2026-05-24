const pillars = [
  {
    title: 'Apprendre',
    description: 'Des parcours concrets, structurés et utiles dès les premières interactions.',
  },
  {
    title: 'Collaborer',
    description: 'Des missions partagées et une coordination lisible entre partenaires et équipes.',
  },
  {
    title: 'Évoluer',
    description: 'Une progression visible, un historique propre et une montée en autonomie crédible.',
  },
];

const roadmap = [
  {
    step: 'Sprint 2',
    title: 'Identité produit et expérience initiale',
    description: 'On rend GETWAY lisible, crédible et désirable avec une home solide, responsive et cohérente.',
  },
  {
    step: 'Sprint 3',
    title: 'Authentification et comptes',
    description: 'On sécurise l’accès, les sessions et les rôles avant d’ouvrir les parcours utilisateurs.',
  },
  {
    step: 'Sprint 4',
    title: 'Profils et réputation',
    description: 'On structure les profils, les niveaux et l’historique pour construire le cœur métier.',
  },
];

const services = [
  'Développement web et mobile',
  'Design & communication',
  'Création de CV professionnels',
  'Assistance numérique',
  'Formations pratiques',
  'Gestion de projets digitaux',
];

const proofPoints = [
  'Base claire pour le local et Vercel',
  'Design light-first avec variante sombre',
  'Socle prêt pour les vrais flux métier',
];

export default function HomePage() {
  return (
    <main className="min-h-screen px-4 py-6 md:px-8 lg:px-12">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col gap-6">
        <header className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-6 py-5 shadow-[var(--shadow)] backdrop-blur-xl md:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[var(--accent)]">GETWAY</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--text)] md:text-6xl">
                Une plateforme collaborative pour apprendre, produire et évoluer.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--text-soft)] md:text-lg">
                Sprint 2 démarre ici : une identité produit lisible, une home crédible et une base technique prête à accueillir les vrais parcours métier.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#roadmap"
                className="rounded-full border border-[var(--border)] bg-[var(--bg-soft)] px-5 py-3 text-sm font-semibold text-[var(--text)]"
              >
                Voir la feuille de route
              </a>
              <a
                href="#services"
                className="rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(123,47,190,0.22)]"
              >
                Découvrir les services
              </a>
            </div>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)] md:p-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--primary-soft)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
              Sprint 2 en cours
            </div>

            <h2 className="mt-6 max-w-2xl text-3xl font-semibold tracking-tight text-[var(--text)] md:text-5xl">
              Construire une home qui explique le produit en moins d’une minute.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--text-soft)] md:text-lg">
              GETWAY doit déjà donner envie, clarifier la promesse et préparer les parcours à venir sans brouiller la lecture. La page d’accueil sert maintenant de point d’entrée produit.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {proofPoints.map((point) => (
                <span
                  key={point}
                  className="rounded-full border border-[var(--border)] bg-[var(--bg-soft)] px-4 py-2 text-sm font-medium text-[var(--text)]"
                >
                  {point}
                </span>
              ))}
            </div>
          </div>

          <aside className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-soft)] p-6 shadow-[var(--shadow)] md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Ce qu’on verrouille</p>
            <div className="mt-4 space-y-3">
              <div className="rounded-2xl border border-[var(--border)] bg-white p-4">
                <p className="text-sm font-semibold text-[var(--text)]">Lisibilité immédiate</p>
                <p className="mt-1 text-sm leading-6 text-[var(--text-soft)]">Un visiteur doit comprendre la valeur dès la première vue.</p>
              </div>
              <div className="rounded-2xl border border-[var(--border)] bg-white p-4">
                <p className="text-sm font-semibold text-[var(--text)]">Base responsive</p>
                <p className="mt-1 text-sm leading-6 text-[var(--text-soft)]">La page doit rester propre sur mobile, desktop et Vercel preview.</p>
              </div>
              <div className="rounded-2xl border border-[var(--border)] bg-white p-4">
                <p className="text-sm font-semibold text-[var(--text)]">Préparation auth</p>
                <p className="mt-1 text-sm leading-6 text-[var(--text-soft)]">La suite logique est le Sprint 3 avec comptes et sessions sécurisés.</p>
              </div>
            </div>
          </aside>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)]">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Pilier</p>
              <h3 className="mt-3 text-xl font-semibold text-[var(--text)]">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">{pillar.description}</p>
            </article>
          ))}
        </section>

        <section id="roadmap" className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)] md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Feuille de route</p>
          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            {roadmap.map((item) => (
              <article key={item.title} className="rounded-2xl border border-[var(--border)] bg-[var(--bg-soft)] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">{item.step}</p>
                <h3 className="mt-3 text-lg font-semibold text-[var(--text)]">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-soft)] p-6 shadow-[var(--shadow)] md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Services</p>
            <h3 className="mt-3 text-2xl font-semibold text-[var(--text)]">Les premiers blocs métier à exposer</h3>
            <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">
              La home doit déjà refléter les axes de la plateforme : apprentissage, collaboration, services et montée en autonomie.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {services.map((service) => (
                <div key={service} className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm font-medium text-[var(--text)]">
                  {service}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-soft)] p-6 shadow-[var(--shadow)] md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Sécurité</p>
            <h3 className="mt-3 text-2xl font-semibold text-[var(--text)]">La sécurité reste une règle de base</h3>
            <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">
              Validation stricte des entrées, contrôle d&apos;accès, secrets hors du repo et surface d&apos;attaque minimale dès les premières étapes.
            </p>

            <div className="mt-5 rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-4">
              <p className="text-sm font-semibold text-[var(--text)]">État actuel</p>
              <p className="mt-1 text-sm leading-6 text-[var(--text-soft)]">Web prêt, mobile en vérification, table d’exemple Supabase créée pour valider le pipeline de données.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
