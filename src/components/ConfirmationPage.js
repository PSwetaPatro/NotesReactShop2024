import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './ConfirmationPage.css';

const ConfirmationPage = () => {
  const location = useLocation();
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const searchParams = new URLSearchParams(location.search);
  const username = searchParams.get('username');

  // State to store notes
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Retrieve notes from localStorage
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

  const today = new Date();
  const expectedDeliveryDate = new Date(today.setDate(today.getDate() + 5));
  const formattedDeliveryDate = expectedDeliveryDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="confirmation-container">
      <p className="confirmation-message">Congratulations, <span className="confirmation-username">{username}</span>!</p>
      <h2 className="confirmation-heading">Purchase Confirmation</h2>
      <p className="confirmation-message">Your purchase has been confirmed.</p>
      <div className="cart-items">
        {cartItems.map(item => (
          <p key={item.id}>{item.title}</p>
        ))}
      </div>
      {/* Display notes */}
      {notes.length > 0 && (
        <div className="confirmation-notes">
          <h3>Notes:</h3>
          <ul>
            {notes.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      )}
      <p className="confirmation-message confirmation-thank-you">Thank you for shopping with us</p>
      <p className="confirmation-message">Expected Delivery Date: {formattedDeliveryDate}</p>
      <p className="confirmation-message">Have a great day!</p>
    </div>
  );
};

export default ConfirmationPage;
