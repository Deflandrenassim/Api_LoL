import React from 'react';
import './InputField.css';

const InputField = ({ children, type, onChange, onClick, placeholder, variant }) => {
    return (
        <input className={`input ${variant}`} type={type} onChange={onChange} onClick={onClick}
            placeholder={placeholder}>
            {children}
        </input>
    )
}
export default InputField;
