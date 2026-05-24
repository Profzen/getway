import React from 'react';

export function H1({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h1 className={className} style={{ fontFamily: 'var(--font-ui)', fontSize: '2.25rem', lineHeight: 1.05 }}>
      {children}
    </h1>
  );
}

export function P({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={className} style={{ fontFamily: 'var(--font-ui)', fontSize: '1rem', lineHeight: 1.6 }}>
      {children}
    </p>
  );
}

export default { H1, P };
