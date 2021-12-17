import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PlayersList from "./PlayersList";

it('Should test for a detailed players list view', async () => {
    const { container } = render(
        <MemoryRouter  >
            <PlayersList />
        </MemoryRouter>
    );

    screen.getByText('...Loading players');
    const labelText = await screen.findByRole('list', {name: 'players'});
    expect(labelText).toBeInTheDocument();
    expect(container).toMatchSnapshot();
});