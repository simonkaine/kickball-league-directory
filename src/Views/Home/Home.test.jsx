import { render, screen } from "@testing-library/react";
import { Home } from "./Home";

it('should test for home view render', () => {
    const { container } = render (
        <Home />
    )

    screen.getByText('Welcome to the Kickball League Directory!');
    expect(container).toMatchSnapshot();
})