import React, { useState } from 'react'
import InputField from '../../component/Textfield/InputField';
import { CardTitle, CardImg, } from '../../component/Card/Card';
import { usePlayer } from '../../hook/usePlayer';
import { Navbar } from '../../container/Navbar/Navbar';
export const SearchPlayer = () => {

    const [value, setValue] = useState("");
    const player = usePlayer(value);

    return (
        <div className="search_player">
            <Navbar />
            <InputField onChange={e => setValue(e.target.value)} placeHolder="Recherche un joueur :)" />
            <CardTitle> Nom du joueur: {player.name}</CardTitle>
            <CardTitle> Niveau  : {player.summonerLevel}</CardTitle>
            <CardImg src={"http://ddragon.leagueoflegends.com/cdn/13.3.1/img/profileicon/"
                + player.profileIconId + ".png"} />
        </div>
    )
}
