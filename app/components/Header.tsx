import Link from 'next/link';
import { Logo } from './Logo';

export const Header = () => {
  return (
    <header className='sticky top-0 md:z-20 bg-background/75 backdrop-blur'>
      <div className='max-w-6xl w-full flex justify-between items-center h-20 px-6'>
        <Logo className='h-7 w-16' />

        <Link
          href='https://www.1piit.dev/2024_09-CV_English-Full_Stack_Developer-compressed.pdf'
          target='_blank'
          rel='noreferrer noopener'
          aria-label='My resume (opens in a new tab)'
          title='My resume'
          className='pt-[7px] px-4 text-white font-sans h-10 font-bold rounded-xl bg-hyper-500 hover:bg-hyper-400 transition-colors'
        >
          <span>Resume</span>
        </Link>
      </div>
    </header>
  );
};
