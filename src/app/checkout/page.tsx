'use client';

import React from 'react';

const Checkout: React.FC = () => {
  const handleCheckout = async () => {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        priceId: 'price_1T5rOALp4ApmBkCbIhFS2U6u', 
      }),
    });

    const data = await res.json();
    if (data.url) {
      window.location.href = data.url; 
    } else {
      alert('Checkout failed. Try again.');
    }
  };

  return (
    <main className="section">
      <h1>Secure Checkout</h1>
      <p>One-time payment for full access to the course.</p>
      <button className="cta" onClick={handleCheckout}>
        Pay £39
      </button>
    </main>
  );
};

export default Checkout;