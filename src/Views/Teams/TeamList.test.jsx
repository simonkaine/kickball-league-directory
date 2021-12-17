import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import TeamList from "./TeamList";

it('Should test for a detailed Team list view', async () => {
    const { container } = render(
        <MemoryRouter  >
            <TeamList />
        </MemoryRouter>
    );

    screen.getByText('...Loading teams');
    // const labelText = await screen.findByText(/Bridge City Sneakers/i, /Rose City Bing Bongs/i);
    const labelText = await screen.findByRole('list', {name: 'teams'});
    expect(labelText).toBeInTheDocument();
    expect(container).toMatchSnapshot();
    // const teamNames = await screen.findByText('Bridge City Sneakers', { exact: false });
    // expect(teamNames).toBeInTheDocument();
});
