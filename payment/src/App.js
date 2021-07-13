import React, { useState, useEffect } from "react";
import { getOrder } from "./apiCalls";

const App = () => {
  const [values, setValues] = useState({
    amount: 0,
    orderId: "",
    error: "",
    success: false,
  });

  const { amount, orderId, success, error } = values;
  useEffect(() => {
    donate();
  });

  const donate = () => {
    getOrder().then((response) => {
      if (response.error) {
        setValues({ ...values, error: response.error, success: false });
      } else {
        setValues({
          ...values,
          error: "",
          success: true,
          orderId: response.id,
          amount: response.amount,
        });
      }
    });
  };
  
  useEffect(() => {
    if (amount > 0 && orderId !== "") {
      showRazorPay();
    }
  }, [amount]);

  const showRazorPay = () => {
    
    const form = document.createElement('form')
    form.setAttribute('action', 'http://localhost:5000/api/payment/callback')
    form.setAttribute('method', 'post');
    const script = document.createElement('script');
    script.src="https://checkout.razorpay.com/v1/payment-button.js";
    script.setAttribute("data-key", "rzp_test_URS2NKpDUGkKXX");
    script.setAttribute("data-buttontext", "DONATE");
    script.setAttribute("data-payment_button_id","pl_HY3qFS3aeeMosz");
    document.body.appendChild(form);
    form.appendChild(script);
  };
  return <div>{amount === 0 && orderId === "" && <h1>Loading...</h1>}</div>;
};

export default App;