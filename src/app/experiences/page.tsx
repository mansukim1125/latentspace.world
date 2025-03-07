import React from 'react';
import { ProjectService } from '@/service/project/project.service';
import { Experiences } from '@/components/experience/Experiences';
import { CompanyRepository } from '@/repository/company/company.repository';
import { ConfigService } from '@/service/config/config.service';
import { HeroSection } from '@/components/hero/HeroSection/HeroSection';
import { ExperienceService } from '@/service/experience/experience.service';
import { ProjectRepository } from '@/repository/project/project.repository';

const ExperiencesPage = async () => {
  const experiences = await new ExperienceService(
    new ProjectService(new ProjectRepository()),
    new CompanyRepository(),
  )
    .getAll()
    .then((experiences) =>
      experiences.map((experience) => experience.toPlainObject()),
    );

  const config = await new ConfigService().getConfig();

  return (
    <>
      <HeroSection
        title={config.experienceHero.title}
        text={config.experienceHero.description}
      />
      <Experiences experiences={experiences} />
    </>
  );
};

export default ExperiencesPage;
