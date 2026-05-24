import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-white/5 mt-12">
      <div className="max-w-[1440px] mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-bold text-lg">GETWAY</div>
        <div className="flex gap-6">
          <a className="text-on-surface-variant hover:text-primary">Terms</a>
          <a className="text-on-surface-variant hover:text-primary">Privacy</a>
          <a className="text-on-surface-variant hover:text-primary">Careers</a>
        </div>
        <div className="text-on-surface-variant">© 2024 GETWAY</div>
      </div>
    </footer>
  );
}
