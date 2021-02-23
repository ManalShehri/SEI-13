import React,{useState} from 'react';
import { useHistory } from 'react-router-dom'

const NewFamily = ({setGotData}) => {

    const [familyName, setFamilyName] = useState("")
    const [wikiSuffix, setwikiSuffix] = useState("")

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault()

        const newFamily = {
            name: familyName,
            wikiSuffix: wikiSuffix,
            people: []
        }

        setGotData(Families => [...Families, newFamily])

        history.push('/families')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Family Name:
                <input onChange={(e) => setFamilyName(e.target.value)} type="text" name="familyName" />
            </label>
            <label>
                wikiSuffix:
                <input onChange={(e) => setwikiSuffix(e.target.value)} type="text" name="wikiSuffix" />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default NewFamily;