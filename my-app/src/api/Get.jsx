import React, { useEffect, useState } from 'react'
import axios from 'axios';

const id = 'nassimdef';
export const useGet = () => {
    const [response, setResponse] = useState();
    useEffect(()=>{
        axios.get(`https://euw1.api.riotgames.com/lol/riot/account/v1/accounts/by-puuid/${id}`)
        .then((apiResponse) => {
            setResponse(apiResponse)
        })
    },[])
    return [response, setResponse]
}
