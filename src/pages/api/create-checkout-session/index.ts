import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2025-02-24.acacia',
  });


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { amount, currency } = req.body;

    if (!amount || !currency) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: currency,
            product_data: {
              name: 'Payment for Pulsar Networks',
            },
            unit_amount: Math.round(amount * 100), // 將美元轉換為美分（$1030.87 變成 103087）
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.origin}/payments?success=true`,
      cancel_url: `${req.headers.origin}/payments?canceled=true`,
    });

    res.status(200).json({ id: session.id });
  } catch (error) {
    const typedError = error as Error;
    res.status(500).json({ error: { message: typedError.message } });
  }
}