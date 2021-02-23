import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom'

const NewMember = ({ setGotData, Families }) => {

    const [memberName, setMemberName] = useState("")
    const [memberDescription, setMemberDescription] = useState("")
    const [wikiSuffix, setwikiSuffix] = useState("")

    const { family_id } = useParams()
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault()

        const newMember = {
            name: memberName,
            description: memberDescription,
            wikiSuffix: wikiSuffix,
            imageSuffix: wikiSuffix
        }

        let editFamilies = Families

        editFamilies.find(family =>
            family.wikiSuffix === family_id
        ).people.push(newMember)

        setGotData(editFamilies)

        history.push(`/families/${family_id}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Member Name:
                <input onChange={(e) => setMemberName(e.target.value)} type="text" name="memberName" />
            </label>
            <label>
                Member Description:
                <input onChange={(e) => setMemberDescription(e.target.value)} type="text" name="memberDescription" />
            </label>
            <label>
                wikiSuffix:
                <input onChange={(e) => setwikiSuffix(e.target.value)} type="text" name="wikiSuffix" />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default NewMember;