import React, { useEffect } from 'react';

const On = ({ light }) => {

    useEffect(() => {
        // console.log('hello from On.js')

        {/* This return statement fires when this component is unmounted*/}
        return () => {
            console.log('goodbye from On.js')
        }
    })


    return (
        <div className="light">
            <h1>{light}</h1>
        </div>
    );
};

export default On;