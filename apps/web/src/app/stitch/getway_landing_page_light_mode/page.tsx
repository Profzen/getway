import React from 'react';

export default function Page() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative overflow-hidden w-full px-lg py-[80px] md:py-[120px] bg-surface-container-lowest">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-fixed rounded-full blur-[120px] opacity-30 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row items-center gap-xxl relative z-10">
          <div className="flex-1 flex flex-col gap-lg items-start">
            <div className="inline-flex items-center gap-sm bg-primary-fixed text-primary px-md py-sm rounded-full font-label-sm text-label-sm border border-secondary-fixed-dim">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
              Système Écosystème v2.0 Actif
            </div>
            <h1 className="font-display-lg text-display-lg md:text-[64px] md:leading-[72px] font-bold text-on-surface tracking-tight mt-4">
              Votre passerelle vers <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-secondary">l'avenir numérique</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[540px] mt-4">
              Découvrez une suite d'outils professionnels conçue pour les visionnaires. GETWAY unifie vos services, formations et
              partenariats dans une interface claire, rapide et immaculée.
            </p>
            <div className="flex flex-col sm:flex-row gap-md mt-sm w-full sm:w-auto">
              <button className="bg-primary-container text-on-primary-container font-label-md text-label-md px-lg py-md rounded-lg shadow-[0px_4px_20px_rgba(0,0,0,0.04)] hover:opacity-90 transition-opacity whitespace-nowrap">
                Explorer l'Écosystème
              </button>
              <button className="bg-transparent border border-outline-variant text-primary font-label-md text-label-md px-lg py-md rounded-lg hover:bg-surface-container transition-colors whitespace-nowrap">
                Voir la Démo
              </button>
            </div>
          </div>

          <div className="flex-1 w-full flex justify-center relative mt-8 md:mt-0">
            <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-[24px] bg-surface-container-lowest border border-outline-variant shadow-[0px_12px_40px_rgba(0,0,0,0.08)] p-sm overflow-hidden transform transition-transform hover:scale-[1.02] duration-500">
              <div className="w-full h-full rounded-[16px] overflow-hidden relative bg-surface-container">
                <img
                  alt="Futuristic Digital Portal"
                  className="w-full h-full object-cover opacity-90"
                  src="/stitch/getway_landing_page_light_mode/1e9ba8fa2709.png"
                />
                <div className="absolute bottom-lg left-lg right-lg bg-surface-bright/80 backdrop-blur-md border border-outline-variant p-md rounded-xl flex items-center gap-md">
                  <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined" data-icon="rocket_launch">
                      rocket_launch
                    </span>
                  </div>
                  <div>
                    <h4 className="font-label-md text-label-md text-on-surface">Vitesse de Connexion</h4>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">Optimisée pour la performance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition / Bento Grid */}
      <section className="w-full px-lg py-xxl bg-background">
        <div className="max-w-container-max mx-auto flex flex-col gap-xl">
          <div className="flex flex-col gap-sm items-center text-center max-w-2xl mx-auto mb-md">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Une architecture conçue pour l'excellence</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Tout ce dont vous avez besoin pour propulser votre activité, structuré dans une interface minimaliste et puissante.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="md:col-span-2 bg-surface-container-lowest border border-outline-variant rounded-2xl p-lg flex flex-col justify-between hover:shadow-[0px_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300 min-h-[300px] overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-fixed rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:opacity-80 transition-opacity" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-primary-fixed text-primary rounded-lg flex items-center justify-center mb-md">
                  <span className="material-symbols-outlined" data-icon="dashboard_customize">dashboard_customize</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-sm">Espace Partenaire Unifié</h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-md">Gérez vos collaborations, suivez vos métriques et accédez aux ressources exclusives depuis un tableau de bord centralisé et ultra-réactif.</p>
              </div>
              <div className="relative z-10 mt-xl">
                <button className="text-primary font-label-md text-label-md flex items-center gap-xs hover:gap-sm transition-all">Découvrir <span className="material-symbols-outlined text-[18px]">arrow_forward</span></button>
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-lg flex flex-col hover:shadow-[0px_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300">
              <div className="w-12 h-12 bg-surface-container-high text-on-surface-variant rounded-lg flex items-center justify-center mb-md">
                <span className="material-symbols-outlined" data-icon="school">school</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-sm text-[20px] leading-[28px]">Formation Continue</h3>
              <p className="font-body-md text-body-md text-on-surface-variant flex-grow">Accédez à notre hub d'apprentissage pour maîtriser les dernières technologies numériques.</p>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-lg flex flex-col hover:shadow-[0px_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300">
              <div className="w-12 h-12 bg-surface-container-high text-on-surface-variant rounded-lg flex items-center justify-center mb-md">
                <span className="material-symbols-outlined" data-icon="storefront">storefront</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-sm text-[20px] leading-[28px]">Marketplace Pro</h3>
              <p className="font-body-md text-body-md text-on-surface-variant flex-grow">Déployez des services certifiés GETWAY directement dans votre environnement de travail.</p>
            </div>

            <div className="md:col-span-2 bg-surface-container-lowest border border-outline-variant rounded-2xl p-lg flex flex-col md:flex-row items-center gap-lg hover:shadow-[0px_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300">
              <div className="flex-1">
                <div className="inline-flex items-center gap-xs px-sm py-xs bg-surface-variant rounded-full text-on-surface-variant font-label-sm text-label-sm mb-sm">
                  <span className="material-symbols-outlined text-[14px]" data-icon="security">security</span> Sécurité de niveau entreprise
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-sm text-[20px] leading-[28px]">Infrastructures Résilientes</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Vos données sont protégées par les standards les plus stricts de l'industrie, garantissant disponibilité et confidentialité à chaque instant.</p>
              </div>
              <div className="w-full md:w-48 h-32 bg-surface-container rounded-xl border border-outline-variant flex items-center justify-center overflow-hidden">
                <div className="w-full h-full" style={{ background: 'repeating-linear-gradient(45deg, #e9dfec, #e9dfec 10px, #ffffff 10px, #ffffff 20px)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
