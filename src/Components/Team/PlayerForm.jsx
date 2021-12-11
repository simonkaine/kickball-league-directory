export default function PlayerForm({ 
    name, 
    setName, 
    submitHandler, 
    position, 
    setPosition,
    teamId, 
    setTeamId, 
    teams
    }) {
    return (
        <>
            <form onSubmit={submitHandler}>
                <label htmlFor='player name'>Name: </label>
                <input 
                    type='text' 
                    name='player name' 
                    placeholder='Enter name'
                    id='player name' 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                ></input>

                <label htmlFor='position'>Position: </label>
                <input 
                    type='text' 
                    position='position' 
                    placeholder='Enter position'
                    id='position' 
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                ></input>

                <label htmlFor='player team'>Team: </label>
                <select onChange={(e) => setTeamId(e.target.value)}>
                    <option key='all' value='all'>Please choose a team</option>

                    {teams.map((team) => (
                        <option 
                        key={team.id} 
                        value={team.id}>
                        {team.name}</option>
                    ))}
                </select>

                <button>Submit</button>
            </form>
        </>
    )
}