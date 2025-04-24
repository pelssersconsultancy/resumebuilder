export interface Resume {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  linkedinID?: string;
  githubID?: string;
  picture: {
    href: string;
  };
  city: string;
  country: string;
  website?: string;
  summary: string;
  jobTitle: string;
  technicalSkills: Skill[];
  languages: Skill[];
  experiences: Experience[];
  educations: Education[];
  courses: Course[];
  lastUpdated: string;
}

export const Novice = { name: 'NOVICE', value: 1 };
export const Beginner = { name: 'BEGINNER', value: 2 };
export const Competent = { name: 'COMPETENT', value: 3 };
export const Proficient = { name: 'PROFICIENT', value: 4 };
export const Expert = { name: 'EXPERT', value: 5 };

export type Level =
  | typeof Novice
  | typeof Beginner
  | typeof Competent
  | typeof Proficient
  | typeof Expert;

export interface Skill {
  name: string;
  level: Level;
}

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  highlights: string[];
  tags: string[];
}

export interface Education {
  institution: string;
  study: string;
  startDate: string;
  endDate?: string;
}

export interface Course {
  institution: string;
  year: number;
  name: string;
}
