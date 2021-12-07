import { NavLink } from "react-router-dom"

export function Header() {
    return (
        <section className='Header'>
            <div className='Links' style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
                <NavLink to='/' className='HomeLink' exact>Home</NavLink>
                <NavLink to='/teams' className='TeamsLink' exact>Teams</NavLink>
                <NavLink to='/players' className='PlayersLink' exact>Players</NavLink>
            </div>
        </section>
    )
}