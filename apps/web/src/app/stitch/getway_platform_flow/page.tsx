import React from 'react';

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-on-background font-body-md">
      {/* Header provided by layout */}

      <main className="max-w-[1400px] mx-auto px-margin-mobile md:px-margin-desktop py-xl">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <h1 className="font-display-lg text-display-lg mb-md">Platform Flow — Connect, Automate, Scale</h1>
            <p className="text-on-surface-variant mb-lg">Design your platform's customer journey and orchestration flows with visual building blocks and observability tools.</p>
            <div className="flex gap-3">
              <button className="bg-primary-container text-white px-5 py-3 rounded-lg">Try Flow Builder</button>
              <button className="border border-outline-variant px-5 py-3 rounded-lg">View Docs</button>
            </div>
          </div>
          <div className="lg:col-span-5 rounded-xl overflow-hidden border border-outline-variant/10 shadow-lg h-72">
            <img className="w-full h-full object-cover" src="/stitch/getway_platform_flow/ca22b6a3efae.png" alt="Platform flow" />
          </div>
        </section>

        <section className="mt-xl grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-md bg-surface-container rounded-xl">
            <h3 className="font-headline-md">Integrations</h3>
            <p className="text-on-surface-variant">Connect to CRMs, payment providers and analytics in minutes.</p>
          </div>
          <div className="p-md bg-surface-container rounded-xl">
            <h3 className="font-headline-md">Visual Builder</h3>
            <p className="text-on-surface-variant">Drag & drop flows, conditional branches and monitoring panels.</p>
          </div>
          <div className="p-md bg-surface-container rounded-xl">
            <h3 className="font-headline-md">Deploy</h3>
            <p className="text-on-surface-variant">One‑click deployments with observability and canary releases.</p>
          </div>
        </section>

        <section className="mt-xl grid grid-cols-1 md:grid-cols-3 gap-6">
          <img className="w-full rounded-xl" src="/stitch/getway_platform_flow/51339458576c.png" alt="screenshot 1" />
          <img className="w-full rounded-xl" src="/stitch/getway_platform_flow/71a23fe95618.png" alt="screenshot 2" />
          <img className="w-full rounded-xl" src="/stitch/getway_platform_flow/f96eb35550f1.png" alt="screenshot 3" />
        </section>
      </main>
    </div>
  );
}
