import Link from 'next/link';

export const Nav = () => {
  return (
    <nav className='hidden md:block'>
      <ul className='font-mono uppercase font-bold text-sm'>
        <li>
          <Link className='group flex items-center py-2' href={'#about'}>
            <span className='mr-3 h-px w-8 rounded-full group-hover:w-16 bg-black group-hover:bg-hyper-400 transition-all group-focus-visible:w-16 group-focus-visible:bg-hyper-400 motion-reduce:transition-none'></span>
            <span className='group-hover:text-hyper-400 group-focus-visible:text-hyper-400'>
              About
            </span>
          </Link>
        </li>
        <li>
          <Link
            className='group flex items-center py-2'
            href={'#work-experience'}
          >
            <span className='mr-3 h-px w-8 rounded-full group-hover:w-16 bg-black group-hover:bg-hyper-400 transition-all group-focus-visible:w-16 group-focus-visible:bg-hyper-400 motion-reduce:transition-none'></span>
            <span className='group-hover:text-hyper-400 group-focus-visible:text-hyper-400'>
              Work Experience
            </span>
          </Link>
        </li>
        <li>
          <Link className='group flex items-center py-2' href={'#projects'}>
            <span className='mr-3 h-px w-8 rounded-full group-hover:w-16 bg-black group-hover:bg-hyper-400 transition-all group-focus-visible:w-16 group-focus-visible:bg-hyper-400 motion-reduce:transition-none'></span>
            <span className='group-hover:text-hyper-400 group-focus-visible:text-hyper-400'>
              Projects
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
