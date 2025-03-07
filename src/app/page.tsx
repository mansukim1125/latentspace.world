import { ProjectService } from '@/service/project/project.service';
import { ProfileService } from '@/service/profile/profile.service';
import { CompanyRepository } from '@/repository/company/company.repository';
import React from 'react';
import { IndexPage } from '@/components/index/IndexPage/IndexPage';
import {ExperienceService} from "@/service/experience/experience.service";
import {ProjectRepository} from "@/repository/project/project.repository";

export default async function Index() {
  const featuredExperiences =
    await new ExperienceService(
      new ProjectService(new ProjectRepository()),
      new CompanyRepository(),
    ).getFeatured().then(experiences =>
      experiences.map(experience =>
        experience.toPlainObject(),
      ),
    );

  const profile = await new ProfileService().getProfile();

  return (
    <IndexPage experiences={featuredExperiences} profile={profile.toPlainObject()}/>
  );
}
