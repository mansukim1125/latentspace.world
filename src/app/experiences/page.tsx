import React from 'react';
import { ProjectService } from "@/service/project/project.service";
import { Experiences } from "@/components/experience/Experiences";
import { CompanyRepository } from "@/repository/company/company.repository";
import { IExperience } from "@/interface/experience/experience.interface";
import { ConfigService } from "@/service/config/config.service";
import { MainContent } from "@/components/main-content/MainContent";
import { HeroSection } from "@/components/hero/HeroSection/HeroSection";

const ExperiencesPage = async () => {
  const projects = await ProjectService.createInstance().getAll();
  const plainProjects = projects.map(project => project.toPlainObject());
  const companyRepository = new CompanyRepository();
  const uniqueCompanyIdSet = new Set(plainProjects.map((project) => project.companyId));

  const experiences = await Promise.all(
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

  return (
    <MainContent>
      <HeroSection title={config.experienceHero.title}
                   text={config.experienceHero.description}/>
      <Experiences experiences={orderedExperiences} />
    </MainContent>
  );
};

export default ExperiencesPage;