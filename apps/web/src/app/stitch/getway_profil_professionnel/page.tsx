import React from 'react';

export default function Page() {
  return (
    <div className="bg-background text-on-background font-body-md antialiased selection:bg-primary-container selection:text-white min-h-screen flex">
      <nav className="hidden md:flex flex-col h-full py-lg bg-surface-container border-r border-white/5 h-screen w-64 fixed left-0 top-0 z-40">
        <div className="px-6 mb-lg">
          <h1 className="font-headline-md text-headline-md text-primary font-bold tracking-tighter">GETWAY</h1>
        </div>
        <div className="px-6 mb-md flex items-center gap-sm">
          <div className="relative">
            <img alt="Partner level avatar" className="w-12 h-12 rounded-full border-2 border-primary-container object-cover" src="/stitch/getway_profil_professionnel/82233bcc9830.png" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary-container rounded-full border-2 border-surface-container flex items-center justify-center">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            </div>
          </div>
          <div>
            <h2 className="font-label-sm text-label-sm text-on-surface">Partner Portal</h2>
            <p className="font-label-sm text-label-sm text-tertiary mt-xs">Premium Tier</p>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          <ul className="space-y-xs">
            <li>
              <a className="flex items-center gap-4 text-on-surface-variant px-6 py-4 hover:bg-white/5 hover:text-on-surface transition-all translate-x-1 font-label-sm text-label-sm uppercase tracking-widest" href="#">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>dashboard</span>
                Dashboard
              </a>
            </li>
            <li>
              <a className="flex items-center gap-4 text-on-surface-variant px-6 py-4 hover:bg-white/5 hover:text-on-surface transition-all translate-x-1 font-label-sm text-label-sm uppercase tracking-widest" href="#">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>storefront</span>
                Marketplace
              </a>
            </li>
            <li>
              <a className="flex items-center gap-4 text-on-surface-variant px-6 py-4 hover:bg-white/5 hover:text-on-surface transition-all translate-x-1 font-label-sm text-label-sm uppercase tracking-widest" href="#">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>school</span>
                Learning Hub
              </a>
            </li>
            <li>
              <a className="flex items-center gap-4 bg-primary-container/20 text-primary border-r-4 border-primary px-6 py-4 translate-x-1 font-label-sm text-label-sm uppercase tracking-widest" href="#">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>account_circle</span>
                Portfolio
              </a>
            </li>
            <li>
              <a className="flex items-center gap-4 text-on-surface-variant px-6 py-4 hover:bg-white/5 hover:text-on-surface transition-all translate-x-1 font-label-sm text-label-sm uppercase tracking-widest" href="#">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>insights</span>
                Analytics
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-auto px-6 space-y-sm">
          <button className="w-full py-sm bg-black border border-[#D4AF37] text-[#D4AF37] rounded font-label-sm text-label-sm uppercase tracking-widest hover:bg-[#D4AF37]/10 transition-colors">Upgrade Status</button>
          <ul className="pt-sm border-t border-white/5 space-y-xs">
            <li>
              <a className="flex items-center gap-4 text-on-surface-variant py-2 hover:text-on-surface transition-colors font-label-sm text-label-sm uppercase tracking-widest" href="#">
                <span className="material-symbols-outlined text-[18px]">help</span> Support
              </a>
            </li>
            <li>
              <a className="flex items-center gap-4 text-on-surface-variant py-2 hover:text-on-surface transition-colors font-label-sm text-label-sm uppercase tracking-widest" href="#">
                <span className="material-symbols-outlined text-[18px]">logout</span> Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main className="flex-1 md:ml-64 bg-background min-h-screen relative overflow-hidden flex flex-col">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-primary-container/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-tertiary-container/5 rounded-full blur-[100px] pointer-events-none" />
        <section className="w-full max-w-[1200px] mx-auto px-margin-mobile md:px-gutter pt-xl pb-lg relative z-10 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-8 glass-panel rounded-xl p-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] group-hover:bg-primary/30 transition-all duration-700" />
              <div className="relative z-10 flex flex-col md:flex-row gap-lg items-start md:items-center">
                <div className="relative shrink-0">
                  <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-primary/30 shadow-[0_0_30px_rgba(123,47,190,0.4)] p-1 bg-surface-container">
                    <img alt="Partner Portrait" className="w-full h-full rounded-full object-cover" src="/stitch/getway_profil_professionnel/20d834eecc88.png" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black border border-[#D4AF37] px-3 py-1 rounded-full flex items-center gap-2 shadow-lg">
                    <span className="material-symbols-outlined text-[#D4AF37] text-[16px] animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="font-label-sm text-label-sm text-[#D4AF37] uppercase">Premium</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface">Alex Mercer</h1>
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  </div>
                  <p className="font-headline-md text-headline-md text-primary mb-4">Senior Systems Architect &amp; Creative Technologist</p>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6 max-w-2xl">Specializing in high-performance decentralized architectures and immersive glassmorphic UI engineering. Bridging the gap between elite engineering and technological luxury.</p>
                  <div className="flex flex-wrap gap-md">
                    <button className="bg-primary-container text-white font-label-sm text-label-sm uppercase tracking-widest py-3 px-8 rounded shadow-[0_0_15px_rgba(123,47,190,0.4)] hover:bg-inverse-primary transition-all flex items-center gap-2">
                      <span className="material-symbols-outlined">mail</span> Contact
                    </button>
                    <button className="bg-transparent border border-primary text-primary font-label-sm text-label-sm uppercase tracking-widest py-3 px-8 rounded hover:bg-primary/10 transition-all flex items-center gap-2">
                      <span className="material-symbols-outlined">handshake</span> Collaborate
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 flex flex-col gap-gutter">
              <div className="glass-panel rounded-xl p-md flex-1 flex flex-col justify-center items-center relative overflow-hidden group glow-hover transition-all duration-300">
                <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50" />
                <h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-2">Project Success</h3>
                <div className="font-display-lg text-display-lg-mobile md:text-display-lg text-gradient">99.8%</div>
                <p className="font-body-md text-body-md text-tertiary mt-2 flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">trending_up</span> Top 1% Network</p>
              </div>
              <div className="glass-panel rounded-xl p-md flex-1 flex flex-col justify-center relative glow-hover transition-all duration-300">
                <h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-4">Current Status</h3>
                <div className="flex items-center gap-3">
                  <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-primary-container" />
                  </span>
                  <span className="font-body-lg text-body-lg text-on-surface">Accepting New Protocols</span>
                </div>
                <div className="mt-4 pt-4 border-t border-white/5">
                  <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">Response Time: <span className="text-primary">&lt; 2 Hours</span></p>
                </div>
              </div>
            </div>
            <div className="md:col-span-12 glass-panel rounded-xl p-lg mt-md">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-6 flex items-center gap-2"><span className="material-symbols-outlined text-primary">terminal</span> Tech Cortex</h3>
              <div className="flex flex-wrap gap-sm">
                <div className="bg-primary-container/10 border border-primary/20 text-primary font-label-sm text-label-sm uppercase px-4 py-2 rounded-full">React / Next.js</div>
                <div className="bg-primary-container/10 border border-primary/20 text-primary font-label-sm text-label-sm uppercase px-4 py-2 rounded-full">WebGL &amp; Three.js</div>
                <div className="bg-primary-container/10 border border-primary/20 text-primary font-label-sm text-label-sm uppercase px-4 py-2 rounded-full">Smart Contracts</div>
                <div className="bg-primary-container/10 border border-primary/20 text-primary font-label-sm text-label-sm uppercase px-4 py-2 rounded-full">System Architecture</div>
                <div className="bg-surface-container border border-white/10 text-on-surface-variant font-label-sm text-label-sm uppercase px-4 py-2 rounded-full">Tailwind CSS</div>
                <div className="bg-surface-container border border-white/10 text-on-surface-variant font-label-sm text-label-sm uppercase px-4 py-2 rounded-full">TypeScript</div>
                <div className="bg-surface-container border border-white/10 text-on-surface-variant font-label-sm text-label-sm uppercase px-4 py-2 rounded-full">GraphQL</div>
                <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] font-label-sm text-label-sm uppercase px-4 py-2 rounded-full flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">military_tech</span> Master Level</div>
              </div>
            </div>
          </div>
        </section>
        <footer className="w-full py-xl bg-surface-container-lowest border-t border-white/5 mt-auto flex flex-col md:flex-row justify-between items-center px-margin-desktop gap-md z-20 relative">
          <div className="font-headline-md text-headline-md text-primary">GETWAY</div>
          <div className="font-body-md text-body-md text-on-surface-variant text-center md:text-left">© 2024 GETWAY. All rights reserved. The future is collaborative.</div>
          <div className="flex gap-md">
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100" href="#">Terms</a>
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100" href="#">Privacy</a>
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100" href="#">Status</a>
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100" href="#">Careers</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
