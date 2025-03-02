import React from 'react';
import {
  Header,
  MakePaymentButton,
  PaymentAmountContainer,
  AmountButton,
  AmountDetailDiv,
  AmountDetail,
} from './styled';
import PaymentsIcon from '../../common/svgicons/PaymentsIcon';
import { Color } from '../../../../constants/color';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { Elements, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY); 

const AmountDetails = [
  { name: 'January 1, 2023', info: 'Payment due' },
  { name: '$0.00', info: 'Credits' },
  { name: '$1005.57', info: 'Total usage' },
  { name: '$15.30', info: 'Total overages' },
  { name: '$1030.87', info: 'Amount due' },
];
const CheckoutForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async () => {
    if (!stripe || !elements) {
      return; // Stripe.js 尚未加載，等待完成
    }

    // 呼叫後端創建 Stripe Checkout 會話
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: 1030.87, // 支付金額（美元，$1030.87）
          currency: 'usd',
        }),
      });

      const session = await response.json();
      // 重新導向到 Stripe Checkout
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      
      if (result.error) {
        console.error(result.error.message);
        alert('Error processing payment: ' + result.error.message);
      }

    } catch (error) {
      console.error('Error creating checkout session:', error);
      alert('An error occurred while processing your payment. Please try again.');
    }

    
  };

  return (
    <MakePaymentButton className="button-primary" onClick={handlePayment}>
      <PaymentsIcon stroke={Color.$white} strokeWidth="2" />
      <span>Make Payment</span>
    </MakePaymentButton>
  );
};



const PaymentAmount = () => {
  return (
    <PaymentAmountContainer>
      <Header>
        <h2>
          <strong>Amount Due</strong>
        </h2>
        <Elements stripe={stripePromise}>
          <CheckoutForm />

        </Elements>
      </Header>
      <p>
        This is an estimate of the amount you will owe based on your current
        month-to-date usage after all credits and charges.  
      </p>      
      <AmountButton className='button-secondary'>
        <strong>$1025.57</strong>
      </AmountButton>
      <AmountDetailDiv>
        {AmountDetails.map((item) => (
          <AmountDetail key={item.name}>
            <label>{item.name}</label>
            <label>{item.info}</label>
          </AmountDetail>
        ))}
      </AmountDetailDiv>
    </PaymentAmountContainer>
  );
};
export default PaymentAmount;
