import React from 'react'
import { useChampions } from '../../hook/useChampions';
import { Link } from 'react-router-dom';
import './ContainsChampions.css';
import { CardContainer, Card, CardImg, CardTitle } from '../../component/Card/Card';

const ContainsChampions = () => {

    const apiChampions = useChampions();
    console.log(apiChampions);
    return (
        <div className="contains_champions">
            <CardContainer>
                {apiChampions.map((champ, key) => (
                    <Link key={key} to={`/champion/${champ.name}`}>
                        <Card>
                            <CardImg src={champ.icon} />
                            <CardTitle> {champ.name}</CardTitle>
                        </Card>
                    </Link>
                ))}
            </CardContainer>
        </div>

    )
}
export default ContainsChampions;