import { PropsWithChildren } from 'react';

export const Title = (props: PropsWithChildren) => {
  return (
    <h3 className='font-mono font-bold uppercase text-xl -mx-6 px-6 w-screen -mb-3 md:w-full py-3 md:py-0 md:mb-auto lg:text-2xl sticky md:static top-0 bg-background/75 backdrop-blur z-20'>
      {props.children}
    </h3>
  );
};
