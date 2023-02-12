import React, { useState } from 'react';
import './NavBarContainer.css';
import { NavBar } from '../../component/NavBar/NavBar';
import { Button } from '../../component/Button/Button';

export const NavbarContainer = () => {
    const [open, setOpen] = useState(false);

    const handleOpenAndClose = (e) => {
        console.log(e.target.value);
        console.log(open)
        setOpen(!open);
    }
    return (
        <>
            <NavBar>
                <Button onClick={handleOpenAndClose}> LOL </Button>
            </NavBar>
        </>

    )
}