import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTeams } from '../../Services/teams.js';
// import ball from '../../assets/ball.png';

export default function TeamList() {
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getTeams().then((response) => setTeams(response))
        .finally(()=> 
        setTimeout(() => {
            setLoading(false)
        }, 600)) 
    }, []);

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

                                {/* <Link to='/teams/create'>
                                    <button>Add Team</button>
                                </Link>

                                <Link>
                                    <button>Edit Team</button>
                                </Link>

                                <Link>
                                    <button>Delete Team</button>
                                </Link> */}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
        </>
    );
}