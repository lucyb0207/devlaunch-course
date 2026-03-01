'use client';
import React from 'react';

const Home: React.FC = () => {
  return (
    <main>

      {/* Hero Section */}
      <div className="section">
        <h1>Build Your First Full-Stack App</h1>
        <p>
          Learn full-stack development by building a professional Dev Dashboard — login, database, and deployed live — all while having fun.
        </p>
        <button className="cta" onClick={() => (window.location.href = '/checkout')}>
          Enroll Now — £39
        </button>
      </div>

      {/* What You’ll Learn */}
      <div className="section section-light container">
        <h2>What You'll Learn</h2>
        <div className="cards-container">
          <div className="card">
            <h3>Frontend Skills</h3>
            <p>HTML, CSS, React, Next.js – build beautiful, responsive UIs.</p>
          </div>
          <div className="card">
            <h3>Backend Skills</h3>
            <p>Node.js, Supabase, authentication, database management.</p>
          </div>
          <div className="card">
            <h3>Deployment</h3>
            <p>Deploy your app live so the world can use it.</p>
          </div>
        </div>
      </div>

      {/* Course Modules */}
      <div className="section container">
        <h2>Course Modules</h2>
        <div className="cards-container">
          <div className="card">Module 1: Foundations</div>
          <div className="card">Module 2: Frontend</div>
          <div className="card">Module 3: Backend</div>
          <div className="card">Module 4: Features</div>
          <div className="card">Module 5: Deployment</div>
        </div>
      </div>

      {/* Why DevLaunch */}
      <div className="section section-light container">
        <h2>Why DevLaunch?</h2>
        <div className="cards-container">
          <div className="card">Step-by-step guidance</div>
          <div className="card">Real-world project</div>
          <div className="card">Learn by doing — no fluff tutorials</div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="section container">
        <h2>Testimonials</h2>
        <p className="testimonial">"This course transformed my coding skills in weeks!" — Jane D.</p>
        <p className="testimonial">"I launched my first app thanks to DevLaunch!" — Mark S.</p>
      </div>

      {/* FAQ */}
      <div className="section section-light container">
        <h2>FAQ</h2>
        <p><strong>Do I need prior experience?</strong> No! This course starts from scratch.</p>
        <p><strong>How long do I have access?</strong> Lifetime access to all materials.</p>
      </div>

      {/* Final CTA */}
      <div className="section container">
        <button className="cta" onClick={() => (window.location.href = '/checkout')}>
          Enroll Now — £39
        </button>
      </div>
    </main>
  );
};

export default Home;