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
  skills: Skill[];
  experiences: Experience[];
  education: Education[];
  courses: Course[];
}

export type Level =
  | 'NOVICE'
  | 'BEGINNER'
  | 'COMPETENT'
  | 'PROFICIENT'
  | 'EXPERT';

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
  studyType: string;
  startDate: string;
  endDate?: string;
}

export interface Course {
  institution: string;
  year: number;
  name: string;
}
