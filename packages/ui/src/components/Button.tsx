import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost' | 'flat';
};

export function Button({ variant = 'primary', children, style, ...rest }: ButtonProps) {
  const base: React.CSSProperties = {
    fontFamily: 'var(--font-ui, Inter, system-ui, sans-serif)',
    padding: 'var(--spacing-sm, 8px) var(--spacing-md, 16px)',
    borderRadius: 'var(--radius-md, 16px)',
    border: 'none',
    cursor: 'pointer',
  };

  const variants: Record<string, React.CSSProperties> = {
    primary: {
      background: 'var(--primary, #7B2FBE)',
      color: 'var(--whitePure, #FFFFFF)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--primary, #7B2FBE)',
      border: '1px solid var(--border, rgba(22,19,22,0.08))',
    },
    flat: {
      background: 'var(--surface, #FFFFFF)',
      color: 'var(--text, #161316)',
      border: '1px solid var(--border, rgba(22,19,22,0.08))',
    },
  };

  return (
    <button
      {...rest}
      style={{ ...base, ...variants[variant], ...style }}
    >
      {children}
    </button>
  );
}

export default Button;
