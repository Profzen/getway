import React from 'react';

type Props = {
  children?: React.ReactNode;
  className?: string;
};

export default function GlassPanel({ children, className = '' }: Props) {
  return (
    <div className={`glass-panel rounded-xl ${className}`}>{children}</div>
  );
}
