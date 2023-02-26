import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { JsonConvertArray } from '../js/JsonConvertArray';


export const useAllChampions = () => {
    const [state, setState] = useState([]);
    const convertJsonArray = JsonConvertArray(state);

    useEffect(() => {
        const callChampions = async () => {
            const response = await axios.get("http://ddragon.leagueoflegends.com/cdn/13.3.1/data/en_US/champion.json")
                .then((response) => {
                    setState(response.data.data);
                })
            return response;
        }

        callChampions();
    }, [])

    return convertJsonArray;
}