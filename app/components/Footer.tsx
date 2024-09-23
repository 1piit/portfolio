import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='relative'>
      <div className='relative max-w-6xl flex flex-col gap-3 md:gap-1 h-36 md:h-28 px-6 items-center w-full'>
        <span>Made with love 🫶</span>
        <span>© 2024 1Piit - Pierre Bride</span>
        <Link
          href='#back-to-top'
          aria-label='My resume (opens in a new tab)'
          title='My resume'
          className='md:absolute md:inset-y-0 md:right-6 w-fit p-2.5 text-white font-sans h-10 font-bold rounded-xl bg-hyper-500 hover:bg-hyper-400 transition-colors'
        >
          {/* <span>Back to the top</span> */}
          <span className='icon-[mdi--arrow-up-bold] size-6 animate-bounce'></span>
        </Link>
      </div>
    </footer>
  );
};
