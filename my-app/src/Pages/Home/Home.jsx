import React from 'react';
import ContainsChampions from '../../container/Champions/ContainsChampions';
import { Navbar } from '../../container/Navbar/Navbar';

export const Home = () => {
    return (
        <div>
            <Navbar />
            <ContainsChampions />
        </div>

    )
}