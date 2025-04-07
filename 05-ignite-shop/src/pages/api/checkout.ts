import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { cartItems } = req.body;
  
  if(req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed.'
    })
  }

  if (!cartItems.length) {
    return res.status(400).json({
      error: 'Cart is empty.'
    })
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: cartItems.map((item) => ({
      price: item.id,
      quantity: 1
    })),
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url
  })
}