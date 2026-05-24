import React from 'react';

export default function Page() {
  return (
    <div className="bg-background text-on-background min-h-screen font-body-md selection:bg-primary-container selection:text-on-primary-container bg-gradient-obsidian">
      {/* Header provided by layout */}

      <main className="w-full min-h-screen flex flex-col lg:flex-row pt-24 lg:pt-0">
        <section className="w-full lg:w-5/12 lg:fixed lg:h-screen lg:left-0 lg:top-0 lg:pt-32 px-margin-mobile lg:px-margin-desktop pb-md lg:pb-xl flex flex-col justify-center relative overflow-hidden">
          <div className="absolute inset-0 z-[-1] opacity-30 mix-blend-screen" style={{ backgroundImage: "url('/stitch/getway_devenir_partenaire/2fd6a0b95519.png')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="space-y-lg relative z-10">
            <div>
              <span className="inline-flex items-center gap-xs font-label-sm text-label-sm text-tertiary uppercase tracking-widest mb-sm"><span className="w-2 h-2 rounded-full bg-tertiary" /> Écosystème Partenaire</span>
          }
            <div className="flex justify-between items-center mb-xl">
              <div className="flex items-center gap-sm">
                <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center">1</div>
                <span className="font-headline-md text-sm">Création de profil</span>
              </div>
              <div className="flex items-center gap-sm opacity-50">
                <div className="w-8 h-8 rounded-full bg-surface-container">2</div>
                <span className="hidden sm:inline">Vérification</span>
              </div>
            </div>
            <form className="space-y-xl">
              <div className="space-y-md">
                <div className="space-y-sm">
                  <h3 className="font-headline-md">Vos Informations</h3>
                  <p className="text-on-surface-variant text-sm">Créez votre identité au sein de l'écosystème.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
                  <div className="space-y-xs">
                    <label className="font-label-sm text-on-surface-variant">Prénom</label>
                    <input className="w-full bg-surface-container-high rounded-lg p-sm" placeholder="Jean" />
                  </div>
                  <div className="space-y-xs">
                    <label className="font-label-sm text-on-surface-variant">Nom</label>
                    <input className="w-full bg-surface-container-high rounded-lg p-sm" placeholder="Dupont" />
                  </div>
                </div>
              </div>
              <div className="pt-sm">
                <button className="w-full bg-surface-lowest border border-tertiary text-tertiary py-md rounded-lg">Rejoindre l'Écosystème</button>
              </div>
            </form>
          </div>
          <div className="mt-xl text-center text-on-surface-variant opacity-60">© 2024 GETWAY Ecosystem. All rights reserved.</div>
        </section>
      </main>
    </div>
  );
}
}
