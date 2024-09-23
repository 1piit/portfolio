import { projects, worksExperience } from '../contents/data';
import { ProjectsCard } from './ProjectsCard';
import { Section } from './Section';
import { Title } from './Title';

export const Projects = () => {
  return (
    <Section id='projects' className='space-y-5 scroll-mt-20 snap-start'>
      <Title>Projects</Title>
      {projects.map((project) => (
        <ProjectsCard project={project} />
      ))}
    </Section>
  );
};
