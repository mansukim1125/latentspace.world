import { ProjectTypeEnum } from "@/interface/project/project-type.enum";
import {IWorkProject} from "@/interface/project/work-project.interface";

export class WorkProject implements IWorkProject {
    id: string;
    title: string;
    description: string;
    period: string;
    stack: string[];
    achievements: string[];
    links?: { github?: string; demo?: string; docs?: string; } | undefined;
    duration: string;
    role: string;
    team: string;
    content: string;
    type: ProjectTypeEnum;

}
