import { WorkExperienceType } from '@/types';

interface WorkExperienceCardProps {
  workExperience: WorkExperienceType;
}

export const WorkExperienceCard = ({
  workExperience,
}: WorkExperienceCardProps) => {
  return (
    <div className='grid grid-flow-row gap-3 p-6 rounded-3xl bg-white border border-black drop-shadow-lg hover:drop-shadow-none transition-all'>
      <span className='text-xs lg:text-sm'>{workExperience.date}</span>
      <h4 className='text-base lg:text-lg font-bold'>{workExperience.title}</h4>
      <div className='text-sm lg:text-base'>{workExperience.description}</div>
      <div className='flex flex-wrap gap-2.5'>
        {workExperience.skills.map((skill, index) => (
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
