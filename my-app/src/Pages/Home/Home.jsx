import React from 'react';
import ContainsChampions from '../../container/Champions/ContainsChampions'
import { SearchPlayer } from '../../container/searchPlayer/SearchPlayer';

export const Home = () => {

    return (
        <div className="home">
            <SearchPlayer />
            <ContainsChampions />
        </div>

    )
}