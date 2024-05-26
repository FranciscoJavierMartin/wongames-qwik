import { createDOM } from '@builder.io/qwik/testing';
import Logo from '.';

describe('<Logo/>', () => {
  it('should render the heading', async () => {
    const { screen, render } = await createDOM();
    await render(<Logo />);

    expect(screen.getElementsByTagName('h1').item(0)?.innerHTML).toMatch(
      /wongames/i,
    );
  });
});
