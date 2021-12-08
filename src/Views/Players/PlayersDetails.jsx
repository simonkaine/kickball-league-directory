import { useEffect, useState} from 'react';
import { getPlayerById } from '../../Services/players.js';

export default function PlayerDetails({ match }) {
    const { playerId } = match.params;
    const [player, setPlayer] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPlayerById(playerId).then((response) => setPlayer(response))

        setTimeout(() => {
            setLoading(false);
        }, 600)
    }, [playerId]);

    if (loading) return <h1 style={{height: '100vh', fontSize: '3em', marginTop: '350px'}}>...Loading player</h1>;

    return (
        <div className='PlayerDetails' style={{border: '1px solid black', padding: '100px 0 0 0', height: '100vh'}}>
            <h1 style={{fontFamily: 'Century Gothic', fontSize: '4em'}}>
                {player.name}
            </h1>
            <p style={{fontSize: '2em'}}>{player.position} for the {player.teams.name}</p>
        </div>
    )
}