import { About } from './components/About';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Nav } from './components/Nav';
import { Projects } from './components/Projects';
import { SocialMedia } from './components/SocialMedia';
import { WorkExperience } from './components/WorkExperience';

export default function Home() {
  return (
    <main
      id='back-to-top'
      className='grid grid-flow-row min-h-screen content-start max-w-6xl mx-auto snap-y'
    >
      <Header />
      <div className='grid grid-row-2 md:grid-cols-2 md:gap-8 items-start px-6'>
        <div className='md:h-screen md:flex md:flex-col md:justify-between top-20 sticky pb-8 pt-8 md:pb-44 md:pt-10 overflow-hidden z-0 bg-background'>
          <div className='flex flex-col gap-12'>
            <Hero />
            <Nav />
          </div>
          <SocialMedia />
        </div>
        <div className='grid grid-flow-row gap-14 pb-14 md:pb-44 md:pt-10 z-10 bg-background'>
          <About />
          <WorkExperience />
          <Projects />
        </div>
      </div>
      <Footer />
    </main>
  );
}
