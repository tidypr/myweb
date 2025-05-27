import ProjectItem from '@/components/portfolio/projects/ProjectItem';
import { PROJECTS_DATA } from '@/data/projects';

export default function ProjectList() {
  return (
    // <div className='grid w-full grid-cols-1 gap-4 lg:grid-cols-2'>
    <div className='grid w-full grid-cols-1 gap-4'>
      {/* {PROJECTS_DATA.sort((a, b) => a.id - b.id).map((item) => ( */}
      {PROJECTS_DATA.sort((a, b) => b.id - a.id).map((item) => (
        <ProjectItem key={item.id} {...item} />
      ))}
    </div>
  );
}
