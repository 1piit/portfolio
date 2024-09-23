import { ProjectType } from '@/types';
import Image from 'next/image';

interface ProjectsCardProps {
  project: ProjectType;
}

export const ProjectsCard = ({ project }: ProjectsCardProps) => {
  return (
    <div className='grid grid-flow-row gap-3 w-full p-6 rounded-3xl bg-white border border-black drop-shadow-lg hover:drop-shadow-none transition-all'>
      <div className='relative h-36 md:h-48'>
        <Image
          className='rounded-3xl border border-black'
          src={project.image}
          alt={'1piit.dev - Portfolio v1'}
          fill
          objectFit='cover'
          objectPosition='top'
        />
      </div>
      <h4 className='text-base lg:text-lg font-bold'>{project.title}</h4>
      <div className='text-sm lg:text-base'>{project.description}</div>
      <div className='flex flex-wrap gap-2.5'>
        {project.skills.map((skill, index) => (
          <span
            key={index}
            className='bg-tag-yellow w-fit rounded-full py-0.5 px-1.5 border-[0.5px] border-black text-xs lg:text-sm'
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
