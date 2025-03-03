import React from 'react';
import {ProfileService} from "@/service/profile/profile.service";
import { About } from '@/components/about/AboutPage/About';

export default async function AboutPage() {
  const profileService = new ProfileService();

  const profile = await profileService.getProfile();

  return <About profile={profile.toPlainObject()}></About>
}
