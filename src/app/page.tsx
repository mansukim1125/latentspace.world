import {ProjectService} from "@/service/project/project.service";
import {ProfileService} from "@/service/profile/profile.service";
import {ConfigService} from "@/service/config/config.service";
import {CompanyRepository} from "@/repository/company/company.repository";
import {IExperience} from "@/interface/experience/experience.interface";
import React from "react";
import {IndexPage} from "@/components/index/IndexPage/IndexPage";

export default async function Index() {
  const projects =
    await ProjectService.createInstance().getAll();

  const plainProjects = projects.map(project => project.toPlainObject());

  const companyRepository = new CompanyRepository();

  const uniqueCompanyIdSet = new Set(plainProjects.map((project) => project.companyId));

  const experiences =
    await Promise.all(
      Array.from(uniqueCompanyIdSet).map(
        async companyId => {
          const experience: IExperience = { projects: [] };
          if (companyId) {
            experience.company = (await companyRepository.findOne(companyId))?.toPlainObject();
          }
          experience.projects = plainProjects.filter(project => project.companyId === companyId);
          return experience;
        },
      ),
    );

  const companyOrder = await companyRepository.findCompanyOrder();

  const orderedExperiences = companyOrder.map(companyId => {
    return experiences.find(experience => experience.company?.id === companyId);
  });

  const config = await new ConfigService().getConfig();

  const profile = await new ProfileService().getProfile();

  return (
    <IndexPage config={config} experiences={orderedExperiences} profile={profile.toPlainObject()}/>
  );
}
