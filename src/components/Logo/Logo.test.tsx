import { createDOM } from '@builder.io/qwik/testing';
import Logo from '.';

describe('<Logo/>', () => {
  it('should render a white label by default', async () => {
    const { screen, render } = await createDOM();
    await render(<Logo />);

    expect(
      screen
        .getElementsByTagName('svg')
        .item(0)
        ?.classList.contains('text-white'),
    ).toBe(true);
  });
});
