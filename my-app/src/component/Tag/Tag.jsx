import React from "react";
import './Tag.css';
export const Tag = ({ children, color, size }) => {
    return (
        <div className={`tag ${color} ${size}`}>{children}</div>
    )
}