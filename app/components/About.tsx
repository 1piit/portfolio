import { Section } from './Section';
import { Title } from './Title';

export const About = () => {
  return (
    <Section id='about' className='space-y-5 scroll-mt-28 snap-start'>
      <Title>About</Title>
      <div className='bg-white rounded-3xl border border-black p-4 md:p-6 drop-shadow-lg hover:drop-shadow-none transition-all'>
        <p className='text-sm lg:text-base'>
          After an initial entrepreneurial experience managing a convenience
          store, I transitioned into web development by joining{' '}
          <b>Le Wagon Paris</b> in 2021. I then joined <b>Yumon</b>, a start-up
          specializing in the creator economy, where I participated in designing
          a blockchain-based web application, including a marketplace and a
          fantasy card game for content creators.
          <br />
          <br />
          Later, I developed the first version of <b>Hourrail!</b>, a low-carbon
          route platform, and recently contributed to the development of an
          innovative recruitment platform. Alongside my work as a developer, I
          co-founded <b>Pygments Records</b>, a music label, agency, and
          collective that organizes innovative live-stream events in Paris and
          supports emerging artists in their development.
          <br />
          <br />
          Recently, I traveled for several months in Southeast Asia to immerse
          myself in new cultures, discover different ways of working, explore
          new technologies and lifestyles, and improve my English.
          <br />
          <br />
          When I’m not behind my computer or involved in the music collective, I
          often spend my time running, swimming, reading, or getting lost on
          YouTube!
        </p>
      </div>
    </Section>
  );
};
