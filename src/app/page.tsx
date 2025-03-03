import {MainHeroSection} from "@/components/hero/MainHeroSection/MainHeroSection";
import {FeaturedWritings} from "@/components/writing/FeaturedWritings/FeaturedWritings";
import {FeaturedExperiences} from "@/components/experience/FeaturedExperiences/FeaturedExperiences";
import {FooterSection} from "@/components/footer/FooterSection/FooterSection";
import {WritingService} from "@/service/writings/writing.service";
import {ProjectService} from "@/service/project/project.service";
import {ProfileService} from "@/service/profile/profile.service";
import {ConfigService} from "@/service/config/config.service";

export default async function Home() {
  const featuredWritings = await WritingService.createInstance().getFeaturedWritings();
  const plainWritings = featuredWritings.map(writing => {
    return writing.toPlainObject();
  });

  const featuredProjects = await ProjectService.createInstance().getFeaturedProjects();
  const plainProjects = featuredProjects.map(project => {
    return project.toPlainObject();
  });

  const profile = await new ProfileService().getProfile();

  const config = await new ConfigService().getConfig();

  return (
    <>
      <MainHeroSection title={config.mainHero.title} text={config.mainHero.description} gradientHeading={true} />

      {/* Projects Section */}
      <FeaturedExperiences featuredProjects={plainProjects} />

      {/* Featured Posts */}
      <FeaturedWritings featuredWritings={plainWritings} />

      {/* Footer */}
      <FooterSection profile={profile.toPlainObject()}/>
    </>
  );
}
