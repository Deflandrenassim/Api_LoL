import React, { useState } from 'react'
import axios from 'axios';

export const useGet = () => {
    const [getInfoUser, setGetInfoUser] = useState();
    const id = 'nassimdef';
    axios.get(`https://euw1.api.riotgames.com/lol/riot/account/v1/accounts/by-puuid/${id}`)
        .then((response) => {
            console.log('ma response', response);
            setGetInfoUser(response.data)
        })
    return getInfoUser;
}
