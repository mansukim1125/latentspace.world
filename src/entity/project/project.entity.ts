import {IProject} from "@/interface/project/project.interface";
import {ILink} from "@/interface/link/link.interface";

export class Project implements IProject {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: Date;
  content: string;
  period: string;
  duration: string;
  role: string;
  team: string;
  stacks: string[];
  achievements: string[];
  links?: ILink;
  // belongsTo: string;
  companyId?: string;

  public constructor(param: IProject) {
    this.id = param.id;
    this.title = param.title;
    this.slug = param.slug;
    this.excerpt = param.excerpt;
    this.category = param.category;
    this.date = new Date(param.date); // Ensure `date` is a `Date` instance
    this.content = param.content;
    this.period = param.period;
    this.duration = param.duration;
    this.role = param.role;
    this.team = param.team;
    this.stacks = param.stacks;
    this.achievements = param.achievements;
    this.links = param.links;
    // this.belongsTo = param.belongsTo;
    this.companyId = param.companyId;
  }

  public toPlainObject(): IProject {
    return {
      id: this.id,
      title: this.title,
      slug: this.slug,
      excerpt: this.excerpt,
      category: this.category,
      date: this.date,
      content: this.content,
      period: this.period,
      duration: this.duration,
      role: this.role,
      team: this.team,
      stacks: this.stacks,
      achievements: this.achievements,
      links: this.links,
      // belongsTo: this.belongsTo,
      companyId: this.companyId,
    };
  }
}
