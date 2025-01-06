import React from 'react';
import './Pagewrapper.css';

function Pagewrapper({ children }) {
    return <div className="flex-inner-container">{children}</div>;
}

export default Pagewrapper;