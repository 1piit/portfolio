import { worksExperience } from '../contents/data';
import { Section } from './Section';
import { Title } from './Title';
import { WorkExperienceCard } from './WorkExperienceCard';

export const WorkExperience = () => {
  return (
    <Section id='work-experience' className='space-y-5 scroll-mt-28 snap-start'>
      <Title>Work Experience</Title>
      {worksExperience.map((workExperience) => (
        <WorkExperienceCard workExperience={workExperience} />
      ))}
    </Section>
  );
};
