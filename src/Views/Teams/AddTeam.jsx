// this file i want to house my form for user to create a team 
import { useState } from "react";
import { useHistory } from "react-router-dom";
import TeamForm from '../../Components/Team/TeamForm';
import { createTeam } from '../../Services/teams';  

export default function AddTeam() {
    const [name, setName] = useState('');
    // const [city, setCity] = useState('');
    // const [state, setState] = useState('');
    const history = useHistory();

    const submitHandler = async (e) => {
        e.preventDefault();
        // const response = await createTeam({name, city, state}) <<<<< use this again
        const response = await createTeam({ name })
        history.push(`/teams/${response[0].id}`);
    };

    return (
        <fieldset>
            <legend>
                Add a new team!
            </legend>
            <TeamForm 
                // name={name} city={city} state={state} 
                submitHandler={submitHandler}
                // setName={setName} setCity={setCity} setState={setState}
                name={name} setName={setName}
            />
        </fieldset>
    )
}