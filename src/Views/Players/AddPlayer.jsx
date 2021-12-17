import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import PlayerForm from "../../Components/Team/PlayerForm";
import { createPlayer } from "../../Services/players";
import { getTeams } from "../../Services/teams";

export default function CreatePlayer() {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [teamId, setTeamId] = useState('');
    const [teams, setTeams] = useState([]);
    const history = useHistory();

    
    useEffect(() => {
        // async get all teams + set them to set teams + mount this function
        async function getAllTeams() {
            const fetchedTeams = await getTeams();
            setTeams(fetchedTeams);
            
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
        const response = await createPlayer({ name, position, teamId });
        history.push(`/players/${response[0].id}`);
    };

    return (
        <fieldset>
            <legend>
                Player Add/Edit
            </legend>
            <PlayerForm 
                submitHandler={submitHandler}
                name={name}
                setName={setName} 
                position={position}
                setPosition={setPosition}
                teamId={teamId} 
                setTeamId={setTeamId}
                teams={teams}
            />
        </fieldset>
    )
}