import { PaymentProvider } from './context';
import PaymentWrapper from './payment-wrapper';

const Payment = () => {
  return (
    <PaymentProvider>
      <PaymentWrapper />
    </PaymentProvider>
  );
};

export default Payment;
