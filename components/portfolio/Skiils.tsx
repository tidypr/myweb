import { skillGroups } from '@/data/skills';
import {
  Code2,
  Database,
  Globe,
  Palette,
  Server,
  Workflow,
} from 'lucide-react';

export default function Skills() {
  // Get category icon
  const getCategoryIcon = (category: string) => {
    const iconProps = { className: 'h-5 w-5' };

    switch (category) {
      case 'frontend':
        return <Globe {...iconProps} />;
      case 'backend':
        return <Server {...iconProps} />;
      case 'design':
        return <Palette {...iconProps} />;
      case 'devops':
        return <Workflow {...iconProps} />;
      case 'languages':
        return <Code2 {...iconProps} />;
      case 'database':
        return <Database {...iconProps} />;
      default:
        return <Code2 {...iconProps} />;
    }
  };

  return (
    <>
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
        {skillGroups.map((group, index) => (
          <div key={index} className='rounded-lg border p-6'>
            <div className='mb-4 flex items-center gap-2 border-b pb-2'>
              {getCategoryIcon(group.category)}
              <h3 className='text-lg font-medium'>{group.categoryName}</h3>
            </div>

            <div className='mb-4'>
              <p className='text-muted-foreground text-sm'>
                {group.capabilities}
              </p>
            </div>

            <div className='mt-4 flex flex-wrap gap-2'>
              {group.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className='bg-muted inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium'
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
