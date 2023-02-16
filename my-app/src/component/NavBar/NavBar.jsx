import React from 'react';
import './Navbar.css';

export const Navbar = ({ children }) => {
    return (
        <div className="navbar">
            {children}
        </div>
    )
}
