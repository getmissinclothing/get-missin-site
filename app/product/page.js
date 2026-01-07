"use client";

export default function Product() {
  const handleCheckout = async () => {
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
      });

      if (!res.ok) {
        const text = await res.text();
        alert("Checkout error: " + text);
        return;
      }

      const data = await res.json();
      window.location.href = data.url;
    } catch (err) {
      alert("Unexpected error: " + err.message);
    }
  };

  return (
    <main style={{ padding: 40 }}>
      <h1>Get Missin™ “No Turning Back” Tee</h1>
      <p>$44.00</p>
      <button onClick={handleCheckout}>
        Secure Checkout
      </button>
    </main>
  );
}
