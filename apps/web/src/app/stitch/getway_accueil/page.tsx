import React from 'react';

export default function GetwayAccueil() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary-container blur-[150px] opacity-20"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-tertiary-container blur-[120px] opacity-10"></div>
      </div>

      {/* Header provided by layout */}

      <main className="flex-grow z-10">
        <section className="min-h-[819px] flex flex-col justify-center items-center px-margin-mobile md:px-margin-desktop py-xl relative">
          <div className="max-w-4xl text-center space-y-md">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-container/10 border border-primary-container/30 text-primary font-label-sm text-label-sm uppercase tracking-widest mb-4">
              L'Écosystème GETWAY
            </span>
            <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-surface leading-tight">
              Votre passerelle vers <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-inverse-primary">l'avenir numérique</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto pt-sm">
              Une plateforme collaborative de haute performance conçue pour les innovateurs. Connectez-vous, créez et propulsez vos projets vers de nouveaux sommets.
            </p>
            <div className="pt-lg flex flex-col sm:flex-row justify-center gap-md">
              <button className="btn-primary px-8 py-4 font-label-sm text-label-sm uppercase tracking-widest hover:bg-inverse-primary transition-colors shadow-[0_0_20px_rgba(123,47,190,0.3)]">
                Rejoindre l'écosystème
              </button>
              <button className="px-8 py-4 border border-white/15 rounded text-on-surface hover:bg-white/5 transition-colors font-label-sm text-label-sm uppercase tracking-widest flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[18px]">play_circle</span>
                Découvrir la vision
              </button>
            </div>
          </div>
        </section>

        <section className="px-margin-mobile md:px-margin-desktop py-xl max-w-[1440px] mx-auto">
          <div className="mb-lg">
            <h2 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-surface">Nos Fondations</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-xs">Les piliers qui soutiennent notre communauté.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="glass-panel p-md rounded-xl glow-hover transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-primary-container/20 flex items-center justify-center mb-sm border border-primary-container/30">
                <span className="material-symbols-outlined text-primary text-[24px]">flight_takeoff</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-xs group-hover:text-primary transition-colors">Liberté</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Indépendance technologique et créative pour bâtir sans contraintes.</p>
            </div>
            <div className="glass-panel p-md rounded-xl glow-hover transition-all duration-300 group md:col-span-2">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-tertiary-container/20 flex items-center justify-center mb-sm border border-tertiary-container/30">
                    <span className="material-symbols-outlined text-tertiary text-[24px]">gavel</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-xs group-hover:text-tertiary transition-colors">Responsabilité</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-md">Engagement envers l'excellence, la sécurité et l'impact durable de nos actions numériques.</p>
                </div>
                <div className="mt-lg h-24 bg-surface-container-high rounded-lg border border-white/5 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[url('/stitch/getway_platform_flow/cubes.png')] opacity-10"></div>
                </div>
              </div>
            </div>
            <div className="glass-panel p-md rounded-xl glow-hover transition-all duration-300 group md:col-span-3 flex flex-col md:flex-row items-center gap-lg">
              <div className="flex-1">
                <div className="w-12 h-12 rounded-lg bg-primary-container/20 flex items-center justify-center mb-sm border border-primary-container/30">
                  <span className="material-symbols-outlined text-primary text-[24px]">hub</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-xs group-hover:text-primary transition-colors">Collaboration</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">L'intelligence collective amplifiée. Travaillez en synergie avec des experts du monde entier dans un environnement pensé pour la haute performance.</p>
              </div>
              <div className="flex-1 w-full flex justify-center gap-sm">
                <div className="w-14 h-14 rounded-full border-2 border-primary bg-surface-container-high flex items-center justify-center relative shadow-[0_0_15px_rgba(123,47,190,0.4)] z-30">
                  <img alt="User avatar" className="w-full h-full rounded-full object-cover" src="/stitch/getway_platform_flow/51339458576c.png"/>
                </div>
                <div className="w-14 h-14 rounded-full border-2 border-tertiary bg-surface-container-high flex items-center justify-center relative -ml-6 z-20">
                  <img alt="User avatar" className="w-full h-full rounded-full object-cover" src="/stitch/getway_platform_flow/71a23fe95618.png"/>
                </div>
                <div className="w-14 h-14 rounded-full border-2 border-[#A855F7] bg-surface-container-high flex items-center justify-center relative -ml-6 z-10">
                  <img alt="User avatar" className="w-full h-full rounded-full object-cover" src="/stitch/getway_platform_flow/f96eb35550f1.png"/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer provided by layout */}
    </div>
  );
}
