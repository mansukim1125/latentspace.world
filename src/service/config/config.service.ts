import {IConfig} from "@/interface/config/config.interface";

const config: IConfig = {
  writingHero: {
    title: "Writing",
    description: "Thoughts and insights about artificial intelligence, machine learning, and software engineering."
  },
  experienceHero: {
    title: "Experiences",
    description: "A collection of professional experiences and personal projects in software development."
  },
  mainHero: {
    title: "Exploring the Dimensions of AI",
    description: "Deep dives into machine learning, neural networks, and the mathematics behind modern AI systems. From theoretical foundations to practical implementations."
  }
};

export class ConfigService {
  private readonly config: IConfig;

  constructor() {
    this.config = config;
  }

  getConfig() {
    return this.config;
  }
}
