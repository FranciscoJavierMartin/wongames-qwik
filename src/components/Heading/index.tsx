import { Slot, component$ } from '@builder.io/qwik';

export type HeadingProps = {
  color?: 'white' | 'black';
  lineLeft?: boolean;
  lineBottom?: boolean;
};

export default component$<HeadingProps>(
  ({ color = 'white', lineLeft, lineBottom }) => {
    console.log('Hello', color);
    return (
      <h2
        class={[
          'text-xlarge',
          {
            'text-white': color === 'white',
            'text-black': color === 'black',
            'border-l-[0.7rem] border-solid border-l-secondary pl-xxsmall':
              lineLeft,
            'relative mb-medium after:absolute after:bottom-[-0.5rem] after:left-[0px] after:w-[5rem] after:border-b-[0.4rem] after:border-solid after:border-b-primary':
              lineBottom,
          },
        ]}
      >
        <Slot />
      </h2>
    );
  },
);
