'use client';

export default function Success() {
  return (
    <main className="section">
      <h1>Payment Successful!</h1>
      <p>Thank you for enrolling. You now have full access to the course.</p>

      <button
        className="cta"
        onClick={() => (window.location.href = '/dashboard')}
      >
        Go to Your Dashboard
      </button>
    </main>
  );
}