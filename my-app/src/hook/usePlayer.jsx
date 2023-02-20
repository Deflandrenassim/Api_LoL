import React, { useState, useEffect } from 'react'
import axios from 'axios';

export const usePlayer = (user) => {
    const [player, setPlayer] = useState(user);
    const api_key = "RGAPI-017a80f1-b597-429e-8e0b-324489fe5013";

    useEffect(() => {
        axios.get("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + user + "?api_key=" + api_key)
            .then(response => {
                setPlayer(response.data);
            });
    }, [user])
    return player;
}
