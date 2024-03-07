import { loadStripe } from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import CheakoutForm from './CheakoutForm';
import { useLoaderData } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payments = () => {
    
    const singlecart = useLoaderData();
    console.log('single cart data', singlecart);
    
    const total = singlecart.price;
    const price = parseFloat(total.toFixed(2))
    
    return (
      
            <div className="w-full md:px-20 bg-slate-200">
          
         
          <h1 className="my-10 text-3xl font-semibold text-center">Please make payment</h1>
          
          <Elements stripe={stripePromise}>
              <CheakoutForm price={price} singlecart={singlecart}></CheakoutForm>
          </Elements>
      </div>
      
      
    );
};

export default Payments;