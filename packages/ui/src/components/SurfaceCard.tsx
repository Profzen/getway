import type { ReactNode } from 'react';
import React from 'react';

export function SurfaceCard({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <section className={className} style={cardStyle}>
      {children}
    </section>
  );
}

const cardStyle: React.CSSProperties = {
  borderRadius: 'var(--radius, 24px)',
  border: '1px solid var(--border, rgba(22, 19, 22, 0.08))',
  background: 'var(--surface-strong, #ffffff)',
  boxShadow: 'var(--shadow, 0 18px 60px rgba(20, 14, 24, 0.08))',
  padding: 'var(--spacing-md, 24px)',
};
