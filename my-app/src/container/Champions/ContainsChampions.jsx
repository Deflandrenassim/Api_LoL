import React from 'react';
import { CardContainer, Card, CardTitle, CardImg } from '../../component/Card/Card';
import { useAllChampions } from '../../hook/useAllChampions';
import { Link } from 'react-router-dom';
import './ContainsChampions.css';

const ContainsChampions = () => {
    const champions = useAllChampions();
    console.log("mon cls", champions);

    if (!champions) return null;

    return (
        <div className="contains_champions">
            <CardContainer variant="variant">
                {champions.map((champ, key) => (
                    <Link key={key} to={`/${champ.id}`}>
                        <Card>
                            <CardImg src={"https://ddragon.leagueoflegends.com/cdn/13.4.1/img/champion/" + champ.id + ".png"} />
                            <CardTitle>{champ.name}</CardTitle>
                        </Card>
                    </Link>
                ))}
            </CardContainer>
        </div>
    )
}
export default ContainsChampions;
