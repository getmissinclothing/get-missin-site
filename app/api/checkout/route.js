import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST() {
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price: process.env.STRIPE_PRICE_ID,
        quantity: 1
      }
    ],
    shipping_address_collection: {
      allowed_countries: ["US"]
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: { amount: 695, currency: "usd" },
          display_name: "Standard Shipping"
        }
      }
    ],
    success_url: "https://example.com/success",
    cancel_url: "https://example.com/cancel"
  });

  return Response.json({ url: session.url });
}
