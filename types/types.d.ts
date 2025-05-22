export type LinkType = {
  name: string;
  href: string;
}[];


export type actionFunction = (preStateList: any, formAction: FormData) => Promise<{ message: string }>


export type ProjectList = {
  id: number;
  title: string;
  context: string;


  // 링크
  githubLink: string;
  siteLink: string;
}[];


export type SkillGroup = {
  categoryName: string
  category: string
  capabilities: string
  technologies: string[]
}

