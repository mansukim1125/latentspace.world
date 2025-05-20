import { IProfile } from '@/interface/profile/profile.interface';

export class Profile implements IProfile {
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

  constructor(param: IProfile) {
    this.name = param.name;
    this.title = param.title;
    this.summary = param.summary;
    this.location = param.location;
    this.experience = param.experience;
    this.avatar = param.avatar;
    this.skills = param.skills;
    this.keyMetrics = param.keyMetrics;
    this.social = param.social;
    this.badges = param.badges;
  }

  toPlainObject(): IProfile {
    return {
      name: this.name,
      title: this.title,
      summary: this.summary,
      location: this.location,
      experience: this.experience,
      avatar: this.avatar,
      skills: this.skills,
      keyMetrics: this.keyMetrics,
      social: this.social,
      badges: this.badges,
    };
  }
}
