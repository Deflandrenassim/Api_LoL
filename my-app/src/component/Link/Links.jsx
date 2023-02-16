import React from 'react';
import { Link } from 'react-router-dom';
import './Links.css';

export const Links = () => {
    return (
        <div className="navbar_navigate_contains">
            <Link className="link_router" to="/"> Home</Link>
            <Link className="link_router" to="search"> Search</Link>
        </div>
    )
}
