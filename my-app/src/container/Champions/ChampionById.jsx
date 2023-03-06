import React from 'react';
import './ChampionById.css';
import { useParams } from 'react-router-dom';
import { CardContainer, CardTitle } from '../../component/Card/Card';
import { useAllChampions } from '../../hook/useAllChampions';
import { Picture } from '../../component/Picture/Picture';
import { Title, SousTitle } from "../../component/Title/Title";
import { Tag } from '../../component/Tag/Tag';


export const ChampionById = () => {
    const { id } = useParams();
    const champions = useAllChampions();



    const filter = champions.filter(champions => champions.id === id);
    let champion = filter[0];
    console.log(champion);
    if (!champion) return null

    return (
        <div className="champion_by_id">
            <div className="champion_by_name">
                <CardTitle> {champion.name}</CardTitle>
            </div>
            <CardContainer>
                <div className="champion_by_flex">
                    <Picture size="size" src={"https://ddragon.leagueoflegends.com/cdn/13.4.1/img/champion/" + champion.id + ".png"} />
                    <div className="champion_by_infos">
                        <Title variant="variant"> Quel role a le champion ? </Title>
                        <div className="champion_by_tag">
                            <Tag color="color" size="s">  {champion.tags[0]} </Tag>
                            <Tag color="color" size="s">  {champion.tags[1]} </Tag>
                        </div>
                        <SousTitle variant="variant"> The Perfomance Start : </SousTitle>
                        <div className='champion_stats'>
                            <Tag> HP :  {champion.stats.hp} </Tag>
                            <Tag> Attaque : {champion.stats.attackdamage}</Tag>
                            <Tag> Armor : {champion.stats.armor}</Tag>
                            <Tag> Armor : {champion.stats.magic}</Tag>
                        </div>
                        <div className="champion_combat">
                            <Tag> Attack range  : {champion.stats.attackrange}</Tag>
                            <Tag> Level Armor :  {champion.stats.armorperlevel}</Tag>
                            <Tag> Speed move {champion.stats.movespeed}</Tag>
                            <Tag> Armor : {champion.stats.magic}</Tag>

                        </div>
                    </div>
                </div>
            </CardContainer >
        </div >


    )
}