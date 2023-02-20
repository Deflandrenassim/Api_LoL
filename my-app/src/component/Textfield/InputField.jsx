import React from 'react'

const InputField = ({ children, type, onChange, onClick, placeHolder }) => {
    return (
        <input type={type} onChange={onChange} onClick={onClick} placeHolder={placeHolder}>{children}</input>
    )
}
export default InputField;
