export interface Resume {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  linkedinID?: string;
  address: {
    street: string;
    houseNumber: number;
    city: string;
    state: string;
    zip: string;
  };
  website?: string;
  summary: string;
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
  website: string;
  startDate: string;
  endDate: string;
  summary: string;
  tags: string[];
}

export interface Education {
  institution: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
  gpa: string;
  courses: string[];
}

export interface Course {
  institution: string;
  year: string;
  name: string;
}
