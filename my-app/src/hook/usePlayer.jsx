import React, { useState, useEffect } from 'react'
import axios from 'axios';

export const usePlayer = (user) => {
    const [player, setPlayer] = useState(user);

    useEffect(() => {
        axios.get("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + user + "?api_key=" + process.env.REACT_APP_API_KEY)
            .then(response => {
                setPlayer(response.data);
            });
    }, [user])
    return player;
}
