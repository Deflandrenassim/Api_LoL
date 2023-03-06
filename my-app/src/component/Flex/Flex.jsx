import React from 'react';
import './Flex.css';

export const Flex = ({ children }) => {
    return (
        <div className="flex">{children}</div>
    )
}
export const FlexCenter = ({ children }) => {
    return (
        <div className='flex_center'>{children}</div>
    )
}

export default Flex