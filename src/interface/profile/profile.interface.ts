export interface IProfile {
  name: string;
  title: string;
  summary: string;
  location: string;
  experience: string;
  avatar?: string;
  skills: string[];
  keyMetrics: {
    projects: number;
    experience: string;
    // contributions: number;
  };
  social: {
    github?: string;
    // linkedin?: string;
    email?: string;
  };
  badges: string[];
}
