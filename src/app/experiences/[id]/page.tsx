import ProjectDetail from '@/components/project/ProjectDetail/ProjectDetail';
import { ProjectService } from '@/service/project/project.service';

const getProjectById = async (id: string) => {
  const projectService = ProjectService.createInstance();
  return projectService.getById(id);
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const param = await params;
  const id = param?.id;

  const project = await getProjectById(id);

  const plainProject = project.toPlainObject();

  if (!plainProject) {
    //   TODO: 404 page..
    return;
  }

  return <ProjectDetail project={plainProject} />;
}
