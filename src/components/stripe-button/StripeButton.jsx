import React from "react";
import StripeCheckout from "react-stripe-checkout";

const onToken = (token) => {
  console.log(token);
  alert("payment was a sucess");
};

const StripeButton = (props) => {
  const priceForStripe = props.price * 100;
  const publishableKey = "pk_test_OY3jJwraK88cUpk16RYoFGru00two2q1CA";
  return (
    <div>
      <StripeCheckout
        label="Pay Now"
        name="CRWN Clothing"
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${props.price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  );
};

export default StripeButton;
