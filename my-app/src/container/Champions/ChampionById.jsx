import React from 'react';
import './ChampionById.css';
import { useParams } from 'react-router-dom';
import { CardContainer, CardTitle } from '../../component/Card/Card';
import { useAllChampions } from '../../hook/useAllChampions';
import { Picture } from '../../component/Picture/Picture';
import { Title } from "../../component/Title/Title";
import { Tag } from '../../component/Tag/Tag';

export const ChampionById = () => {
    const { id } = useParams();
    const champions = useAllChampions();
    console.log(champions);

    const filter = champions.filter(champions => champions.id === id);
    let champion = filter[0];

    if (!champion) return null

    return (
        <div className="champion_by_id">
            <div className="champion_by_name">
                <CardTitle> {champion.name}</CardTitle>
            </div>
            <CardContainer>
                <div className="champion_by_flex">
                    <Picture src={"https://ddragon.leagueoflegends.com/cdn/13.4.1/img/champion/" + champion.id + ".png"} />
                    <div className="champion_by_infos">
                        <Title variant="variant"> Quel role a le champion ? </Title>
                        <div className="champion_by_tag">
                            <Tag color="color" size="s">  {champion.tags[0]} </Tag>
                            <Tag color="color" size="s">  {champion.tags[1]} </Tag>
                        </div>
                        {/* <div> HP :  {champion.stats.hp}</div>
                        <div> Attaque : {champion.stats.attackdamage}</div>
                        <div> Armor : {champion.stats.armor}</div> */}
                    </div>
                </div>
            </CardContainer >
        </div >


    )
}