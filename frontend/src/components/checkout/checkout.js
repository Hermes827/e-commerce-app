import React from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./checkoutForm.js";

const promise = loadStripe(process.env.REACT_APP_STRIPE_PK);
export default function Checkout() {
  return (
    <div className="checkout">
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}

// class Checkout extends React.Component {
//
//   render(){
//   return (
//     <div className="checkout">
//       checkout
//     </div>
//   );
// }
// }
//
// export default Checkout
