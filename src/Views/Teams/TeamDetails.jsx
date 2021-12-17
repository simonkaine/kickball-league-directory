import { useEffect, useState} from 'react';
import { getTeamById } from '../../Services/teams';
// import { useParams } from 'react-router';

export default function TeamDetails({ match }) {
    const { teamId } = match.params;
    const [team, setTeam] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getTeamById(teamId).then((response) => setTeam(response))
        setTimeout(() => {
            setLoading(false)
        }, 600)
    }, [teamId]);

    if (loading) return <h1 style={{height: '100vh', fontSize: '3em', marginTop: '350px'}}>...Loading team</h1>;

    return (
        <div className='TeamDetails' style={{border: '1px solid black', padding: '100px 0 0 0'}}>
            <h1 style={{fontFamily: 'Century Gothic', fontSize: '4em'}}>
                {team.name}
            </h1>
            <h3 style={{fontFamily: 'Century Gothic', fontSize: '2em'}}>
                From: {team.city}, {team.state}
            </h3>

            <ul aria-label='team players' style={{listStyleType: 'none', height: '100vh'}}>
                {team.players.map((player) => {
                    return (
                        <li key={player.id} style={{textDecoration: 'underline', padding: '10px'}}>
                            Position: {player.position}
                                {' '}--{' '}
                            Name: {player.name}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
