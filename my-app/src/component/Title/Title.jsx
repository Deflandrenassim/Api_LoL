import React from 'react'
import './Title.css';

export const Title = ({ children, variant, size }) => {
    return (
        <h1 className={`title ${variant} ${size}`}>{children}</h1>
    )
}
export const SousTitle = ({ children, position }) => {
    return (
        <h2 className={`sous_title ${position}`}> {children}</h2>
    )
}
export const Description = ({ children }) => {
    return (
        <h3 className="description">{children}</h3>
    )
}
