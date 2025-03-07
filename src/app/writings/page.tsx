import {WritingService} from "@/service/writings/writing.service";
import Writings from "@/components/writing/Writings/Writings";
import {ConfigService} from "@/service/config/config.service";
import React from "react";
import {MainContent} from "@/components/main-content/MainContent";
import {HeroSection} from "@/components/hero/HeroSection/HeroSection";

export default async function WritingsPage() {
  const writings = await WritingService.createInstance().getWritings();

  const plainWritingObjs = writings.map((writing) => {
    return writing.toPlainObject();
  });

  const config = await new ConfigService().getConfig();

  return (
    <MainContent>
      <HeroSection title={config.writingHero.title}
                   text={config.writingHero.description}/>
      <Writings writings={plainWritingObjs} />
    </MainContent>
  );
}
