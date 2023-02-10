import React from 'react'
import './CardChampions.css';

export const CardContainer = ({ children }) => {
    return (
        <div className="card_container"> {children} </div>
    )
}
export const CardChampions = ({ children }) => {
    return (
        <div className="card_champions">
            {children}
        </div>
    )
}
export const NameChampions = ({ children }) => {
    return (
        <span className="name_champions"> {children}</span>
    )
}
export const ImgChampions = ({ src, alt, key }) => {
    return (
        <img className="img_champions" src={src} alt={alt} key={key} />
    )
}
