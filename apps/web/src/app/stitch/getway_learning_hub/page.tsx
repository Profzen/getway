import React from 'react';
import GlassPanel from '@/components/stitch/GlassPanel';

export default function Page() {
  return (
    <main className="flex-1 md:ml-64 w-full max-w-[1440px] mx-auto p-margin-mobile md:p-margin-desktop overflow-x-hidden">
      <header className="mb-xl flex flex-col md:flex-row md:items-end justify-between gap-md">
        <div>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-sm">Learning Hub</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Master the tools of high-performance design and analysis. Track your progress and earn certifications to elevate your portfolio.</p>
        </div>
        <div className="flex gap-sm">
          <div className="bg-surface-container-highest rounded-full px-4 py-2 flex items-center gap-2 border border-white/10">
            <span className="material-symbols-outlined text-tertiary">workspace_premium</span>
            <span className="font-label-sm text-label-sm text-on-surface">3 Certifications</span>
          </div>
        </div>
      </header>

      <section className="mb-xl">
        <div className="flex items-center justify-between mb-md">
          <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2"><span className="material-symbols-outlined text-primary">trending_up</span> In Progress</h2>
          <a className="font-label-sm text-label-sm text-primary hover:text-primary-fixed transition-colors" href="#">View All</a>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          {/* Course Card 1 */}
          <GlassPanel className="p-md flex flex-col sm:flex-row gap-md items-center glow-card relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container rounded-full blur-[80px] opacity-20 -z-10" />
            <div className="w-full sm:w-1/3 aspect-video rounded-lg overflow-hidden relative group">
              <img alt="Graphic Design Course Preview" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/stitch/getway_learning_hub/010cc965cb00.png" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-white text-4xl">play_circle</span>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="flex justify-between items-start mb-2">
                <span className="bg-primary/10 text-primary font-label-sm text-label-sm px-2 py-1 rounded uppercase">Illustrator</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">65%</span>
              </div>
              <h3 className="font-body-lg text-body-lg text-on-surface font-semibold mb-1">Advanced Vector Mastery</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm mb-4">Module 4: Complex Gradients &amp; Mesh Tool</p>
              <div className="w-full bg-surface-container-highest rounded-full h-2 mb-2 overflow-hidden">
                <div className="progress-gradient h-full rounded-full" style={{ width: '65%' }} />
              </div>
              <div className="flex items-center gap-2 mt-4">
                <button className="bg-primary-container text-white font-label-sm text-label-sm py-2 px-4 rounded hover:bg-inverse-primary transition-colors flex-1 flex justify-center items-center gap-2"><span className="material-symbols-outlined text-[16px]">resume</span> Continue</button>
                <div className="flex -space-x-2">
                  <img className="w-8 h-8 rounded-full border border-surface" src="/stitch/getway_learning_hub/c2245e5be51f.png" />
                  <img className="w-8 h-8 rounded-full border border-surface" src="/stitch/getway_learning_hub/0b522f6d9da4.png" />
                  <div className="w-8 h-8 rounded-full border border-surface bg-surface-container-highest flex items-center justify-center font-label-sm text-label-sm text-on-surface">+2</div>
                </div>
              </div>
            </div>
          </GlassPanel>

          {/* Course Card 2 */}
          <GlassPanel className="p-md flex flex-col sm:flex-row gap-md items-center glow-card relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37] rounded-full blur-[80px] opacity-10 -z-10" />
            <div className="w-full sm:w-1/3 aspect-video rounded-lg overflow-hidden relative group">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/stitch/getway_learning_hub/8977f9a77c28.png" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-white text-4xl">play_circle</span>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="flex justify-between items-start mb-2">
                <span className="bg-[#D4AF37]/10 text-[#D4AF37] font-label-sm text-label-sm px-2 py-1 rounded uppercase">Excel / PPT</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">30%</span>
              </div>
              <h3 className="font-body-lg text-body-lg text-on-surface font-semibold mb-1">Executive Reporting</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm mb-4">Module 2: Dynamic Dashboards</p>
              <div className="w-full bg-surface-container-highest rounded-full h-2 mb-2 overflow-hidden">
                <div className="bg-[#D4AF37] h-full rounded-full" style={{ width: '30%' }} />
              </div>
              <div className="flex items-center gap-2 mt-4">
                <button className="border border-outline text-on-surface font-label-sm text-label-sm py-2 px-4 rounded hover:border-primary hover:text-primary transition-colors flex-1 flex justify-center items-center gap-2"><span className="material-symbols-outlined text-[16px]">resume</span> Continue</button>
              </div>
            </div>
          </GlassPanel>
        </div>
      </section>

      {/* Catalog */}
      <section className="mb-xl">
        <h2 className="font-headline-md text-headline-md text-on-surface mb-md flex items-center gap-2"><span className="material-symbols-outlined text-primary">apps</span> Course Catalog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-sm">
          <GlassPanel className="p-md md:col-span-2 lg:col-span-2 row-span-2 flex flex-col justify-end relative overflow-hidden group min-h-[300px]">
            <img className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500" src="/stitch/getway_learning_hub/5c05411267bf.png" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            <div className="relative z-10 p-4">
              <div className="flex justify-between items-center mb-4">
                <span className="bg-primary-container text-white font-label-sm text-label-sm px-3 py-1 rounded uppercase">Photoshop</span>
                <div className="flex items-center gap-1 text-tertiary">
                  <span className="material-symbols-outlined text-[16px]" data-icon="star" data-weight="fill">star</span>
                  <span className="font-label-sm text-label-sm">4.9</span>
                </div>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">High-End Retouching &amp; Compositing</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 max-w-md">Master non-destructive workflows and professional color grading techniques used in top agencies.</p>
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant"><span className="material-symbols-outlined align-middle text-[16px] mr-1">schedule</span> 12 Hours</span>
                <button className="bg-white/10 hover:bg-primary-container text-white font-label-sm text-label-sm py-2 px-4 rounded transition-colors backdrop-blur-md border border-white/20">Enroll</button>
              </div>
            </div>
          </GlassPanel>

          <GlassPanel className="p-md flex flex-col justify-between glow-card relative group min-h-[140px]">
            <div className="flex justify-between items-start mb-2">
              <div className="w-8 h-8 rounded bg-[#00C4CC]/10 flex items-center justify-center text-[#00C4CC]"><span className="material-symbols-outlined">brush</span></div>
              <span className="bg-[#00C4CC]/10 text-[#00C4CC] font-label-sm text-label-sm px-2 py-1 rounded uppercase">Canva</span>
            </div>
            <div>
              <h3 className="font-body-lg text-body-lg text-on-surface font-semibold mb-1">Rapid Brand Assets</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm line-clamp-2">Create consistent social media kits in minutes.</p>
            </div>
          </GlassPanel>

          <GlassPanel className="p-md flex flex-col items-center justify-center text-center glow-card border-primary/30 relative overflow-hidden min-h-[140px]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-container/20 to-transparent" />
            <span className="material-symbols-outlined text-4xl text-primary mb-2" data-icon="verified">verified</span>
            <h3 className="font-label-sm text-label-sm text-on-surface uppercase tracking-widest mb-1">Get Certified</h3>
            <p className="font-body-md text-body-md text-on-surface-variant text-xs">Unlock premium badges</p>
          </GlassPanel>

          <GlassPanel className="p-md flex flex-col justify-between glow-card lg:col-span-2 min-h-[140px]">
            <div className="flex flex-row items-center gap-md h-full">
              <div className="w-16 h-16 rounded bg-[#FF9A00]/10 flex-shrink-0 flex items-center justify-center text-[#FF9A00]"><span className="material-symbols-outlined text-3xl">draw</span></div>
              <div className="flex-1">
                <span className="text-[#FF9A00] font-label-sm text-label-sm uppercase mb-1 block">Illustrator</span>
                <h3 className="font-body-lg text-body-lg text-on-surface font-semibold mb-1">Logo Design Principles</h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">Grid systems and golden ratio applications.</p>
              </div>
              <button className="w-10 h-10 rounded-full border border-outline flex items-center justify-center text-on-surface hover:border-primary hover:text-primary transition-colors flex-shrink-0">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </GlassPanel>
        </div>
      </section>
    </main>
  );
}
