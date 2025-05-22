import ProjectItem from '@/components/portfolio/projects/ProjectItem';
import { PROJECTS_DATA } from '@/data/projects';

export default function ProjectList() {
  return (
    <div className='grid w-full grid-cols-1 gap-4 lg:grid-cols-2'>
      {PROJECTS_DATA.map((item) => (
        <ProjectItem key={item.id} {...item} />
      ))}
    </div>
  );
}
