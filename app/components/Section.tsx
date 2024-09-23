import clsx from 'clsx';
import { PropsWithChildren } from 'react';

export const Section = (
  props: PropsWithChildren<{ className?: string; id?: string }>
) => {
  return (
    <section
      id={props.id}
      className={clsx('max-w-6xl m-auto w-full', props.className)}
    >
      {props.children}
    </section>
  );
};
