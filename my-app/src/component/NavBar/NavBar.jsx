import React from 'react';
import './NavBar.css';
export const NavBar = ({ children }) => {
    return (
        <div className="navbar">
            {children}
        </div>
    )
}
