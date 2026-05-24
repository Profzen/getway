import React from 'react';
import Link from 'next/link';

type Props = { params: { slug: string } };

export default function StitchPage({ params }: Props) {
  const { slug } = params;

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-on-background p-md">
      <div className="max-w-xl text-center">
        <h1 className="font-headline-lg mb-md">Prévisualisation désactivée</h1>
        <p className="mb-lg text-on-surface-variant">La prévisualisation automatique des maquettes via iframe a été désactivée — chaque maquette est désormais transcrite manuellement en composants React pixel‑perfect.</p>
        <p className="mb-lg">Si la page `{slug}` a été convertie, accède directement à son URL dédiée ou consulte l'index des maquettes.</p>
        <div className="flex justify-center gap-4">
          <Link href="/stitch" className="px-4 py-2 rounded bg-primary-container text-white">Voir l'index Stitch</Link>
          <Link href="/" className="px-4 py-2 rounded border">Accueil</Link>
        </div>
      </div>
    </div>
  );
}
