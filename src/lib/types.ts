export type Contact = {
  type: "email" | "link";
  label: string;
  value: string;
};

export type PersonalInfo = {
  name: string;
  jobtitle: string;
  tagline: string;
  summary: string;
  contact_info: Contact[];
};

export type Role = {
  role: string;
  date: string;
};

export type Experience = {
  company: string;
  company_url: string;
  roles: Role[];
  description: string;
  skills: string[];
};


export type Projects = {
  title: string;
  link: string;
  description: string;
};

export type Education = {
  degree: string;
  degree_info: string;
  school: string;
  location: string;
  date: string;
};

export type AboutMe = {
  title: string;
  subtitle: string;
  description: string;
};


export type CVData = {
  personal_info: PersonalInfo;
  experience: Experience[];
  projects: Projects[];
  education: Education[];
  about: AboutMe;
};