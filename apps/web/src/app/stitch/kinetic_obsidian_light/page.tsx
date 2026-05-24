import React from 'react';

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-on-background font-body-md">
      {/* Header provided by layout */}

      <main className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop py-xl">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-center">
          <div className="lg:col-span-6">
            <h1 className="font-display-lg mb-md">Workspace lumineux pour équipes haut-de-gamme</h1>
            <p className="text-on-surface-variant mb-lg">Clarté, précision et productivité : l'expérience Kinetic en mode clair.</p>
            <div className="flex gap-4">
              <button className="bg-primary text-white px-5 py-3 rounded">Découvrir</button>
              <button className="border border-outline px-5 py-3 rounded">Documentation</button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-xl overflow-hidden bg-white p-md border border-outline">
              <div className="h-64 bg-gradient-to-br from-primary/20 via-primary-container/10 to-transparent rounded-lg flex items-center justify-center">Aperçu UI (clair)</div>
            </div>
          </div>
        </section>

        <section className="mt-lg grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-md rounded-xl bg-white border border-outline">Gestion des accès</div>
          <div className="p-md rounded-xl bg-white border border-outline">Historique & versions</div>
          <div className="p-md rounded-xl bg-white border border-outline">Intégrations & API</div>
        </section>
      </main>
    </div>
  );
}
