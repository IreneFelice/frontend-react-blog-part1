import React from 'react';
import './PageWrapper.css';

function PageWrapper({ children }) {
    return <div className="flex-inner-container">{children}</div>;
}

export default PageWrapper;