import React, { useState } from 'react'
import './SearchPlayer.css';
import InputField from '../../component/Textfield/InputField';
import { Title, Description } from '../../component/Title/Title';
import { Picture } from '../../component/Picture/Picture';
import { usePlayer } from '../../hook/usePlayer';
// import { Navbar } from '../../container/Navbar/Navbar';


export const SearchPlayer = () => {

    const [value, setValue] = useState("");
    const player = usePlayer(value);

    if (!player) return (
        <>
            <Title> Welcome To Page for search gamers test </Title>
            <Description> On this page you could find the level information of each league of legend players on your keyboard </Description>
            {/* <Navbar /> */}
            <InputField variant="variant" onChange={e => setValue(e.target.value)} placeholder="Recherche un joueur :)" />
        </>
    )



    return (

        <div className="search_player">
            <Title> Welcome To Page for search gamers </Title>
            <Description> On this page you could find the level information of each league of legend players on your keyboard </Description>
            <InputField variant="variant" onChange={e => setValue(e.target.value)} placeholder="Recherche un joueur :)" />
            {/* </div> */}
            <Title> Nom du joueur: {player.name}</Title>
            <Description> Niveau  : {player.summonerLevel}</Description>
            <Picture src={"http://ddragon.leagueoflegends.com/cdn/13.3.1/img/profileicon/"
                + player.profileIconId + ".png"} />
        </div>
    )
}
