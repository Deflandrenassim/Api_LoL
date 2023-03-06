import React from "react";
import './Tag.css';
export const Tag = ({ children, color, size, padding }) => {
    return (
        <div className={`tag ${color} ${size} ${padding}`}>{children}</div>
    )
}