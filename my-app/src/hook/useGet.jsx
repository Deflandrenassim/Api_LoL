import React, { useState } from 'react'
import axios from 'axios';

export const useGet = () => {
    const [infoUser, setInfoUser] = useState();
    // const id = 'nassimdef';
    axios.get(`https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations/RGAPI-017a80f1-b597-429e-8e0b-324489fe5013`)
        .then((response) => {
            console.log('ma response', response);
            setInfoUser(response.data)
        })
    return infoUser;
}
