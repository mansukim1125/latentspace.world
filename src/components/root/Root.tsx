import React from 'react';
import { Analytics } from "@vercel/analytics/react"
import { HeaderSection } from '@/components/header/HeaderSection/HeaderSection';
import { MainContent } from '@/components/main-content/MainContent';
import { FooterSection } from '@/components/footer/FooterSection/FooterSection';
import { ProfileService } from '@/service/profile/profile.service';

export const Root = async (param: { children: React.ReactNode }) => {
  const { children } = param;

  const profile = await new ProfileService().getProfile();

  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-black text-gray-100">
          <HeaderSection />
          <MainContent>{children}</MainContent>
          <FooterSection profile={profile.toPlainObject()} />
        </div>
        <Analytics />
      </body>
    </html>
  );
};
