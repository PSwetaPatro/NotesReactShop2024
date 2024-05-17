import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import ProgrammingDetails from './components/ProgrammingDetails';
import NoteDetailsPage from './components/NoteDetailsPage';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import ConfirmationPage from './components/ConfirmationPage';

function App() {
    
    const [cartItems, setCartItems] = useState([]);
    const [purchasedNotes] = useState([]); 

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/programming" element={<ProgrammingDetails />} />
                <Route
                    path="/note-details/:detailNumber"
                    element={<NoteDetailsPage cartItems={cartItems} setCartItems={setCartItems} />}
                />
                <Route
                    path="/cart"
                    element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} 
                />
                <Route path="/checkout" element={<Checkout />} />
                <Route
                    path="/confirmation"
                    element={<ConfirmationPage cartItems={cartItems} setCartItems={setCartItems} purchasedNotes={purchasedNotes} />}
                />
            </Routes>
        </Router>
    );
}

export default App;
