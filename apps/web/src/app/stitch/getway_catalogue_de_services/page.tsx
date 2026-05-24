import React from 'react';
import GlassPanel from '@/components/stitch/GlassPanel';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col font-body-md text-body-md selection:bg-primary-container selection:text-white">
      {/* Header provided by layout */}

      <nav className="md:hidden fixed bottom-0 w-full bg-surface-container border-t border-white/5 z-50 py-sm px-margin-mobile flex justify-around items-center">
        <a className="flex flex-col items-center gap-xs text-on-surface-variant" href="#">
          <span className="material-symbols-outlined">home</span>
          <span className="font-label-sm text-[10px]">Home</span>
        </a>
        <a className="flex flex-col items-center gap-xs text-primary" href="#">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>storefront</span>
          <span className="font-label-sm text-[10px]">Network</span>
        </a>
        <a className="flex flex-col items-center gap-xs text-on-surface-variant" href="#">
          <span className="material-symbols-outlined">account_circle</span>
          <span className="font-label-sm text-[10px]">Profile</span>
        </a>
      </nav>

      <div className="flex flex-1">
        <aside className="hidden xl:flex flex-col bg-surface-container dark:bg-surface-container h-[calc(100vh-80px)] w-64 sticky top-[80px] border-r border-white/5 py-lg shrink-0">
          <div className="px-6 mb-lg">
            <div className="flex items-center gap-sm mb-md">
              <div className="w-12 h-12 rounded-full border border-primary/50 overflow-hidden">
                <img alt="Partner level avatar" className="w-full h-full object-cover" src="/stitch/getway_catalogue_de_services/fc4c6b3e5258.png" />
              </div>
              <div>
                <div className="font-label-sm text-label-sm text-on-surface">Partner Portal</div>
                <div className="text-[10px] text-tertiary">Premium Tier</div>
              </div>
            </div>
            <button className="w-full bg-black border border-[#D4AF37] text-[#D4AF37] font-label-sm text-label-sm py-sm rounded-DEFAULT hover:bg-[#D4AF37]/10 transition-colors">Upgrade Status</button>
          </div>
          <div className="flex-1 overflow-y-auto font-label-sm text-label-sm uppercase tracking-widest">
            <a className="flex items-center gap-4 text-on-surface-variant px-6 py-4 hover:bg-white/5 hover:text-on-surface transition-all translate-x-1 transition-transform" href="#">
              <span className="material-symbols-outlined">dashboard</span>
              Dashboard
            </a>
            <a className="flex items-center gap-4 bg-primary-container/20 text-primary border-r-4 border-primary px-6 py-4" href="#">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>storefront</span>
              Marketplace
            </a>
            <a className="flex items-center gap-4 text-on-surface-variant px-6 py-4 hover:bg-white/5 hover:text-on-surface transition-all translate-x-1 transition-transform" href="#">
              <span className="material-symbols-outlined">school</span>
              Learning Hub
            </a>
            <a className="flex items-center gap-4 text-on-surface-variant px-6 py-4 hover:bg-white/5 hover:text-on-surface transition-all translate-x-1 transition-transform" href="#">
              <span className="material-symbols-outlined">account_circle</span>
              Portfolio
            </a>
            <a className="flex items-center gap-4 text-on-surface-variant px-6 py-4 hover:bg-white/5 hover:text-on-surface transition-all translate-x-1 transition-transform" href="#">
              <span className="material-symbols-outlined">insights</span>
              Analytics
            </a>
          </div>
          <div className="mt-auto border-t border-white/5 pt-md font-label-sm text-label-sm uppercase tracking-widest">
            <a className="flex items-center gap-4 text-on-surface-variant px-6 py-4 hover:bg-white/5 hover:text-on-surface transition-all" href="#">
              <span className="material-symbols-outlined">help</span>
              Support
            </a>
            <a className="flex items-center gap-4 text-error px-6 py-4 hover:bg-error/10 transition-all" href="#">
              <span className="material-symbols-outlined">logout</span>
              Logout
            </a>
          </div>
        </aside>

        <main className="flex-1 w-full pb-xl md:pb-0">
          <section className="relative pt-xl pb-lg px-margin-mobile md:px-margin-desktop overflow-hidden border-b border-white/5">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-container/10 to-transparent pointer-events-none" />
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <h1 className="font-display-lg-mobile md:font-display-lg text-on-surface mb-sm">Digital Services <span className="text-primary">Marketplace</span></h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-lg">Access elite professionals and pre-configured service packages designed for high-performance scaling.</p>
              <GlassPanel className="p-xs flex flex-col md:flex-row gap-sm max-w-3xl mx-auto">
                <div className="relative flex-1">
                  <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline">search</span>
                  <input className="w-full bg-transparent border-none pl-12 pr-4 py-sm text-body-md text-on-surface focus:ring-0 placeholder:text-outline-variant h-full min-h-[48px]" placeholder="Search for Web Dev, Branding, Consulting..." type="text" />
                </div>
                <div className="w-px bg-white/10 hidden md:block" />
                <select className="bg-transparent border-none text-body-md text-on-surface focus:ring-0 cursor-pointer min-h-[48px] px-md">
                  <option className="bg-surface" value="">All Categories</option>
                  <option className="bg-surface" value="web">Web/Mobile Dev</option>
                  <option className="bg-surface" value="design">Graphic Design</option>
                  <option className="bg-surface" value="pro">Professional Services</option>
                </select>
                <button className="bg-primary-container text-white px-lg py-sm rounded-lg font-label-sm text-label-sm hover:bg-inverse-primary transition-colors min-h-[48px]">Explore</button>
              </GlassPanel>
            </div>
          </section>

          <section className="py-md px-margin-mobile md:px-margin-desktop border-b border-white/5 overflow-x-auto no-scrollbar">
            <div className="flex gap-sm max-w-[1200px] mx-auto min-w-max">
              <button className="glass-panel px-md py-xs rounded-full font-label-sm text-label-sm text-primary border-primary/50 bg-primary/10">All Services</button>
              <button className="glass-panel px-md py-xs rounded-full font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface hover:border-white/30 transition-all">Web/Mobile Dev</button>
              <button className="glass-panel px-md py-xs rounded-full font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface hover:border-white/30 transition-all">Graphic Design/Branding</button>
              <button className="glass-panel px-md py-xs rounded-full font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface hover:border-white/30 transition-all">Professional Services (CV)</button>
              <button className="glass-panel px-md py-xs rounded-full font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface hover:border-white/30 transition-all">Digital Assistance</button>
            </div>
          </section>

          <section className="py-xl px-margin-mobile md:px-margin-desktop">
            <div className="grid-desktop">
              <GlassPanel className="col-span-4 md:col-span-8 xl:col-span-8 overflow-hidden group hover:-translate-y-1 transition-transform duration-300 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                <img className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Featured" src="/stitch/getway_catalogue_de_services/6e00340e4505.png" alt="Featured service" />
                <div className="absolute bottom-0 left-0 p-lg z-20 w-full flex flex-col md:flex-row md:items-end justify-between gap-md">
                  <div>
                    <div className="flex gap-2 mb-sm">
                      <span className="bg-primary/20 text-primary px-2 py-1 rounded font-label-sm text-[10px] tracking-wider uppercase backdrop-blur-md">Web Dev</span>
                      <span className="bg-tertiary/20 text-tertiary px-2 py-1 rounded font-label-sm text-[10px] tracking-wider uppercase backdrop-blur-md">Premium</span>
                    </div>
                    <h3 className="font-headline-xl-mobile md:font-headline-xl text-white mb-xs">Full-Stack Platform Architecture</h3>
                    <p className="text-on-surface-variant font-body-md max-w-xl">Complete custom application development leveraging modern frameworks. Includes high-performance backend scaling and premium UI/UX integration.</p>
                    <div className="flex items-center gap-sm mt-md">
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full border-2 border-surface-container overflow-hidden ring-1 ring-primary"><img alt="Team member" className="w-full h-full object-cover" src="/stitch/getway_catalogue_de_services/822437c2aa7d.png" /></div>
                        <div className="w-8 h-8 rounded-full border-2 border-surface-container overflow-hidden ring-1 ring-primary"><img alt="Team member" className="w-full h-full object-cover" src="/stitch/getway_catalogue_de_services/e6e2984e2970.png" /></div>
                      </div>
                      <span className="text-on-surface-variant font-label-sm text-[10px]">Delivered by Core Team Alpha</span>
                    </div>
                  </div>
                  <div className="flex gap-sm">
                    <button className="bg-transparent border border-primary text-primary px-md py-sm rounded-DEFAULT font-label-sm hover:bg-primary/10 transition-colors whitespace-nowrap">Join Team</button>
                    <button className="bg-primary-container text-white px-md py-sm rounded-DEFAULT font-label-sm hover:bg-inverse-primary transition-colors whitespace-nowrap flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">shopping_cart</span>
                      Order - $5k+
                    </button>
                  </div>
                </div>
              </GlassPanel>

              <GlassPanel className="col-span-4 md:col-span-4 xl:col-span-4 p-md flex flex-col glow-active transition-all duration-300">
                <div className="flex justify-between items-start mb-md">
                  <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center border border-white/10 text-primary">
                    <span className="material-symbols-outlined text-2xl">brush</span>
                  </div>
                  <span className="bg-white/5 text-on-surface-variant px-2 py-1 rounded font-label-sm text-[10px] tracking-wider uppercase border border-white/10">Graphic Design</span>
                </div>
                <h3 className="font-headline-md text-on-surface mb-xs">Corporate Brand Identity Kit</h3>
                <p className="text-on-surface-variant font-body-md text-sm mb-md flex-1">A comprehensive branding package including logo design, typography guidelines, and digital asset templates tailored for tech startups.</p>
                <div className="border-t border-white/5 pt-sm flex justify-between items-center mt-auto">
                  <div className="text-on-surface font-headline-md text-lg">$850</div>
                  <button className="bg-transparent border border-primary text-primary px-sm py-xs rounded-DEFAULT font-label-sm text-[10px] hover:bg-primary/10 transition-colors">Order Now</button>
                </div>
              </GlassPanel>

              <GlassPanel className="col-span-4 md:col-span-4 xl:col-span-4 p-md flex flex-col hover:border-white/30 transition-all duration-300">
                <div className="flex justify-between items-start mb-md">
                  <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center border border-white/10 text-secondary">
                    <span className="material-symbols-outlined text-2xl">description</span>
                  </div>
                  <span className="bg-white/5 text-on-surface-variant px-2 py-1 rounded font-label-sm text-[10px] tracking-wider uppercase border border-white/10">Pro Services</span>
                </div>
                <h3 className="font-headline-md text-on-surface mb-xs">Executive CV &amp; Profile Redaction</h3>
                <p className="text-on-surface-variant font-body-md text-sm mb-md flex-1">Professional rewriting of your CV and LinkedIn profile to target C-level or specialized technical roles, crafted by industry experts.</p>
                <div className="border-t border-white/5 pt-sm flex justify-between items-center mt-auto">
                  <div className="text-on-surface font-headline-md text-lg">$299</div>
                  <button className="bg-transparent border border-primary text-primary px-sm py-xs rounded-DEFAULT font-label-sm text-[10px] hover:bg-primary/10 transition-colors">Order Now</button>
                </div>
              </GlassPanel>

              <GlassPanel className="col-span-4 md:col-span-4 xl:col-span-4 p-md flex flex-col hover:border-white/30 transition-all duration-300">
                <div className="flex justify-between items-start mb-md">
                  <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center border border-white/10 text-tertiary">
                    <span className="material-symbols-outlined text-2xl">support_agent</span>
                  </div>
                  <span className="bg-white/5 text-on-surface-variant px-2 py-1 rounded font-label-sm text-[10px] tracking-wider uppercase border border-white/10">Assistance</span>
                </div>
                <h3 className="font-headline-md text-on-surface mb-xs">Google Business Optimization</h3>
                <p className="text-on-surface-variant font-body-md text-sm mb-md flex-1">Complete setup and optimization of your Google Business profile to maximize local visibility and establish digital authority.</p>
                <div className="border-t border-white/5 pt-sm flex justify-between items-center mt-auto">
                  <div className="text-on-surface font-headline-md text-lg">$150</div>
                  <button className="bg-transparent border border-primary text-primary px-sm py-xs rounded-DEFAULT font-label-sm text-[10px] hover:bg-primary/10 transition-colors">Order Now</button>
                </div>
              </GlassPanel>

              <div className="col-span-4 md:col-span-8 xl:col-span-4 rounded-xl p-[1px] bg-gradient-to-br from-primary-container via-surface to-surface-container-lowest">
                <div className="bg-[#121212] h-full w-full rounded-xl p-md flex flex-col relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-container/20 rounded-full blur-3xl pointer-events-none" />
                  <h3 className="font-headline-md text-white mb-sm relative z-10">Looking for custom integration?</h3>
                  <p className="text-on-surface-variant font-body-md text-sm mb-lg relative z-10">Form a specialized squad for large-scale enterprise projects. Connect with top-tier talent directly.</p>
                  <div className="mt-auto relative z-10">
                    <button className="w-full bg-black border border-[#D4AF37] text-[#D4AF37] px-md py-sm rounded-DEFAULT font-label-sm hover:bg-[#D4AF37]/10 transition-colors flex justify-center items-center gap-2">
                      <span className="material-symbols-outlined text-sm">group_add</span>
                      Assemble Team
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
