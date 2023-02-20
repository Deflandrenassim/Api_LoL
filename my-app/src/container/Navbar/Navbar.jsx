import React, { useState } from 'react';
import './Navbar.css';
import { NavbarNavigate } from './Navigate/NavbarNavigate';
import Button from '../../component/Button/Button';

export const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    console.log(toggle)
    return (
        <div className="navbar">
            <Button design="design" onClick={() => setToggle(!toggle)}> LOL </Button>
            {toggle && <NavbarNavigate />}
        </div>

    )
}