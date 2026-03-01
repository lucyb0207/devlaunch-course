'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();

      if (!session) {
        router.push('/login'); 
      } else {
        setLoading(false); 
      }
    };

    checkAuth();
  }, [router]);

  if (loading) return <p>Loading...</p>;
  return (
    <main className="section">
      <h1>Welcome to DevLaunch 🚀</h1>
      <p>Your full-stack journey starts here.</p>

      <div className="cards-container">

        <div className="card">
          <h3>Module 1: Foundations</h3>
          <p>HTML, CSS, and how the web works.</p>
          <button
            className="cta"
            onClick={() => (window.location.href = '/dashboard/module-1')}
            >
            Enter Module
          </button>
        </div>

        <div className="card">
          <h3>Module 2: Frontend</h3>
          <p>React & Next.js fundamentals.</p>
          <button className="cta" onClick={() => alert("Coming soon!")}>
            Start Module
          </button>
        </div>

        <div className="card">
          <h3>Module 3: Backend</h3>
          <p>APIs, databases, authentication.</p>
          <button className="cta" onClick={() => alert("Coming soon!")}>
            Start Module
          </button>
        </div>

      </div>
    </main>
  );
}