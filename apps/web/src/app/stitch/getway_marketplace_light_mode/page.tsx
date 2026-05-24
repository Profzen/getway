import React from 'react';
import CourseCard from '@/components/stitch/CourseCard';

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-on-background font-body-md">
      {/* Header provided by layout */}

      <main className="max-w-[1300px] mx-auto px-margin-mobile md:px-margin-desktop py-xl">
        <h1 className="font-display-lg mb-md">Marketplace — Premium Services</h1>
        <p className="text-on-surface-variant mb-lg">Find vetted professionals and packaged services for growth and product delivery.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <CourseCard title="Brand Identity Pack" description="Complete branding and assets for startups." price="€850" img="/stitch/getway_marketplace_light_mode/c342e68bf536.png" cta="Order" />
          <CourseCard title="E-commerce Setup" description="Shopify/Headless setup and integrations." price="€2,400" img="/stitch/getway_marketplace_light_mode/551333cee3d8.png" cta="Order" />
          <CourseCard title="SEO & Growth" description="Growth strategy and acquisition playbooks." price="€1,200" img="/stitch/getway_marketplace_light_mode/02db1e59e82a.png" cta="Order" />
        </div>
      </main>
    </div>
  );
}
