import Contact from '@/components/portfolio/contact/Contact';
import Intro from '@/components/portfolio/intro/Intro';
import PortfolioSection from '@/components/portfolio/PortfolioSection';
import ProjectList from '@/components/portfolio/projects/ProjectList';
import Skiils from '@/components/portfolio/Skiils';

export default function PortfolioPage() {
  // const dummyData = Array.from({ length: 10 }, (_, index) => ({
  //   id: Math.random() * 1000,
  //   title: `프로젝트 ${index + 1}`,
  //   context: `This is the context for card ${index + 1}. Here you can put any relevant information you want to display.`,
  // }));

  return (
    <div className='flex w-full flex-col gap-8 px-2 pt-24 md:px-4'>
      <PortfolioSection id='intro'>
        <Intro />
      </PortfolioSection>
      <PortfolioSection id='skills' title='skills'>
        <Skiils />
      </PortfolioSection>
      <PortfolioSection id='projects' title='projects'>
        <ProjectList />
      </PortfolioSection>
      <PortfolioSection id='contact' title='contact'>
        <Contact />
      </PortfolioSection>
    </div>
  );
}
