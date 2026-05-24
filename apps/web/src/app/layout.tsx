import './globals.css';
import ThemeSwitcher from '../components/ThemeSwitcher';

export const metadata = {
  title: 'GETWAY',
  description: 'Votre passerelle vers l'avenir numérique',
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
        {children}
      </body>
    </html>
  );
}
