import React, { useState } from "react";
import champions from 'lol-champions';


const ApiChampion = () => {
    const [state] = useState(champions);
    return state;
}
export default ApiChampion;