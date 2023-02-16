import React from 'react'
import './Card.css';

export const CardContainer = ({ children }) => {
    return (
        <div className="card_container"> {children} </div>
    )
}
export const Card = ({ children }) => {
    return (
        <div className="card_champions">
            {children}
        </div>
    )
}
export const CardName = ({ children }) => {
    return (
        <span className="name_champions"> {children}</span>
    )
}
export const CardImg = ({ src, alt, }) => {
    return (
        <img className="img_champions" src={src} alt={alt}>
        </img>
    )
}
