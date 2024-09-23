import Link from 'next/link';

export const SocialMedia = () => {
  return (
    <ul className='flex gap-5 items-center mt-8' aria-label='Social media'>
      <li>
        <Link
          href='https://github.com/1piit'
          target='_blank'
          rel='noreferrer noopener'
          aria-label='GitHub (opens in a new tab)'
          title='GitHub'
        >
          <span className='icon-[mdi--github] size-6 hover:bg-hyper-400'></span>
        </Link>
      </li>
      <li>
        <Link
          href='https://www.linkedin.com/in/pierre-bride/'
          target='_blank'
          rel='noreferrer noopener'
          aria-label='LinkedIn (opens in a new tab)'
          title='LinkedIn'
        >
          <span className='icon-[mdi--linkedin] size-6 hover:bg-hyper-400'></span>
        </Link>
      </li>
      <li>
        <Link
          href='https://calendly.com/pierrebride-pro/30min'
          target='_blank'
          rel='noreferrer noopener'
          aria-label='Calendly (opens in a new tab)'
          title='Calendly'
        >
          <span className='icon-[mdi--calendar-month-outline] size-6 hover:bg-hyper-400'></span>
        </Link>
      </li>
      <li>
        <Link
          href='mailto:pierrebride.pro@gmail.com'
          rel='noreferrer noopener'
          aria-label='E-Mail (opens in a new tab)'
          title='E-Mail'
        >
          <span className='icon-[mdi--email-outline] size-6 hover:bg-hyper-400'></span>
        </Link>
      </li>
    </ul>
  );
};
