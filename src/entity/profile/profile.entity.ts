import { IBlogStat } from "@/interface/blog-stat/blog-stat.interface";
import {IProfile} from "@/interface/profile/profile.interface";
import {BlogStat} from "@/entity/blog-stat/blog-stat.entity";

export class Profile implements IProfile {
  name: string;
  title: string;
  location: string;
  availability: string;
  profileImage: string;
  resumeLink: string;
  bio: string;
  aboutMe: string[];
  interests: string[];
  blogStats: BlogStat[];
  socialLink: { github: string; linkedin: string; email: string; };

  constructor(param: IProfile) {
    this.name = param.name;
    this.title = param.title;
    this.location = param.location;
    this.availability = param.availability;
    this.profileImage = param.profileImage;
    this.resumeLink = param.resumeLink;
    this.bio = param.bio;
    this.aboutMe = param.aboutMe;
    this.interests = param.interests;
    this.blogStats = param.blogStats.map(blogStat => new BlogStat(blogStat));
    this.socialLink = param.socialLink;
  }

  toPlainObject(): IProfile {
    return {
      name: this.name,
      title: this.title,
      location: this.location,
      availability: this.availability,
      profileImage: this.profileImage,
      resumeLink: this.resumeLink,
      bio: this.bio,
      aboutMe: this.aboutMe,
      interests: this.interests,
      blogStats: this.blogStats.map(blogStat => blogStat.toPlainObject()),
      socialLink: this.socialLink,
    };
  }
}
