import React from 'react'
import ApiChampion from '../../api/ApiChampion';

const ContainsChampions = () => {

    const apiChampions = ApiChampion();
    console.log(apiChampions);
    return (
        <div>
            <ul>
                {apiChampions.map((champ, key) => (
                    <div key={key}>
                        <img src={champ.icon} />
                        <p> {champ.name}</p>
                    </div>
                ))}
            </ul>
        </div>
    )
}
export default ContainsChampions;