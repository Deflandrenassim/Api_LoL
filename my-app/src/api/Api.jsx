import React, { useState, useEffect } from "react";
import axios from "axios";
import champions from 'lol-champions';

// const url = 'https://euw1.api.riotgames.com/';
// const link = 'lol/platform/v3/champion-rotations';
// const apiKey = 'RGAPI-43d498ba-e12f-4118-9410-fe3138b37073';
// const apiKey = 'RGAPI-43d498ba-e12f-4118-9410-fe3138b37073';


// const apiKey = ""

const Api = () => {

    const [state, setState] = useState([]);
    console.log(champions);
    useEffect(() => {
        axios.get("https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-43d498ba-e12f-4118-9410-fe3138b37073").then((api) => {
            console.log(api);
            setState(api.data)
        })
    }, [])
    return (
        <div>

            <ul>
                {<li> {state.map((arr) => arr)}</li>}
            </ul>
        </div>

    )
}
export default Api;