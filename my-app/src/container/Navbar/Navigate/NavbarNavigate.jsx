import React from 'react';
import './NavbarNavigate.css';
import { Navbar } from '../../../component/NavBar/Navbar';
import { Link } from 'react-router-dom';
export const NavbarNavigate = () => {

    return (
        <Navbar>
            <div className="link_page">
                <Link className="link" to='/'> Home </Link>
                <Link className="link" to='/player'> Player </Link>
            </div>
        </Navbar>
    )
}
