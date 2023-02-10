import React from 'react'


export const CardContainer = ({ children }) => {
    return (
        <div> {children} </div>
    )
}
export const CardChampions = ({ children }) => {
    return (
        <div className="card_champions">{children}</div>
    )
}
export const NameChampions = ({ children }) => {
    return (
        <span> {children}</span>
    )
}
export const ImgChampions = ({ src, alt }) => {
    return (
        <img src={src} alt={alt} />
    )
}
