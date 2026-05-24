import React from 'react';

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-on-background font-body-md">
      {/* Header provided by layout */}

      <main className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop py-xl">
        <h1 className="font-display-lg mb-md">Learning Hub — Curated tracks</h1>
        <p className="text-on-surface-variant mb-lg">Skill tracks and masterclasses crafted by industry experts.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <CourseCard title="Masterclass: Digital Creativity" description="Advanced production workflows across Adobe Suite." img="/stitch/getway_learning_hub_light_mode/dea5b56f49db.png" cta="View" />
          <CourseCard title="Data & Analytics" description="From instrumentation to insights for product teams." img="/stitch/getway_learning_hub_light_mode/e40e3ed63d06.png" cta="View" />
          <CourseCard title="Growth & Marketing" description="Strategies and channels for sustainable growth." img="/stitch/getway_learning_hub_light_mode/ff1ab50e949c.png" cta="View" />
        </div>
      </main>
    </div>
  );
}
