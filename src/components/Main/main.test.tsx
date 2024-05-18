import { createDOM } from '@builder.io/qwik/testing';
import Main from '.';

describe('<Main/>', () => {
  it('should render the heading', async () => {
    const { screen, render } = await createDOM();
    await render(<Main />);

    expect(screen.getElementsByTagName('h1').item(0)?.innerHTML).toMatch(
      /wongames/i,
    );
  });
});
