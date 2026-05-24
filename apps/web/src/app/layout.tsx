import './globals.css';
import ThemeSwitcher from '../components/ThemeSwitcher';
import Link from 'next/link';

export const metadata = {
  title: 'GETWAY',
  description: "Votre passerelle vers l'avenir numérique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <div style={{ position: 'fixed', right: 20, top: 20, zIndex: 60 }}>
          <ThemeSwitcher />
        </div>
        <div style={{ position: 'fixed', left: 20, top: 20, zIndex: 60 }}>
          <Link href="/(auth)/login" className="mr-3 text-sm font-medium">Connexion</Link>
          <Link href="/(auth)/signup" className="text-sm font-medium">Inscription</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
