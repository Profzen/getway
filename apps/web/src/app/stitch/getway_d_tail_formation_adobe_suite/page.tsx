import React from 'react';
import ProfileCard from '@/components/stitch/ProfileCard';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col font-body-md text-body-md selection:bg-primary-container selection:text-white bg-background text-on-background">
      {/* Header provided by layout */}

      <main className="flex-grow pt-[120px] pb-xl px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto w-full flex flex-col gap-xl">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center min-h-[614px] relative">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary-container/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
          <div className="lg:col-span-6 flex flex-col gap-md z-10">
            <div className="flex gap-sm flex-wrap">
              <span className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full font-label-sm uppercase">12 Semaines</span>
              <span className="bg-surface-container-high text-on-surface-variant border border-outline-variant/30 px-3 py-1 rounded-full font-label-sm uppercase">Avancé</span>
              <span className="bg-tertiary/10 text-tertiary border border-tertiary/20 px-3 py-1 rounded-full font-label-sm uppercase">Certifiant</span>
            </div>
            <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-surface tracking-tight">
              Masterclass <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Suite Adobe</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          }
          <div className="flex flex-col gap-xs">
            <h2 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-surface">Compétences Cibles</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Un programme intensif conçu pour forger des créateurs d'élite.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            <div className="bg-surface-container-low/80 p-md rounded-xl">Photoshop Avancé</div>
            <div className="bg-surface-container-low/80 p-md rounded-xl">Maîtrise Illustrator</div>
            <div className="bg-surface-container-low/80 p-md rounded-xl">Montage Premiere Pro</div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-xl mt-lg">
          <div className="lg:col-span-8 flex flex-col gap-lg">
            <h2 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-surface">Curriculum Détaillé</h2>
            <div className="flex flex-col border border-outline-variant/15 rounded-xl bg-surface-container-lowest overflow-hidden">
              <div className="border-b p-md">Module examples...</div>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-md">
            <div className="bg-surface-container p-md rounded-xl">
              <div className="my-md">
                <span className="font-display-lg text-display-lg text-on-surface">1 490€</span>
                <span className="font-body-md text-body-md text-on-surface-variant">/ cycle complet</span>
              </div>
              <button className="w-full bg-tertiary text-on-tertiary py-3 rounded-lg">Réserver ma place</button>
            </div>
            <ProfileCard name="Julien Moreau" role="Directeur Artistique & Motion Designer" img="/stitch/getway_d_tail_formation_adobe_suite/e59ea2f1c99a.png" />
          </div>
        </section>
      </main>
    </div>
  );
}
}
