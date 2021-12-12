import { useState } from "react";
import { useHistory } from "react-router-dom";
import PlayerForm from '../../Components/Team/PlayerForm';
import { updatePlayerById } from '../../Services/players';  

export default function UpdatePlayer({ match }) {
    const { id } = match.params;
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const history = useHistory();
    
    const submitHandler = async (e) => {
        e.preventDefault();
        const response = await updatePlayerById(id, {name, position}) 
        history.push(`/players/${response[0].id}`);
    };

    return (
        <fieldset>
            <legend>
                Edit player!
            </legend>
            <PlayerForm 
                name={name} position={position} 
                submitHandler={submitHandler}
                setName={setName} setPosition={setPosition} 
            />
        </fieldset>
    )
}