import { ProjectType, WorkExperienceType } from '@/types';

export const worksExperience: WorkExperienceType[] = [
  {
    date: '2023-PRESENT',
    title: 'Full-stack developer @Freelance',
    description: (
      <ul role='list' className='marker:text-black list-disc pl-5 space-y-3'>
        <li>
          <span className='underline bold'>INFINY:</span> Development of a
          recruitment platform.
        </li>
        <li>
          <span className='underline bold'>Weenyd:</span> Development of a
          recruitment platform.
        </li>
        <li>
          <span className='underline bold'>HOURRAIL!:</span> Development of the
          first version of a web application for a route planning platform aimed
          at facilitating low-carbon travel without relying on planes or cars.
        </li>
      </ul>
    ),
    skills: [
      'TypeScript',
      'Next.js',
      'Nest.js',
      'Strapi',
      'Sanity',
      'TailwindCSS',
      'Figma',
    ],
  },
  {
    date: '2021-2022',
    title: 'Full-stack developer @Yumon',
    description: (
      <>
        <p>
          Development of a web application integrating a marketplace and a
          fantasy card game for the community and content creators.
        </p>
        <ul role='list' className='marker:text-black list-disc pl-5 space-y-3'>
          <li>Development of three MVP.</li>
          <li>
            Creation of the design system in direct collaboration with a
            designer.
          </li>
          <li>Responsive creation of the landing page.</li>
          <li>Improvement of accessibility and SEO.</li>
          <li>Implementation of unit and E2E testing.</li>
        </ul>
      </>
    ),
    skills: [
      'TypeScript',
      'React.js',
      'Next.js',
      'Nest.js',
      'Strapi',
      'Ruby on Rails',
      'TailwindCSS',
      'Storybook',
      'Figma',
      'Blockchain',
    ],
  },
  {
    date: '2019-2021',
    title: 'Owner@Carrefour',
    description: (
      <>
        <p>Founded and managed a Carrefour City store franchise.</p>
        <ul role='list' className='marker:text-black list-disc pl-5 space-y-3'>
          <li>10 people under management.</li>
          <li>2M€ turnover/year.</li>
        </ul>
      </>
    ),
    skills: [
      'Entrepreneurship',
      'Team management',
      'Store management',
      'Customer relations',
      'Sales',
    ],
  },
];

export const projects: ProjectType[] = [
  {
    title: '1piit.dev',
    image: '/1piit.dev-Portfolio_v1-screen_capture-SD-compressed.png',
    description: (
      <p>
        The website you are currently viewing. 🙃 It’s built with TypeScript,
        Next.js 14, TailwindCSS.
      </p>
    ),
    skills: ['TypeScript', 'Next.js', 'TailwindCSS', 'Figma'],
  },
];
