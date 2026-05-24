import React from 'react';
import { LogoIcon } from './Icon';
import { Button } from './Button';

export function Header() {
  return (
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <LogoIcon size={36} />
        <div>
          <div style={{ fontSize: 12, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--accent)' }}>GETWAY</div>
          <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--text)' }}>Votre passerelle vers l'avenir numérique</div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 10 }}>
        <Button variant="flat">Explorer</Button>
        <Button variant="primary">Rejoindre</Button>
      </div>
    </header>
  );
}

export default Header;
