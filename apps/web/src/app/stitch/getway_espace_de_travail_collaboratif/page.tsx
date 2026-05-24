import React from 'react';
import GlassPanel from '@/components/stitch/GlassPanel';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col font-body-md text-body-md bg-background text-on-background">
      <nav className="hidden md:flex flex-col p-md bg-surface-container-low/90 w-64 border-r border-outline-variant/15 h-screen sticky top-0">
        <div className="mb-lg">
          <h1 className="font-headline-md text-primary font-bold">GETWAY</h1>
          <div className="mt-xs flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border border-primary overflow-hidden">
              <img alt="Partner avatar" className="w-full h-full object-cover" src="/stitch/getway_espace_de_travail_collaboratif/d579b5de75f3.png" />
            </div>
            <div>
              <div className="font-label-sm text-label-sm text-on-surface">Partner Space</div>
          }
            <div>
              <div className="font-label-sm text-label-sm text-primary uppercase">Projet Actif</div>
              <h2 className="font-headline-xl-mobile md:font-headline-xl text-on-surface">Refonte E-commerce Alpha</h2>
            </div>
            <div className="flex items-center gap-xs">
              <div className="flex -space-x-2">
                <img className="w-8 h-8 rounded-full border-2 border-primary" alt="Member" src="/stitch/getway_espace_de_travail_collaboratif/21fbd099684c.png" />
                <img className="w-8 h-8 rounded-full border-2 border-tertiary" alt="Member" src="/stitch/getway_espace_de_travail_collaboratif/50544937da05.png" />
              </div>
              <button className="bg-primary-container text-white px-sm py-xs rounded-DEFAULT ml-sm">Inviter</button>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-md">
            <GlassPanel className="md:col-span-8 p-md">
              <h3 className="font-headline-md mb-sm">Progression &amp; Statut</h3>
              <div className="space-y-md">
                <div className="border-l pl-6">Phase items...</div>
              </div>
            </GlassPanel>

            <GlassPanel className="md:col-span-4 p-md h-[400px]">
              <h3 className="font-headline-md mb-sm">Canal d'équipe</h3>
              <div className="mt-4 space-y-4">
                <div className="flex gap-2">
                  <img className="w-6 h-6 rounded-full" alt="User" src="/stitch/getway_espace_de_travail_collaboratif/89b666745e60.png" />
                  <div className="bg-surface-container rounded-lg p-2">Les wireframes de la page produit sont prêts pour revue.</div>
                </div>
                <div className="flex gap-2 flex-row-reverse">
                  <img className="w-6 h-6 rounded-full" alt="User" src="/stitch/getway_espace_de_travail_collaboratif/14bdaf982881.png" />
                  <div className="bg-primary/20 rounded-lg p-2">Super, je regarde ça d'ici 1h.</div>
                </div>
              </div>
            </GlassPanel>

            <GlassPanel className="md:col-span-6 p-md">
              <h3 className="font-headline-md mb-sm">Tâches Prioritaires</h3>
              <div className="space-y-2">Task list...</div>
            </GlassPanel>

            <GlassPanel className="md:col-span-6 p-md">
              <h3 className="font-headline-md mb-sm">Fichiers Récents</h3>
              <div className="grid grid-cols-2 gap-sm">Files...</div>
            </GlassPanel>
          </div>
        </div>
      </main>
    </div>
  );
}
}
