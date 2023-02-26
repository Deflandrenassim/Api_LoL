import React from 'react'
import './Title.css';

export const Title = ({ children, variant }) => {
    return (
        <h1 className={`title ${variant}`}>{children}</h1>
    )
}
export const Description = ({ children }) => {
    return (
        <h3 className="description">{children}</h3>
    )
}
