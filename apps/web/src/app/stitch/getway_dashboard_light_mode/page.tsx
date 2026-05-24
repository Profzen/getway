import React from 'react';

export default function Page() {
  return (
    <div className="flex h-screen overflow-hidden font-body-md text-body-md bg-background text-on-background">
      <nav className="hidden md:flex flex-col h-full w-64 left-0 border-r border-outline-variant bg-surface py-lg px-md gap-sm shrink-0">
        <div className="mb-xl flex items-center gap-md px-sm">
          <div className="w-10 h-10 rounded-lg bg-primary-container text-white flex items-center justify-center font-bold">G</div>
          <div>
            <h1 className="font-headline-md text-primary">GETWAY</h1>
        }
            <div>
              <h2 className="font-headline-lg text-headline-lg">Welcome back, Alex.</h2>
              <p className="text-on-surface-variant">Here is an overview of your ecosystem performance.</p>
            </div>
            <div className="flex gap-md">
              <button className="bg-surface-container text-primary px-lg py-sm rounded-lg">Export Report</button>
              <button className="bg-primary-container text-white px-lg py-sm rounded-lg">New Project</button>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-lg">
            <div className="md:col-span-8 bg-surface-container-lowest rounded-xl p-lg">Evolution Pathway content...</div>
            <div className="md:col-span-4 flex flex-col gap-lg">
              <div className="bg-surface-container-lowest rounded-xl p-lg">Revenue Card</div>
              <div className="bg-primary text-white rounded-xl p-lg">Token Balance</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
}
