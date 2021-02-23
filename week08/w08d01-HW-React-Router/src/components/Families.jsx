import React from 'react'
import { Link } from 'react-router-dom'

const Families = (props) => {

    const allFamiles = props.Families.map(family=>{
        return <div key={family.wikiSuffix}>
            <Link to={`/families/${family.wikiSuffix}`}>{family.name}</Link>
        </div>
    })
    
    return(
        <div>
            {allFamiles}
        </div>
    )
}

export default Families;
