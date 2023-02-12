import React from 'react'
import getChampions from '../../api/ApiChampion';
import './ContainsChampions.css';
import { CardContainer, NameChampions, ImgChampions, CardChampions } from '../../component/CardChampions/CardChampions';
import getChampions from '../../api/ApiChampion';
const ContainsChampions = () => {

    const apiChampions = getChampions();
    console.log(apiChampions);
    return (
        <div className="contains_champions">
            <CardContainer>
                {apiChampions.map((champ, key) => (
                    <CardChampions>
                        <ImgChampions src={champ.icon} />
                        <NameChampions key={key}> {champ.name}</NameChampions>
                    </CardChampions>
                ))}
            </CardContainer>
        </div>

    )
}
export default ContainsChampions;