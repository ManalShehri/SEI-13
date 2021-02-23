import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {

    return (
        <nav className ="navBar">
            <Link to="/families">Families</Link>
            <Link to="/families/new">Add Familiy</Link>
        </nav>
        // <div>
        //     <h2>I appear on all pages</h2>
        // </div>
    )
}

export default Navigation;