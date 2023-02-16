import React from 'react';
import './NavbarNavigate.css';
import { Navbar } from '../../../component/NavBar/Navbar';
import { Link } from 'react-router-dom';;
export const NavbarNavigate = () => {
    return (
        <>
            <Navbar>
                <div className="navbar_navigate_contains">
                    <Link className="link_router" to="/"> Home</Link>
                    <Link className="link_router" to="search"> Search</Link>
                </div>
            </Navbar>
        </>
    )
}
