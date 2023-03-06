import React from 'react';
import ContainsChampions from '../../container/Champions/ContainsChampions'
// import { Navbar } from '../../container/Navbar/Navbar';
import { SearchPlayer } from '../../container/searchPlayer/SearchPlayer';

export const Home = () => {

    return (
        <div className="home">
            {/* <Navbar /> */}
            <SearchPlayer />
            <ContainsChampions />
        </div>

    )
}