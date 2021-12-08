import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import TeamDetails from "./TeamDetails";

it('Should test for detailed view of team', async () => {
    const {container} = render(
        <MemoryRouter>
            <TeamDetails match={{ params: {teamId: '1'} }}/>
        </MemoryRouter> 
    );
    
    screen.getByText('...Loading team');
    const theTeamName = await screen.findByText(/Bridge City Sneakers/i);
    expect(theTeamName).toBeInTheDocument()
    expect(container).toMatchSnapshot();
});