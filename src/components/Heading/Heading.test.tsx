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

  it('should render a black heading when color is passed', async () => {
    const { screen, render } = await createDOM();
    await render(<Heading color='black'>Most populars</Heading>);

    expect(
      screen
        .getElementsByTagName('h2')
        .item(0)
        ?.classList.contains('text-black'),
    ).toBe(true);
  });

  it('should render a heading with a line to the left side', async () => {
    const { screen, render } = await createDOM();
    await render(<Heading lineLeft>Most populars</Heading>);

    expect(
      screen
        .getElementsByTagName('h2')
        .item(0)
        ?.classList.contains('border-l-secondary'),
    ).toBe(true);
  });

  it('should render a heading with a line at the bottom', async () => {
    const { screen, render } = await createDOM();
    await render(<Heading lineBottom>Most populars</Heading>);

    expect(
      screen
        .getElementsByTagName('h2')
        .item(0)
        ?.classList.contains('after:border-b-primary'),
    ).toBe(true);
  });
});
