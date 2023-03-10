import React from 'react';
import './ChampionById.css';
import { useParams } from 'react-router-dom';
import { CardContainer } from '../../component/Card/Card';
import { useAllChampions } from '../../hook/useAllChampions';
import { Picture } from '../../component/Picture/Picture';
import { Title, SousTitle } from "../../component/Title/Title";
import { Note } from '../../component/Note/Note';
import { Tag } from '../../component/Tag/Tag';
import { FlexCenter } from '../../component/Flex/Flex';


export const ChampionById = () => {
    const { id } = useParams();
    const champions = useAllChampions();

    const filter = champions.filter(champions => champions.id === id);
    let champion = filter[0];
    console.log(champion)

    if (!champion) return null

    return (
        <div className="champion_by_id">
            <FlexCenter>
                <Title variant="variant"> {champion.name}</Title>
                <SousTitle> {champion.blurb}</SousTitle>
            </FlexCenter>
            <CardContainer>
                <div className="champion_by_flex">
                    <Picture size="size" src={"https://ddragon.leagueoflegends.com/cdn/13.4.1/img/champion/" + champion.id + ".png"} />
                    <div className="champion_by_infos">
                        <Title variant="variant"> Quel role a le champion ? </Title>
                        <div className="champion_by_tag">
                            <Tag color="color" size="s">  {champion.tags[0]} </Tag>
                            <Tag color="color" size="s">  {champion.tags[1]} </Tag>
                        </div>

                        <FlexCenter>
                            <SousTitle variant="variant"> The Perfomance Start : </SousTitle>
                            <div className='champion_stats'>
                                <Tag padding="padding"> HP: <Note>{champion.stats.hp} </Note></Tag>
                                <Tag padding="padding"> ATTACK : <Note>{champion.stats.attackdamage}</Note></Tag>
                                <Tag padding="padding"> ARMOR : <Note> {champion.stats.armor}</Note></Tag>
                                <Tag padding="padding"> ARMOR : <Note> {champion.info.difficulty}</Note></Tag>
                            </div>
                            <div className="champion_combat">
                                <Tag padding="padding"> ATTACK RANGE : <Note> {champion.stats.attackrange} </Note></Tag>
                                <Tag padding="padding"> LEVEL ARMOR  :  <Note> {champion.stats.armorperlevel} </Note></Tag>
                                <Tag padding="padding"> SPEED MOVE <Note> {champion.stats.movespeed}</Note></Tag>
                            </div>
                        </FlexCenter>
                    </div>
                </div>
            </CardContainer >
        </div >


    )
}