import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight text-primary">GETWAY</Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="#" className="text-on-surface-variant hover:text-primary">About</Link>
          <Link href="#" className="text-on-surface-variant hover:text-primary">Network</Link>
          <Link href="#" className="text-on-surface-variant hover:text-primary">Services</Link>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden md:inline px-4 py-2 rounded-md bg-primary text-on-primary font-medium">Rejoindre</button>
          <button className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center border border-white/5 overflow-hidden">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuByMe9aJ6kWR_onKSQOKuBrFww0yYFnksU55hRdcgXSY6OGy6nwZviufF2VMltJo3MjgOkV-3b4KJZFPQeUhcWKt1zvJZUDYZYXgLITsU-CPxEKBQcH-HB-MciYLxQG_V3QUs2bHEzZJVgp4FQPCUt0rhmQw085PQS2bhdtGNBVSyHx4rn6vqmI9z6UDtS8sV8NAOGFLGmNyJjXuQyanYVrL1IgLcBYs_hUDB8fps-MAjpQlIPT2JSmlAc5nqvwK2jNo5JkJRK4LNo" alt="avatar"/>
          </button>
        </div>
      </div>
    </header>
  );
}
