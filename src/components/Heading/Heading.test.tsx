import { createDOM } from '@builder.io/qwik/testing';
import Heading from '.';

describe('<Heading/>', () => {
  it('should render the heading', async () => {
    const { screen, render } = await createDOM();
    await render(<Heading />);

    expect(screen.getElementsByTagName('h1').item(0)?.innerHTML).toMatch(
      /wongames/i,
    );
  });
});
