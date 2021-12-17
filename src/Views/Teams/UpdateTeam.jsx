import { useState } from "react";
import { useHistory } from "react-router-dom";
import TeamForm from '../../Components/Team/TeamForm';
import { updateTeamById } from '../../Services/teams';  

export default function UpdateTeam({ match }) {
    const { id } = match.params;
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const history = useHistory();
    
    const submitHandler = async (e) => {
        e.preventDefault();
        const response = await updateTeamById(id, {name, city, state}) 
        history.push(`/teams/${response[0].id}`);
    };

    return (
        <fieldset>
            <legend>
                let's Edit this team!
            </legend>
            <TeamForm 
                name={name} city={city} state={state} 
                submitHandler={submitHandler}
                setName={setName} setCity={setCity} setState={setState}
            />
        </fieldset>
    )
}