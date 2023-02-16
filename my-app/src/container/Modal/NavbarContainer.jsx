import React, { useState } from 'react';
import './NavBarContainer.css';
import { NavbarNavigate } from './Navigate/NavbarNavigate';
import { Button } from '../../component/Button/Button';

export const NavbarContainer = () => {
    const [toggle, setToggle] = useState(false);
    console.log(toggle);

    return (
        <div>
            <Button onClick={() => setToggle(!toggle)}> LOL </Button>
            {toggle && <NavbarNavigate />}
        </div>

    )
}