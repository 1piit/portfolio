import Image from 'next/image';
import { Section } from './Section';

export const Hero = () => {
  return (
    <Section className='flex gap-4 lg:gap-8 items-center'>
      <Image
        className='rounded-3xl border-2 border-black size-24 md:size-28'
        src={'/profile-picture-256x252-SD.png'}
        alt={'Pierre Bride picture'}
        width={'108'}
        height={'105'}
      />
      <div className='md:space-y-5 space-y-1'>
        <h2 className='font-mono font-bold text-xl lg:text-2xl text-nowrap'>
          Hello I'm Pierre!👋
        </h2>
        <h3 className='text-sm lg:text-lg text-wrap'>
          I‘m a French <b>full-stack developer</b> with a passion for front-end
          development.
        </h3>
      </div>
    </Section>
  );
};
