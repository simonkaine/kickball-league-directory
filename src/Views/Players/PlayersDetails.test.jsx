import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PlayerDetails from "./PlayersDetails";

it('Should test for detailed view of player', async () => {
    const {container} = render(
        <MemoryRouter>
            <PlayerDetails match={{ params: {playerId: '1'} }}/>
        </MemoryRouter> 
    );
    
    screen.getByText('...Loading player');
    const thePlayerName = await screen.findByText(/Simon Kaine/i);
    expect(thePlayerName).toBeInTheDocument()
    expect(container).toMatchSnapshot();
});