import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }

    setLoading(true);

    // Create payment intent on the backend
    const response = await fetch('/api/stripe/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: 5000 }), // Example amount in cents (e.g., $50.00)
    });

    const { clientSecret } = await response.json();

    // Confirm the payment with the client secret
    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (error) {
      toast.error(`Payment failed: ${error.message}`);
    } else if (paymentIntent.status === 'succeeded') {
      toast.success('Payment successful');
      // Handle post-payment actions (e.g., redirect, show confirmation)
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CardElement
        options={{
          style: {
            base: {
              color: '#fff',
              fontSize: '16px',
              '::placeholder': {
                color: '#888',
              },
            },
            invalid: {
              color: '#f44336',
            },
          },
        }}
      />
      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full py-3 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700 transition duration-300"
      >
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  );
};

export default CheckoutForm;
