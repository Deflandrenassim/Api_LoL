import React from 'react';
import './Navbar.css';

export const Navbar = ({ children }) => {
    return (
        <div className="navbar_component">
            {children}
        </div>
    )
}
