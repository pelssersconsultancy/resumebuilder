export interface Resume {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  linkedinID?: string;
  picture: {
    href: string;
  };
  city: string;
  country: string;
  website?: string;
  summary: string;
  jobTitle: string;
  skills: {
    name: string;
    level: 'NOVICE' | 'BEGINNER' | 'COMPETENT' | 'PROFICIENT' | 'EXPERT';
  }[];
  experiences: Experience[];
  education: Education[];
  courses: Course[];
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
