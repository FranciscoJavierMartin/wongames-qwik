import { createDOM } from '@builder.io/qwik/testing';
import Heading from '.';

describe('<Heading/>', () => {
  it('should render a white heading by default', async () => {
    const { screen, render } = await createDOM();
    await render(<Heading>Most populars</Heading>);

    expect(screen.getElementsByTagName('h2').item(0)?.innerHTML).toMatch(
      /Most populars/i,
    );

    expect(
      screen
        .getElementsByTagName('h2')
        .item(0)
        ?.classList.contains('text-white'),
    ).toBe(true);
  });
});
