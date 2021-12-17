import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTeams, deleteTeamById } from '../../Services/teams.js';
// import ball from '../../assets/ball.png';

export default function TeamList() {
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);
 

    useEffect(() => {
        loadTeams()
    }, []);

    const loadTeams = async () => {
        setLoading(true);
        const newTeamList = await getTeams();
        setTeams(newTeamList);
        setLoading(false);
    }

    const deleteHandler = async ({id, name}) => {
        const userWantsTodelete = window.confirm(`Just double checking, are you sure you want to delete team and PLAYERS in team ${name}?`);
        
        if(userWantsTodelete) {
            await deleteTeamById(id);
            console.log('load teams::::::: ',loadTeams())
            await loadTeams();
        }
    };

    if (loading) return <h1 style={{height: '100vh', fontSize: '3em', marginTop: '350px'}}>...Loading teams</h1>;
        // <img src={ball} style={{backgroundColor: 'white'}}></img>

    return (
        <>
        <div>
            <Link to='/teams/create'>Add a new team</Link>
        </div>

        <section className='Teams'>
            <div className='teamsList'>
            <h1 style={{fontFamily: 'Century Gothic', fontSize: '4em', margin: '100px 0 0 0'}}>~ Teams ~</h1>

                <ul aria-label='teams' name='teams' style={{listStyleType: 'none', height: '100vh', margin: '50px 0 0 0'}}>
                    {teams.map((team) => {
                        return (
                            <li key={team.id} style={{padding: '10px 0 10px 0', fontSize: '2em'}}>
                                <Link to={`/teams/${team.id}`}>
                                    {team.name}
                                </Link>

                                <Link to={`teams/${team.id}/update`}>
                                    <button>Edit Team</button>
                                </Link>

                                <button type='button' aria-label={`delete team ${team.name}`}
                                    onClick={() => deleteHandler({id: team.id, name: team.name})}>
                                    Delete This Team
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
        </>
    );
}