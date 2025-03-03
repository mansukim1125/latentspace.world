import {Profile} from "@/entity/profile/profile.entity";
import {IProfile} from "@/interface/profile/profile.interface";

const profileObj: IProfile = {
  name: "Your Name",
  title: "AI Engineer & Software Developer",
  location: "Seoul, South Korea",
  availability: "Available for opportunities",
  profileImage: "/api/placeholder/400/400",
  resumeLink: "/resume.pdf",
  bio: "Building AI-powered solutions with a focus on large language models and vector spaces. Passionate about making complex systems simple and efficient.",
  aboutMe: [
    "I specialize in developing machine learning systems and scalable backend architectures. With over 5 years of experience in software development, I've focused particularly on natural language processing and vector search systems.",
    "Currently, I'm deeply interested in the intersection of large language models and efficient vector storage systems. My work involves designing and implementing solutions that make AI more accessible and practical for real-world applications.",
    "When I'm not coding, I write about my experiences and insights in AI/ML on this blog. I believe in the power of sharing knowledge and contributing to the open-source community."
  ],
  interests: [
    "Large Language Models",
    "Vector Databases",
    "Distributed Systems",
    "System Design",
    "Open Source"
  ],
  blogStats: [
    { value: "50+", label: "Technical Posts" },
    { value: "10+", label: "Open Source Projects" },
    { value: "5+", label: "Years Experience" }
  ],
  socialLink: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    email: 'mailto:you@example.com',
  },
};

export class ProfileService {
  private readonly profile: Profile;

  constructor() {
    this.profile = new Profile(profileObj);
  }

  public async getProfile() {
    return this.profile;
  }
}
