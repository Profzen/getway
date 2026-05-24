"use client";
import { useState } from 'react';
import { supabase } from '../../../lib/supabaseClient';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleEmailLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setError(error.message);
    } catch (err: any) {
      setError(err.message || String(err));
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogle() {
    setLoading(true);
    setError(null);
    try {
      await supabase.auth.signInWithOAuth({ provider: 'google' });
    } catch (err: any) {
      setError(err.message || String(err));
      setLoading(false);
    }
  }

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)]">
        <h2 className="text-2xl font-semibold text-[var(--text)]">Connexion</h2>
        <p className="mt-2 text-sm text-[var(--text-soft)]">Connectez-vous pour accéder à votre espace.</p>

        <form onSubmit={handleEmailLogin} className="mt-4 space-y-3">
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full rounded-md border px-3 py-2" />
          <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" type="password" className="w-full rounded-md border px-3 py-2" />
          {error && <div className="text-sm text-red-500">{error}</div>}
          <button disabled={loading} className="w-full rounded-full bg-[var(--primary)] px-4 py-2 text-white font-semibold">{loading ? '...' : 'Se connecter'}</button>
        </form>

        <div className="mt-4 flex items-center gap-3">
          <div className="flex-1 h-px bg-[var(--border)]" />
          <div className="text-sm text-[var(--text-soft)]">ou</div>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>

        <div className="mt-4">
          <button onClick={handleGoogle} disabled={loading} className="w-full rounded-full border px-4 py-2 text-sm font-medium">
            Continuer avec Google
          </button>
        </div>
      </div>
    </div>
  );
}
