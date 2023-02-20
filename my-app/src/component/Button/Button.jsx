import React from 'react'
import './Button.css'


const Button = ({ children, type, onClick, design }) => {
    return (
        <button className={`button ${design}`} type={type} onClick={onClick} >{children}</button>
    )
}
export default Button;
