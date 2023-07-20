import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import React from 'react';

const PaymentForm = () => {
    const initialOptions = {
        "client-id": "AUK95IKBKih-01KdLwBtBJKuDuGRkJ2kth8sf20ZALnUY7p0VseWEtkFwtJatv4cKfOrobOthWnuDhMG",
        currency: "USD",
        intent: "capture"
    };
    return (
        <div>
            <PayPalScriptProvider options={initialOptions}>
                <PayPalButtons 
                    createOrder = {(data, actions) => {
                        // Set up the transaction
                        return actions.order.create({
                        purchase_units: [{
                            amount: {
                            value: '40.00'
                            }
                        }]
                        });
                    }}
                    style={{ layout: "vertical" }}
                />
            </PayPalScriptProvider>
        </div>
    );
};

export default PaymentForm;