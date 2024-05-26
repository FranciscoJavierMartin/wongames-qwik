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

  it('should render a black label when black color is passed', async () => {
    const { screen, render } = await createDOM();
    await render(<Logo color='black' />);

    expect(
      screen
        .getElementsByTagName('svg')
        .item(0)
        ?.classList.contains('text-black'),
    ).toBe(true);
  });

  it('should render a normal logo when size is default', async () => {
    const { screen, render } = await createDOM();
    await render(<Logo />);

    expect(
      screen
        .getElementsByTagName('svg')
        .item(0)
        ?.classList.contains('w-[11rem]'),
    ).toBe(true);
    expect(
      screen
        .getElementsByTagName('svg')
        .item(0)
        ?.classList.contains('h-[3.3rem]'),
    ).toBe(true);
  });

  it('should render a bigger logo when size is large', async () => {
    const { screen, render } = await createDOM();
    await render(<Logo size='large' />);

    expect(
      screen
        .getElementsByTagName('svg')
        .item(0)
        ?.classList.contains('w-[20rem]'),
    ).toBe(true);
    expect(
      screen
        .getElementsByTagName('svg')
        .item(0)
        ?.classList.contains('h-[5.9rem]'),
    ).toBe(true);
  });
});
