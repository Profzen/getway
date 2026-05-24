import React from 'react';

type Props = {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
};

export default function Section({ title, subtitle, children, className = '' }: Props) {
  return (
    <section className={`mb-xl ${className}`}>
      {title && (
        <div className="mb-md">
          <h2 className="font-headline-md">{title}</h2>
          {subtitle && <p className="text-on-surface-variant">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
}
