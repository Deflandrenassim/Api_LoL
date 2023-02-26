import React from 'react'
import './Picture.css'

export const Picture = ({ src, alt, size }) => {
    return (
        <img className={`picture ${size}`} src={src} alt={alt} />
    )
}
