import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
// import { useEffect } from "react/cjs/react.development";
import PlayerForm from '../../Components/Team/PlayerForm';
import { updatePlayerById } from '../../Services/players';  
import { getTeams } from "../../Services/teams";

export default function UpdatePlayer({ match }) {
    const { id } = match.params;
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [teams, setTeams] = useState();
    const [teamId, setTeamId] = useState('');
    const history = useHistory();

    useEffect(() => {
        async function getAllTeams() {
            const fetchedTeams = await getTeams();
            setTeams(fetchedTeams);
            console.log('fetched TEAMs', fetchedTeams)
        }
        getAllTeams();
    },[])

    useEffect(() => {
        async function getTheSelectedTeam() {
            if(!teamId) return;
            
            if(teamId !== 'all') {
                setTeamId(teamId);
            }
        }
        getTheSelectedTeam();
    }, [teamId])
    
    const submitHandler = async (e) => {
        e.preventDefault();
        const response = await updatePlayerById(id, {name, position}) 
        console.log('RESPONSE ',response)
        history.push(`/teams/${response[0].id}`);
    };

    return teams ? 
    ( 
        <fieldset>
            <legend>
                Edit player!
            </legend>
            <PlayerForm 
                name={name} position={position} 
                submitHandler={submitHandler}
                setName={setName} setPosition={setPosition} 
                teamId={teamId} 
                setTeamId={setTeamId}
                teams={teams}
            />
        </fieldset>

    ) : <p>LOADING....</p>
}