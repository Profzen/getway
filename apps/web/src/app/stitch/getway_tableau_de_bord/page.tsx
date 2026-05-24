import React from 'react';
import GlassPanel from '@/components/stitch/GlassPanel';

export default function Page() {
  return (
    <div className="bg-background text-on-surface font-body-md antialiased overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container flex min-h-screen">
      <nav className="h-screen w-64 fixed left-0 top-0 border-r border-white/5 bg-surface-container flex flex-col py-lg z-50">
        <div className="px-6 mb-lg">
          <h1 className="font-headline-md text-headline-md text-primary mb-md">GETWAY</h1>
          <div className="flex items-center gap-sm mt-md glass-panel p-sm rounded-lg border border-primary/20">
            <div className="relative">
              <img alt="Partner level avatar" className="w-12 h-12 rounded-full object-cover border-2 border-primary" src="/stitch/getway_tableau_de_bord/04326322748e.png" />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-tertiary rounded-full border-2 border-surface-container" />
            </div>
            <div>
              <div className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface">Partner Portal</div>
              <div className="text-[10px] text-tertiary mt-xs flex items-center gap-xs"><span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span> Premium Tier</div>
            </div>
          </div>
        </div>
        <ul className="flex-1 flex flex-col gap-xs px-0">
          <li>
            <a className="flex items-center gap-4 bg-primary-container/20 text-primary border-r-4 border-primary px-6 py-4 font-label-sm text-label-sm uppercase tracking-widest translate-x-1 transition-transform" href="#">
              <span className="material-symbols-outlined">dashboard</span>
              Dashboard
            </a>
          </li>
          <li>
            <a className="flex items-center gap-4 text-on-surface-variant px-6 py-4 font-label-sm text-label-sm uppercase tracking-widest hover:bg-white/5 hover:text-on-surface" href="#">
              <span className="material-symbols-outlined">storefront</span>
              Marketplace
            </a>
          </li>
          <li>
            <a className="flex items-center gap-4 text-on-surface-variant px-6 py-4 font-label-sm text-label-sm uppercase tracking-widest hover:bg-white/5 hover:text-on-surface" href="#">
              <span className="material-symbols-outlined">school</span>
              Learning Hub
            </a>
          </li>
          <li>
            <a className="flex items-center gap-4 text-on-surface-variant px-6 py-4 font-label-sm text-label-sm uppercase tracking-widest hover:bg-white/5 hover:text-on-surface" href="#">
              <span className="material-symbols-outlined">account_circle</span>
              Portfolio
            </a>
          </li>
          <li>
            <a className="flex items-center gap-4 text-on-surface-variant px-6 py-4 font-label-sm text-label-sm uppercase tracking-widest hover:bg-white/5 hover:text-on-surface" href="#">
              <span className="material-symbols-outlined">insights</span>
              Analytics
            </a>
          </li>
        </ul>
        <div className="px-6 mt-auto">
          <button className="w-full bg-black border border-tertiary text-tertiary py-sm rounded font-label-sm text-label-sm uppercase tracking-widest hover:bg-tertiary/10 transition-colors mb-md flex items-center justify-center gap-sm">
            <span className="material-symbols-outlined text-[16px]">military_tech</span>
            Upgrade Status
          </button>
          <ul className="flex flex-col gap-xs border-t border-white/5 pt-sm">
            <li>
              <a className="flex items-center gap-4 text-on-surface-variant px-2 py-2 font-label-sm text-label-sm uppercase tracking-widest hover:bg-white/5 hover:text-on-surface transition-all rounded" href="#">
                <span className="material-symbols-outlined text-[18px]">help</span>
                Support
              </a>
            </li>
            <li>
              <a className="flex items-center gap-4 text-on-surface-variant px-2 py-2 font-label-sm text-label-sm uppercase tracking-widest hover:bg-white/5 hover:text-error transition-all rounded" href="#">
                <span className="material-symbols-outlined text-[18px]">logout</span>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main className="ml-64 flex-1 min-h-screen bg-background relative px-margin-desktop py-lg max-w-[1440px] mx-auto">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />
        <header className="flex justify-between items-end mb-xl">
          <div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-xs">Welcome back, Architect.</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Your ecosystem is thriving. 3 new opportunities pending.</p>
          </div>
          <div className="flex gap-sm">
            <button className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/50 transition-all relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-3 right-3 w-2 h-2 bg-primary rounded-full animate-pulse" />
            </button>
            <button className="bg-primary-container text-on-primary-container px-md py-sm rounded flex items-center gap-sm font-label-sm text-label-sm uppercase hover:bg-primary-container/80 transition-colors">
              <span className="material-symbols-outlined text-[18px]">add</span>
              New Initiative
            </button>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-gutter">
          <GlassPanel className="col-span-8 p-lg flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[60px] translate-x-1/2 -translate-y-1/2" />
            <div className="flex justify-between items-start mb-xl relative z-10">
              <div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">Evolution Pathway</h3>
                <p className="text-on-surface-variant font-body-md">You are currently operating at <span className="text-tertiary font-bold">Pro</span> level.</p>
              </div>
              <div className="bg-black/50 border border-tertiary/30 px-sm py-xs rounded font-label-sm text-label-sm text-tertiary uppercase flex items-center gap-xs">
                <span className="material-symbols-outlined text-[14px]">insights</span>
                Top 5% Partner
              </div>
            </div>
            <div className="relative z-10 w-full mt-auto">
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -translate-y-1/2 z-0" />
              <div className="absolute top-1/2 left-0 w-[75%] h-[2px] bg-gradient-to-r from-primary to-tertiary -translate-y-1/2 z-0 shadow-[0_0_10px_rgba(123,47,190,0.5)]" />
              <div className="flex justify-between relative z-10 w-full">
                <div className="flex flex-col items-center gap-sm group">
                  <div className="w-8 h-8 rounded-full bg-surface-container border-2 border-primary flex items-center justify-center"><span className="material-symbols-outlined text-[16px] text-primary">check</span></div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Apprentice</span>
                </div>
                <div className="flex flex-col items-center gap-sm"><div className="w-8 h-8 rounded-full bg-surface-container border-2 border-primary flex items-center justify-center"><span className="material-symbols-outlined text-[16px] text-primary">check</span></div><span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Collaborator</span></div>
                <div className="flex flex-col items-center gap-sm relative glow-active">
                  <div className="absolute -inset-2 bg-primary/20 rounded-full animate-pulse" />
                  <div className="w-10 h-10 rounded-full bg-primary-container border-2 border-primary flex items-center justify-center z-10"><span className="material-symbols-outlined text-[20px] text-white">diamond</span></div>
                  <span className="font-label-sm text-label-sm text-primary uppercase font-bold">Pro</span>
                </div>
                <div className="flex flex-col items-center gap-sm"><div className="w-8 h-8 rounded-full bg-surface-container border-2 border-white/20 flex items-center justify-center"><span className="material-symbols-outlined text-[16px] text-white/20">lock</span></div><span className="font-label-sm text-label-sm text-on-surface-variant/50 uppercase">Partner Premium</span></div>
              </div>
            </div>
          </GlassPanel>
          <GlassPanel className="col-span-4 p-lg flex flex-col justify-between">
            <div>
              <h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-sm flex items-center gap-xs"><span className="material-symbols-outlined text-[16px]">account_balance_wallet</span> 30-Day Yield</h3>
              <div className="font-headline-xl text-headline-xl text-on-surface mb-xs">$42,850.<span className="text-on-surface-variant text-headline-md">00</span></div>
              <div className="flex items-center gap-xs text-primary font-label-sm text-label-sm uppercase"><span className="material-symbols-outlined text-[14px]">trending_up</span> +14.2% vs last cycle</div>
            </div>
            <div className="mt-lg h-24 w-full flex items-end gap-xs opacity-80">
              <div className="w-full bg-primary-container/20 hover:bg-primary-container/40 transition-colors rounded-t" style={{ height: '40%' }} />
              <div className="w-full bg-primary-container/20 hover:bg-primary-container/40 transition-colors rounded-t" style={{ height: '60%' }} />
              <div className="w-full bg-primary-container/20 hover:bg-primary-container/40 transition-colors rounded-t" style={{ height: '45%' }} />
              <div className="w-full bg-primary-container/20 hover:bg-primary-container/40 transition-colors rounded-t" style={{ height: '80%' }} />
              <div className="w-full bg-primary-container/20 hover:bg-primary-container/40 transition-colors rounded-t" style={{ height: '65%' }} />
              <div className="w-full bg-primary-container/60 rounded-t shadow-[0_0_10px_rgba(123,47,190,0.4)]" style={{ height: '90%' }} />
            </div>
          </GlassPanel>
          <div className="col-span-12 grid grid-cols-3 gap-gutter mt-md">
            <GlassPanel className="col-span-2 p-lg">
              <div className="flex justify-between items-center mb-md">
                <h3 className="font-headline-md text-headline-md text-on-surface">Active Deployments</h3>
                <a className="text-primary font-label-sm text-label-sm uppercase hover:underline" href="#">View All</a>
              </div>
              <ul className="flex flex-col border-t border-white/5">
                <li className="py-md border-b border-white/5 flex items-center justify-between group hover:bg-white/[0.02] transition-colors -mx-lg px-lg cursor-pointer">
                  <div className="flex items-center gap-md">
                    <div className="w-10 h-10 rounded glass-panel flex items-center justify-center text-primary group-hover:scale-110 transition-transform"><span className="material-symbols-outlined">rocket_launch</span></div>
                    <div>
                      <h4 className="font-body-lg text-body-lg text-on-surface mb-xs group-hover:text-primary transition-colors">Nexus Protocol Integration</h4>
                      <div className="flex gap-sm"><span className="text-[10px] uppercase font-label-sm text-primary bg-primary/10 px-2 py-1 rounded">Phase 3</span><span className="text-[10px] uppercase font-label-sm text-on-surface-variant">Due in 4 days</span></div>
                    </div>
                  </div>
                  <div className="flex -space-x-2">
                    <img alt="Collaborator" className="w-8 h-8 rounded-full border border-surface-container" src="/stitch/getway_tableau_de_bord/c1ec13819340.png" />
                    <img alt="Collaborator" className="w-8 h-8 rounded-full border border-surface-container" src="/stitch/getway_tableau_de_bord/574bb5a4bc3f.png" />
                    <div className="w-8 h-8 rounded-full border border-surface-container bg-surface-container-high flex items-center justify-center text-[10px] text-on-surface-variant font-label-sm">+2</div>
                  </div>
                </li>
                <li className="py-md border-b border-white/5 flex items-center justify-between group hover:bg-white/[0.02] transition-colors -mx-lg px-lg cursor-pointer">
                  <div className="flex items-center gap-md">
                    <div className="w-10 h-10 rounded glass-panel flex items-center justify-center text-tertiary group-hover:scale-110 transition-transform"><span className="material-symbols-outlined">database</span></div>
                    <div>
                      <h4 className="font-body-lg text-body-lg text-on-surface mb-xs group-hover:text-primary transition-colors">Yield Optimization Model</h4>
                      <div className="flex gap-sm"><span className="text-[10px] uppercase font-label-sm text-tertiary bg-tertiary/10 px-2 py-1 rounded">Review</span><span className="text-[10px] uppercase font-label-sm text-on-surface-variant">Blocked by QA</span></div>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-primary bg-primary/20 flex items-center justify-center text-[12px]"><span className="material-symbols-outlined" style={{ fontSize: 16 }}>person</span></div>
                </li>
              </ul>
            </GlassPanel>
            <div className="col-span-1 flex flex-col gap-gutter">
              <GlassPanel className="p-md border-l-2 border-l-tertiary bg-gradient-to-br from-tertiary/5 to-transparent relative overflow-hidden">
                <div className="absolute top-0 right-0 p-sm opacity-20"><span className="material-symbols-outlined text-[64px]">radar</span></div>
                <h4 className="font-label-sm text-label-sm text-tertiary uppercase mb-sm flex items-center gap-xs"><span className="material-symbols-outlined text-[14px]">bolt</span> New Opportunity</h4>
                <p className="font-body-md text-on-surface mb-md line-clamp-2">A high-yield marketplace request aligns with your 'Pro' skill matrix.</p>
                <button className="text-tertiary font-label-sm text-label-sm uppercase hover:text-white transition-colors flex items-center gap-xs">Review Details <span className="material-symbols-outlined text-[14px]">arrow_forward</span></button>
              </GlassPanel>
              <div className="grid grid-cols-2 gap-sm flex-1">
                <a className="glass-panel rounded-lg p-md flex flex-col items-center justify-center gap-sm hover:bg-white/5 hover:border-primary/50 transition-all text-center group" href="#">
                  <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center group-hover:scale-110 transition-transform"><span className="material-symbols-outlined text-primary text-[24px]">school</span></div>
                  <span className="font-label-sm text-label-sm uppercase text-on-surface-variant group-hover:text-primary transition-colors">Learning Hub</span>
                </a>
                <a className="glass-panel rounded-lg p-md flex flex-col items-center justify-center gap-sm hover:bg-white/5 hover:border-primary/50 transition-all text-center group" href="#">
                  <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center group-hover:scale-110 transition-transform"><span className="material-symbols-outlined text-primary text-[24px]">storefront</span></div>
                  <span className="font-label-sm text-label-sm uppercase text-on-surface-variant group-hover:text-primary transition-colors">Marketplace</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
