import React from 'react';

export default function Page() {
  return (
    <div className="text-on-background font-body-md antialiased min-h-screen flex flex-col md:flex-row">
      <nav className="hidden md:flex flex-col h-screen w-64 fixed left-0 top-0 bg-surface border-r border-outline-variant z-50 py-lg px-md gap-sm">
        <div className="flex items-center gap-md px-md mb-xl">
          <span className="font-headline-md text-headline-md font-bold text-primary">GETWAY</span>
        </div>
        <div className="flex-1 flex flex-col gap-xs">
          <a className="flex items-center gap-md text-on-surface-variant px-md py-sm hover:bg-surface-container transition-all duration-200 rounded-lg" href="#">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-label-md text-label-md">Dashboard</span>
          </a>
          <a className="flex items-center gap-md text-on-surface-variant px-md py-sm hover:bg-surface-container transition-all duration-200 rounded-lg" href="#">
            <span className="material-symbols-outlined">storefront</span>
            <span className="font-label-md text-label-md">Marketplace</span>
          </a>
          <a className="flex items-center gap-md text-on-surface-variant px-md py-sm hover:bg-surface-container transition-all duration-200 rounded-lg" href="#">
            <span className="material-symbols-outlined">school</span>
            <span className="font-label-md text-label-md">Learning Hub</span>
          </a>
          <a className="flex items-center gap-md bg-secondary-container text-on-secondary-container rounded-lg px-md py-sm translate-x-1 duration-150" href="#">
            <span className="material-symbols-outlined">folder_shared</span>
            <span className="font-label-md text-label-md">Portfolio</span>
          </a>
          <a className="flex items-center gap-md text-on-surface-variant px-md py-sm hover:bg-surface-container transition-all duration-200 rounded-lg" href="#">
            <span className="material-symbols-outlined">analytics</span>
            <span className="font-label-md text-label-md">Analytics</span>
          </a>
        </div>
        <div className="mt-auto flex flex-col gap-xs border-t border-outline-variant pt-md">
          <a className="flex items-center gap-md text-on-surface-variant px-md py-sm hover:bg-surface-container transition-all duration-200 rounded-lg" href="#">
            <span className="material-symbols-outlined">light_mode</span>
            <span className="font-label-md text-label-md">Theme</span>
          </a>
          <a className="flex items-center gap-md text-on-surface-variant px-md py-sm hover:bg-surface-container transition-all duration-200 rounded-lg" href="#">
            <span className="material-symbols-outlined">settings</span>
            <span className="font-label-md text-label-md">Settings</span>
          </a>
        </div>
      </nav>

      <main className="flex-1 w-full max-w-container-max mx-auto md:ml-64 p-margin-mobile md:p-xl min-h-screen">
        <section className="grid grid-cols-1 md:grid-cols-12 gap-lg mb-xxl mt-lg">
          <div className="md:col-span-8 premium-card p-xl relative overflow-hidden flex flex-col md:flex-row gap-xl items-center md:items-start text-center md:text-left">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary-fixed rounded-full blur-3xl opacity-50 z-0" />
            <div className="relative z-10 w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-surface-container-lowest shadow-lg shrink-0 overflow-hidden bg-surface-container">
              <img alt="Profile Picture" className="w-full h-full object-cover" src="/stitch/getway_portfolio_light_mode/adc366fdb9ca.png" />
            </div>
            <div className="relative z-10 flex flex-col gap-sm w-full">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-md">
                <div>
                  <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-xs">Marc Dubois</h1>
                  <p className="font-body-lg text-body-lg text-primary-container font-medium">Senior UX/UI Architect</p>
                </div>
                <span className="inline-flex items-center justify-center gap-xs bg-[#F5EEFF] text-primary-container px-md py-xs rounded-full font-label-sm text-label-sm w-max mx-auto md:mx-0"><span className="material-symbols-outlined text-[16px]">verified</span> Top Rated Talent</span>
              </div>
              <p className="text-on-surface-variant font-body-md mt-sm max-w-2xl">Crafting intuitive, high-performance digital ecosystems for global enterprises. Specializing in design systems, micro-interactions, and scaling product architecture with a focus on conversion and user retention.</p>
              <div className="flex flex-wrap gap-md mt-md justify-center md:justify-start">
                <button className="bg-primary-container text-on-primary px-lg py-sm rounded-lg font-label-md text-label-md hover:opacity-90 transition-opacity">Hire Marc</button>
                <button className="border border-outline-variant text-on-surface px-lg py-sm rounded-lg font-label-md text-label-md hover:bg-surface-container-low transition-colors">Download CV</button>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 flex flex-col gap-md">
            <div className="stat-card p-md flex items-center justify-between">
              <div>
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wide">Success Rate</p>
                <p className="font-headline-md text-headline-md text-on-surface">99.8%</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#F5EEFF] text-primary-container flex items-center justify-center"><span className="material-symbols-outlined">trending_up</span></div>
            </div>
            <div className="stat-card p-md flex items-center justify-between">
              <div>
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wide">Completed Projects</p>
                <p className="font-headline-md text-headline-md text-on-surface">42</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#F5EEFF] text-primary-container flex items-center justify-center"><span className="material-symbols-outlined">task_alt</span></div>
            </div>
            <div className="stat-card p-md flex items-center justify-between">
              <div>
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wide">Availability</p>
                <p className="font-headline-md text-headline-md text-on-surface">Immediate</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center"><span className="material-symbols-outlined">event_available</span></div>
            </div>
          </div>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
          <div className="md:col-span-1 flex flex-col gap-xl">
            <div className="premium-card p-lg">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-lg flex items-center gap-sm"><span className="material-symbols-outlined text-primary-container">code</span> Technical Arsenal</h3>
              <div className="flex flex-col gap-md">
                <div>
                  <div className="flex justify-between mb-xs"><span className="font-label-sm text-label-sm text-on-surface">Figma &amp; Prototyping</span><span className="font-label-sm text-label-sm text-primary-container">Expert</span></div>
                  <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden"><div className="bg-primary-container h-full rounded-full" style={{ width: '95%' }} /></div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 flex flex-col gap-lg">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-xs">Featured Works</h2>
            <div className="premium-card overflow-hidden group cursor-pointer">
              <div className="h-48 w-full bg-surface-container relative overflow-hidden">
                <img alt="Project 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/stitch/getway_portfolio_light_mode/bc750a33c8a3.png" />
                <div className="absolute top-md right-md bg-surface-container-lowest/90 backdrop-blur px-sm py-xs rounded text-label-sm font-label-sm text-on-surface font-medium border border-outline-variant shadow-sm">FinTech</div>
              </div>
              <div className="p-lg">
                <div className="flex justify-between items-start mb-sm"><h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary-container transition-colors">Nova Financial Platform</h3><span className="font-label-sm text-label-sm text-on-surface-variant">2023</span></div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-md line-clamp-2">A complete overhaul of the legacy banking dashboard, introducing a scalable design system and reducing user task completion time by 40%.</p>
                <div className="flex items-center justify-between mt-auto pt-md border-t border-outline-variant"><div className="flex gap-sm"><span className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant"><span className="material-symbols-outlined">design_services</span></span></div><span className="font-label-md text-label-md text-primary-container flex items-center gap-xs group-hover:translate-x-1 transition-transform">View Case Study <span className="material-symbols-outlined">arrow_forward</span></span></div>
              </div>
            </div>
            <div className="premium-card overflow-hidden group cursor-pointer">
              <div className="h-48 w-full bg-surface-container relative overflow-hidden">
                <img alt="Project 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/stitch/getway_portfolio_light_mode/60cbc90a7e07.png" />
                <div className="absolute top-md right-md bg-surface-container-lowest/90 backdrop-blur px-sm py-xs rounded text-label-sm font-label-sm text-on-surface font-medium border border-outline-variant shadow-sm">E-Commerce</div>
              </div>
              <div className="p-lg">
                <div className="flex justify-between items-start mb-sm"><h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary-container transition-colors">Aura Mobile Retail</h3><span className="font-label-sm text-label-sm text-on-surface-variant">2023</span></div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-md line-clamp-2">Designed the end-to-end shopping experience for a luxury retail brand, focusing on micro-interactions and seamless checkout flows.</p>
                <div className="flex items-center justify-between mt-auto pt-md border-t border-outline-variant"><div className="flex gap-sm"><span className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant"><span className="material-symbols-outlined">smartphone</span></span></div><span className="font-label-md text-label-md text-primary-container flex items-center gap-xs group-hover:translate-x-1 transition-transform">View Case Study <span className="material-symbols-outlined">arrow_forward</span></span></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
