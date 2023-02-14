import React from 'react'
import { useChampions } from '../../hook/useChampions';
import { Link } from 'react-router-dom';
import './ContainsChampions.css';
import { CardContainer, NameChampions, ImgChampions, CardChampions } from '../../component/CardChampions/CardChampions';

const ContainsChampions = () => {

    const apiChampions = useChampions();
    return (
        <div className="contains_champions">
            <CardContainer>
                {apiChampions.map((champ, key) => (
                    <Link to={`/champion/${champ.name}`}>
                        <CardChampions>
                            <ImgChampions src={champ.icon} />
                            <NameChampions key={key}> {champ.name}</NameChampions>
                        </CardChampions>
                    </Link>
                ))}
            </CardContainer>
        </div>

    )
}
export default ContainsChampions;