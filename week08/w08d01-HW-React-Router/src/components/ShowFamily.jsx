import React from 'react'
import { useParams, Link } from 'react-router-dom'

const ShowFamily = (props) => {

    const { family_id } = useParams()


    const familyMembers = props.Families.length > 0 && props.Families.find(family => family.wikiSuffix === family_id).people.map(member => {
        return (
            <div key={member.wikiSuffix}>
                <Link to={`/families/${family_id}/members/${member.wikiSuffix}`}>
                    {member.name}
                </Link>
            </div>
        )
    })


    return (
        <>
        <div>
            {familyMembers}
        </div>
        <br/>
        <Link style={{textDecoration:'none'}} to={`/families/${family_id}/members/new`}>
            Add member
        </Link>
        </>
    )
}

export default ShowFamily;
