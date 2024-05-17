// ParentComponent.js

import React, { useState } from 'react';
import Cart from './Cart';
import NoteDetailsPage from './NoteDetailsPage'; // Import NoteDetailsPage component

const ParentComponent = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div>
      <h1>Parent Component</h1>
      <Cart cartItems={cartItems} setCartItems={setCartItems} /> {/* Pass setCartItems prop */}
      <NoteDetailsPage setCartItems={setCartItems} /> {/* Pass setCartItems prop */}
    </div>
  );
};

export default ParentComponent;
