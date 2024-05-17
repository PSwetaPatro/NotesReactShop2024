import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProgrammingDetails.css';

const ProgrammingDetails = () => {
  const [previewStates, setPreviewStates] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false
  });

  const togglePreview = (detailNumber) => {
    setPreviewStates(prevState => ({
      ...prevState,
      [detailNumber]: !prevState[detailNumber]
    }));
  };

  const handleHome = () => {
    // Redirect to the homepage
    window.location.href = '/';
  };

  return (
    <div>
      <div className="category-heading">
        <h1>Category: Programming</h1>
      </div>
      {[1, 2, 3, 4, 5, 6].map(detailNumber => (
        <div className="programming-details-container" key={detailNumber}>
          <h2>{getTitle(detailNumber)}</h2>
          <p>Price: {getPrice(detailNumber)}</p>
          <div className="button-container">
            <button className="preview-button" onClick={() => togglePreview(detailNumber)}>
              {previewStates[detailNumber] ? 'Close Preview' : 'Preview'}
            </button>
            {/* Using Link component to navigate to the note-details page */}
            <Link className="buy-button" to={`/note-details/${detailNumber}`}>Buy</Link>
        </div>
          {previewStates[detailNumber] && (
            <div className="pdf-preview">
              <embed src={getPdfPath(detailNumber)} type="application/pdf" width="100%" height="600px" />
            </div>
          )}
        </div>
      ))}
      
      {/* Home button */}
      <div className="button-container">
        <button className="home-button" onClick={handleHome}>Home</button>
      </div>
    </div>
  );
};

export default ProgrammingDetails;

// Function to get the title of the note
const getTitle = (detailNumber) => {
  switch (detailNumber) {
    case 1:
      return 'JavaScript Basics';
    case 2:
      return 'Advanced Python Programming';
    case 3:
      return 'Java for Beginners';
    case 4:
      return 'C++ Fundamentals';
    case 5:
      return 'PHP Crash Course';
    case 6:
      return 'Ruby on Rails Essentials';
    default:
      return '';
  }
};

// Function to get the price of the note
const getPrice = (detailNumber) => {
  switch (detailNumber) {
    case 1:
      return '$19.99';
    case 2:
      return '$24.99';
    case 3:
      return '$21.99';
    case 4:
      return '$22.99';
    case 5:
      return '$18.99';
    case 6:
      return '$27.99';
    default:
      return '';
  }
};

// Function to get the PDF path of the note
const getPdfPath = (detailNumber) => {
  switch (detailNumber) {
    case 1:
      return '/pdf/PYTHON_NOTES_2024.pdf';
    case 2:
      return '/pdf/PYTHON_NOTES_2024.pdf';
    case 3:
      return '/pdf/PYTHON_NOTES_2024.pdf';
    case 4:
      return '/pdf/PYTHON_NOTES_2024.pdf';
    case 5:
      return '/pdf/PYTHON_NOTES_2024.pdf';
    case 6:
      return '/pdf/PYTHON_NOTES_2024.pdf';
    default:
      return '';
  }
}
