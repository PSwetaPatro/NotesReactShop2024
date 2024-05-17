import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

function Homepage() {
    return (
        <div className="container">
            <h1>Welcome to Notes Shop</h1>
            <div className="category">
                <Link to="/programming">
                    <h2>Programming</h2>
                    <p>Explore programming topics</p>
                </Link>
            </div>
            <div className="category">
                <Link to="/web-development">
                    <h2>Web Development</h2>
                    <p>Discover web development</p>
                </Link>
            </div>
            <div className="category">
                <Link to="/data-science">
                    <h2>Data Science</h2>
                    <p>Discover data science</p>
                </Link>
            </div>
            <div className="category">
                <Link to="/business-finance">
                    <h2>Business & Finance</h2>
                    <p>Discover Business & Finance</p>
                </Link>
            </div>
            <div className="category">
                <Link to="/creative-arts">
                    <h2>Creative Arts</h2>
                    <p>Discover Creative Arts</p>
                </Link>
            </div>
            <div className="category">
                <Link to="/academic-subjects">
                    <h2>Academic Subjects</h2>
                    <p>Discover Academic Subjects</p>
                </Link>
            </div>
        </div>
    );
}

export default Homepage;
