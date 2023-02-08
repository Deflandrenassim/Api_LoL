import React, { useState } from "react";
import champions from 'lol-champions';


const ApiChampion = () => {

    const [state] = useState(champions);
    console.log(champions);
    return (
        <div>
            <ul>
                {state.map((champ, key) => (
                    <div key={key}>
                        <img src={champ.icon} />
                        <p> {champ.name}</p>
                    </div>
                ))}
            </ul>
        </div>


    )
}
export default ApiChampion;