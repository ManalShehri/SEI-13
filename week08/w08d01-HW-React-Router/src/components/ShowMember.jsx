import React from 'react'
import { useParams } from 'react-router-dom'

const ShowFamily = (props) => {

    const { family_id ,member_id } = useParams()

    const memberData = props.Families.length > 0 && props.Families.find(family => family.wikiSuffix === family_id).people.find(member => member.wikiSuffix === member_id)
    

    return (
        memberData && 
        <div>
            <h2>{memberData.name}</h2>
            <p>{memberData.description}</p>
        </div>
    )
}

export default ShowFamily;