import React from 'react';
import {ProjectService} from "@/service/project/project.service";
import {ProjectList} from "@/components/project/ProjectList/ProjectList";

const ProjectsPage = async () => {
  const projects =
    await ProjectService.createInstance().getAll();

  const plainObj = projects.map(project => project.toPlainObject());

  return <ProjectList projects={plainObj} />
};

export default ProjectsPage;