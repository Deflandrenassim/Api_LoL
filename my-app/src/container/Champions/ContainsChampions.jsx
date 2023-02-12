import React from 'react'
import champions from 'lol-champions';
import './ContainsChampions.css';
import { CardContainer, NameChampions, ImgChampions, CardChampions } from '../../component/CardChampions/CardChampions';
const ContainsChampions = () => {

    const apiChampions = champions;
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