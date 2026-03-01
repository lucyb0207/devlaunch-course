'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function LessonOne() {
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
      <h1>Lesson 1: How the Web Works</h1>

      <div className="card" style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h3>🌍 What Happens When You Visit a Website?</h3>

        <p>
          When you type a website URL into your browser:
        </p>

        <ul style={{ textAlign: "left" }}>
          <li>Your browser sends a request to a server.</li>
          <li>The server processes the request.</li>
          <li>The server sends back HTML, CSS, and JavaScript.</li>
          <li>Your browser renders the page visually.</li>
        </ul>

        <p>
          This process is called the <strong>request-response cycle</strong>.
        </p>

        <button
          className="cta"
          onClick={() => (window.location.href = '/dashboard/module-1')}
        >
          Back to Module
        </button>
      </div>
    </main>
  );
}