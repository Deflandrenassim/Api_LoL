import React from 'react';
import ContainsChampions from '../../container/Champions/ContainsChampions';
import { NavbarContainer } from '../../container/Modal/NavbarContainer';
export const Home = () => {
    return (
        <div>
            <NavbarContainer />
            <ContainsChampions />
        </div>

    )
}