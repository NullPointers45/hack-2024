// stripeRoutes.js
const express = require('express');
const router = express.Router();
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); // Your Stripe Secret Key

// Create a Payment Intent
router.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount } = req.body; // Amount should be in the smallest currency unit (e.g., cents)
    
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd', // Change currency as needed
      payment_method_types: ['card'],
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
