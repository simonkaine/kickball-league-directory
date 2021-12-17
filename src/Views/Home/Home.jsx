import SoccerPic from '../../assets/kickball.jpg';

export function Home() {
    return (
        <section className='HomePage'>
            <div style={{height: '100vh', margin: '100px 0 0 0', backgroundColor: '#fffff0'}}>
                   <h1 style={{fontSize: '3em', margin: '-50px 0 50px 0 '}}>Welcome to the Kickball League Directory!</h1>
                   <img src={SoccerPic} alt='Timbers Stadium'></img>
            </div>
        </section>
    )
}