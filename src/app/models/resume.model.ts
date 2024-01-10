export interface Resume {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  linkedinID?: string;
  picture: {
    href: string;
  };
  address: {
    street: string;
    houseNumber: number;
    city: string;
    state: string;
    zip: string;
  };
  website?: string;
  summary: string;
  jobTitle: string;
  skills: {
    name: string;
    level: 'NOVICE' | 'BEGINNER' | 'COMPETENT' | 'PROFICIENT' | 'EXPERT';
  }[];
  experience: Experience[];
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
