import React from 'react';
const loading = require('../../assets/images/loading/loading.gif');
import './__loading.scss';
export function Loading ():JSX.Element {
    return (
        <div className="loading" >
            <img src={loading} alt={loading} />
        </div>
    )
}