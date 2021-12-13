import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPlayers, deletePlayerById } from '../../Services/players.js';

export default function PlayersList() {
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPlayers().then((response) => setPlayers(response))
        .finally(() => 
        setTimeout(() => {
            setLoading(false)
        }, 600))
    }, []);

    const deleteHandler = async ({id, name}) => {
        const userWantsTodelete = window.confirm(`Just double checking, are you sure you want to delete ${name}?`);
        
        if(userWantsTodelete) {
            await deletePlayerById(id);
            setLoading(true);
            const newPlayerList = await getPlayers();
            setPlayers(newPlayerList);
            setLoading(false);
        }

    };

    if(loading) return <h1 style={{height: '100vh', fontSize: '3em', marginTop: '350px'}}>...Loading players</h1>;
    
    return (
        <>
        <div>
            <Link to='/players/create'>Add a new player</Link>
        </div>

        <section className='Players'>
            <div className='PlayersList'>
            <h1 style={{fontFamily: 'Century Gothic', fontSize: '4em', margin: '100px 0 0 0'}}>~ Players ~</h1>

                <ul aria-label='players' style={{listStyleType: 'none', height: '100vh', margin: '50px 0 0 0'}}>
                    {players.map((player) => {
                        return (
                            <li key={player.id} style={{padding: '10px 0 10px 0', fontSize: '1.5em'}}>
                                <Link to={`/players/${player.id}`}>
                                    {player.name}
                                </Link>

                                <Link to={`players/${player.id}/update`}>
                                    <button>Edit Player</button>
                                </Link>

                                <button type='button' aria-label={`delete player ${player.name}`}
                                    onClick={() => deleteHandler({id: player.id, name: player.name})}>
                                    Delete This player
                                </button>

                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
        </>
    )
}