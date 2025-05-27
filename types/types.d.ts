export type LinkType = {
  name: string;
  href: string;
}[];


export type actionFunction = (preStateList: any, formAction: FormData) => Promise<{ message: string }>


export type ProjectList = {
  title: string;
  context: string[];
  period: string;
  startDate: string;
  endDate: string;
  skills: string[];
  images: StaticImageData[];
  isTeamProject: boolean;

  // links
  githubLink?: string;
  siteLink?: string;
};


export type SkillGroup = {
  categoryName: string
  category: string
  capabilities: string
  technologies: string[]
}

