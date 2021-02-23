import React from 'react'
import SonOfTest from './SonOfTest'

export default function Test(props) {
    return (
        <div>
            <h1> Test</h1>
            {/* <h2> Name : {props.name}</h2> */}
            <h3>age : {props.age} </h3>
        <SonOfTest name = {props.name} />

        </div>
    )
}
