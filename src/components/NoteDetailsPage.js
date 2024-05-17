// NoteDetailsPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NoteDetailsPage.css';

const NoteDetailsPage = ({ cartItems, setCartItems }) => {
  const [notes] = useState([
    { id: 1, title: 'JavaScript Basics', description: 'A comprehensive guide to JavaScript fundamentals covering variables, data types, control flow, functions, and more.', price: '19.99' },
    { id: 2, title: 'Advanced Python Programming', description: 'Explore advanced concepts and techniques in Python programming.', price: '24.99' },
    { id: 3, title: 'Java for Beginners', description: 'Learn the fundamentals of Java programming language from scratch.', price: '21.99' },
    { id: 4, title: 'C++ Fundamentals', description: 'Master the basic concepts of C++ programming language.', price: '22.99' },
    { id: 5, title: 'PHP Crash Course', description: 'A quick and comprehensive guide to PHP programming language.', price: '18.99' },
    { id: 6, title: 'Ruby on Rails Essentials', description: 'Learn to build web applications using Ruby on Rails framework.', price: '27.99' }
  ]);
  const navigate = useNavigate();

  const handleAddToCart = (note) => {
    const existingItemIndex = cartItems.findIndex(item => item.id === note.id);

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity++;
      setCartItems(updatedCartItems);
    } else {
      // Item does not exist in cart, add it
      const newItem = {
        id: note.id,
        title: note.title,
        price: note.price,
        quantity: 1 
      };
      setCartItems(prevItems => [...prevItems, newItem]);
    }

    // Store selected note in localStorage
    localStorage.setItem('selectedNote', JSON.stringify(note));

    navigate('/cart');
  };

  return (
    <div>
      <h2>Note Page</h2>
      {notes.map(note => (
        <div key={note.id} className="note-container">
          <h3 className="note-title">{note.title}</h3>
          <p className="note-description">{note.description}</p>
          <button className="add-to-cart-btn" onClick={() => handleAddToCart(note)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default NoteDetailsPage;
