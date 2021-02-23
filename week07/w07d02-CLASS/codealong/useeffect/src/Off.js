import React, { useEffect } from 'react';

const Off = ({ dark }) => {

    useEffect(() => {

        {/* This return statement fires when this component is unmounted*/}
        return () => {
            console.log('goodbye from Off.js!!!!!!!')
        }
    })

    return (
        <div className="dark">
            <h1>{dark}</h1>
        </div>
    );
};

export default Off;