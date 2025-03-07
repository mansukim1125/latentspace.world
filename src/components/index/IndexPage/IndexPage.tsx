import { ProfileHeroSection } from '@/components/hero/ProfileHeroSection/ProfileHeroSection';
import { Experiences } from '@/components/experience/Experiences';
import React from 'react';
import { IProfile } from '@/interface/profile/profile.interface';
import { IExperience } from '@/interface/experience/experience.interface';

export const IndexPage = (param: {
  profile: IProfile;
  experiences: IExperience[];
}) => {
  const { profile, experiences } = param;

  return (
    <>
      <ProfileHeroSection profile={profile} />
      <Experiences experiences={experiences} enableMoreLink={true} />
    </>
  );
};
