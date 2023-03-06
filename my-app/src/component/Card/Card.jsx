import React from 'react'
import './Card.css';

export const CardContainer = ({ children, variant }) => {
    return (
        <div className={`card_container ${variant}`}> {children} </div>
    )
}
export const Card = ({ children }) => {
    return (
        <div className="card_champions">
            {children}
        </div>
    )
}
export const CardTitle = ({ children }) => {
    return (
        <h3 className="card_title"> {children}</h3>
    )
}
export const CardImg = ({ src, alt, }) => {
    return (
        <img className="card_img" src={src} alt={alt} />

    )
}
