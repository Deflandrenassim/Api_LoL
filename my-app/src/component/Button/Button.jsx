import React from 'react'
import './Button.css'


const Button = ({ children, type, onClick, variant }) => {
    return (
        <button className={`button ${variant}`} type={type} onClick={onClick} >{children}</button>
    )
}
export default Button;
