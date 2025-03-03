import {IBlogStat} from "@/interface/blog-stat/blog-stat.interface";

export interface IProfile {
  name: string;
  title: string;
  location: string;
  availability: string;
  profileImage: string;
  resumeLink: string;
  bio: string;
  aboutMe: string[];
  interests: string[];
  blogStats: IBlogStat[];
  socialLink: {
    github: string;
    linkedin: string;
    email: string;
  };
}
