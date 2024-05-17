import React, { useState } from 'react';
import './Checkout.css';

const Checkout = () => {
  const [paymentOption, setPaymentOption] = useState('credit-card');
  const [isPurchaseConfirmed, setPurchaseConfirmed] = useState(false);

  const handleSubmitCoupon = (e) => {
    e.preventDefault();
    
  };

  const handleConfirmPurchase = () => {
    const userName = document.getElementById('name').value;
    setPurchaseConfirmed(true);
    window.location.href = `/confirmation?username=${userName}`;
  };
  return (
    <div className="checkout-container">
      <h2>Billing Address</h2>
      <form className="billing-address-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" required />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" required />
        </div>
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <input type="text" id="state" name="state" required />
        </div>
        <div className="form-group">
          <label htmlFor="zip">Zip:</label>
          <input type="text" id="zip" name="zip" required />
        </div>
      </form>

      <h2>Mode of Payment</h2>
      <div className="payment-options">
        <input
          type="radio"
          id="credit-card"
          name="payment"
          value="credit-card"
          checked={paymentOption === 'credit-card'}
          onChange={() => setPaymentOption('credit-card')}
        />
        <label htmlFor="credit-card">Credit Card</label>
        
        <input
          type="radio"
          id="netbanking"
          name="payment"
          value="netbanking"
          checked={paymentOption === 'netbanking'}
          onChange={() => setPaymentOption('netbanking')}
        />
        <label htmlFor="netbanking">Netbanking</label>

        <input
          type="radio"
          id="cash-on-delivery"
          name="payment"
          value="cash-on-delivery"
          checked={paymentOption === 'cash-on-delivery'}
          onChange={() => setPaymentOption('cash-on-delivery')}
        />
        <label htmlFor="cash-on-delivery">Cash on Delivery</label>
      </div>

      {paymentOption === 'credit-card' && (
        <div id="credit-card-details" className="payment-details">
          <h3>Credit Card Details</h3>
          <form className="credit-card-form">
            <div className="form-group">
              <label htmlFor="card-number">Card Number:</label>
              <input type="text" id="card-number" name="card-number" required />
            </div>
            <div className="form-group">
              <label htmlFor="expiry-date">Expiry Date:</label>
              <input type="text" id="expiry-date" name="expiry-date" required />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV:</label>
              <input type="text" id="cvv" name="cvv" required />
            </div>
          </form>
        </div>
      )}

      <h2>Apply Coupons</h2>
      <form className="apply-coupon-form" onSubmit={handleSubmitCoupon}>
        <div className="form-group">
          <label htmlFor="coupon-code">Coupon Code:</label>
          <input type="text" id="coupon-code" name="coupon-code" />
        </div>
        <button type="submit">Apply</button>
      </form>

      
      {isPurchaseConfirmed && (
        <div className="confirmation-message">
          <h2>Congratulations!</h2>
          <p>Your purchase has been confirmed. Thank you for shopping with us!</p>
        </div>
      )}

      <button className="confirm-purchase" onClick={handleConfirmPurchase}>Confirm Purchase</button>
    </div>
  );
};

export default Checkout;
