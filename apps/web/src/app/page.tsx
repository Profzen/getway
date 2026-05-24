const pillars = [
  {
    title: 'Apprendre',
    description: 'Accès aux parcours pratiques, aux contenus structurés et aux premières expériences utiles.',
  },
  {
    title: 'Collaborer',
    description: 'Travail en équipe, missions partagées et coordination fluide entre partenaires.',
  },
  {
    title: 'Évoluer',
    description: 'Progression lisible, réputation, portfolio et montée en autonomie professionnelle.',
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

export default function HomePage() {
  return (
    <main className="min-h-screen px-4 py-6 md:px-10 lg:px-16">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col gap-8">
        <header className="flex flex-col gap-6 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-6 py-5 shadow-[var(--shadow)] backdrop-blur-xl md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">GETWAY</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--text)] md:text-5xl">
              Votre passerelle vers l&apos;avenir numérique
            </h1>
          </div>
          <div className="flex gap-3">
            <button className="rounded-full border border-[var(--border)] bg-[var(--bg-soft)] px-5 py-3 text-sm font-semibold text-[var(--text)]">
              Explorer
            </button>
            <button className="rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(123,47,190,0.22)]">
              Rejoindre
            </button>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)]">
            <span className="inline-flex rounded-full border border-[var(--border)] bg-[var(--primary-soft)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
              Light mode base
            </span>
            <h2 className="mt-6 max-w-2xl text-4xl font-semibold tracking-tight text-[var(--text)] md:text-6xl">
              Une plateforme collaborative pensée pour apprendre, produire et évoluer.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
              GETWAY structure l&apos;expérience professionnelle dès le départ, avec un socle clair, une identité premium et une logique d&apos;évolution crédible.
            </p>
          </div>

          <div className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-soft)] p-6 shadow-[var(--shadow)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Direction visuelle</p>
            <div className="mt-4 space-y-3">
              <div className="rounded-2xl border border-[var(--border)] bg-white p-4">
                <p className="text-sm font-semibold text-[var(--text)]">Base claire</p>
                <p className="mt-1 text-sm text-[var(--text-soft)]">Lisible, premium, nette, adaptée aux premières vues Vercel.</p>
              </div>
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-soft)] p-4">
                <p className="text-sm font-semibold text-[var(--text)]">Variante sombre</p>
                <p className="mt-1 text-sm text-[var(--text-soft)]">Déclinaison obsidienne pour les écrans de pilotage et les vues premium.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Demo UI</p>
          <div className="mt-4 flex flex-col gap-4">
            <div className="flex gap-4">
              <button className="rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-white">Primary</button>
              <button className="rounded-full border border-[var(--border)] bg-transparent px-4 py-2 text-sm font-semibold text-[var(--primary)]">Ghost</button>
              <button className="rounded-full bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--text)]">Flat</button>
            </div>

            <div className="mt-2 max-w-md">
              <div className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface-strong)] p-4">
                <h4 className="text-lg font-semibold text-[var(--text)]">SurfaceCard example</h4>
                <p className="mt-2 text-sm text-[var(--text-soft)]">Les composants partagés utilisent maintenant les tokens du design system.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)]">
              <h3 className="text-xl font-semibold text-[var(--text)]">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">{pillar.description}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Services</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {services.map((service) => (
                <div key={service} className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm font-medium text-[var(--text)]">
                  {service}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-soft)] p-6 shadow-[var(--shadow)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Sécurité</p>
            <h3 className="mt-3 text-2xl font-semibold text-[var(--text)]">La sécurité est une règle de base</h3>
            <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">
              Validation stricte des entrées, contrôle d&apos;accès, protection des secrets, réduction de la surface d&apos;attaque et journalisation maîtrisée.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
