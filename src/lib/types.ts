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

export type Experience = {
  company: string;
  company_url: string;
  roles: string[];
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


export type CVData = {
  personal_info: PersonalInfo;
  experience: Experience[];
  projects: Projects[];
  education: Education[];
};