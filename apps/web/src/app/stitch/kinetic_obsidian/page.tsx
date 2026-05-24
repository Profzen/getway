import React from 'react';

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-on-background font-body-md">
      {/* Header provided by layout */}

      <main className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop py-xl">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-center">
          <div className="lg:col-span-6">
            <h1 className="font-display-lg mb-md">Command Center pour équipes créatives</h1>
            <p className="text-on-surface-variant mb-lg">Interface premium pour collaboration en temps réel, insights et contrôle total des workflows.</p>
            <div className="flex gap-4">
              <button className="bg-primary text-white px-5 py-3 rounded">Lancer l'espace</button>
              <button className="border border-outline px-5 py-3 rounded">Découvrir</button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-xl overflow-hidden bg-surface-container p-md border border-outline-variant">
              <div className="h-64 bg-gradient-to-br from-primary/40 via-primary-container/20 to-transparent rounded-lg flex items-center justify-center text-on-primary-container">Aperçu UI</div>
            </div>
          </div>
        </section>

        <section className="mt-lg grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-md rounded-xl bg-surface-container-low/80 border border-outline">Présence & collaboration</div>
          <div className="p-md rounded-xl bg-surface-container-low/80 border border-outline">Flux de tâches et versions</div>
          <div className="p-md rounded-xl bg-surface-container-low/80 border border-outline">Tableaux de bord analytiques</div>
        </section>
      </main>
    </div>
  );
}
