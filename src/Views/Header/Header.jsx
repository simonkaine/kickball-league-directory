import { NavLink } from "react-router-dom"

export function Header() {
    return (
        
        <section className='Header' style={{backgroundColor: '#00482B'}}>
            <div className='Links' style={{border: 'black solid 1px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', padding: '100px 0 100px 0'}}>
                <NavLink to='/' className='HomeLinks' exact style={{color: 'white', fontSize: '1.5em'}}>Home</NavLink>
                <NavLink to='/teams' className='TeamsLink' exact style={{color: 'white', fontSize: '1.5em'}}>Teams</NavLink>
                <NavLink to='/players' className='PlayersLink' exact style={{color: 'white', fontSize: '1.5em'}}>Players</NavLink>
            </div>
        </section>
    )
}