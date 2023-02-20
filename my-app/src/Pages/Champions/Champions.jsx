import React from 'react';
import { useParams } from 'react-router-dom';
import { useChampions } from '../../hook/useChampions';

export const Champions = () => {

    const id = useParams();
    const champion = useChampions(id);
    // console.log('mon console', champion);
    return (
        <div className="champions">
        </div>
    )
}
