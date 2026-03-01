'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function ModuleOne() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) router.push('/login');
      else setLoading(false);
    };
    checkAuth();
  }, [router]);

  if (loading) return <p>Loading...</p>;
  return (
    <main className="section">
      <h1>Module 1: Foundations</h1>
      <p>Start your journey by understanding how the web works.</p>

      <div className="cards-container">
        <div className="card">
          <h3>Lesson 1: How the Web Works</h3>
          <button
            className="cta"
            onClick={() => (window.location.href = '/dashboard/module-1/lesson-1')}
          >
            Start Lesson
          </button>
        </div>

        <div className="card">
          <h3>Lesson 2: HTML Basics</h3>
          <button className="cta" onClick={() => alert("Coming soon")}>
            Start Lesson
          </button>
        </div>
      </div>
    </main>
  );
}