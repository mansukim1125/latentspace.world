import {MainHeroSection} from "@/components/hero/MainHeroSection/MainHeroSection";
import {FeaturedWritings} from "@/components/writing/FeaturedWritings/FeaturedWritings";
import {FeaturedExperiences} from "@/components/experience/FeaturedExperiences/FeaturedExperiences";
import {FooterSection} from "@/components/footer/FooterSection/FooterSection";
import {WritingService} from "@/service/writings/writing.service";
import {ProjectService} from "@/service/project/project.service";

export default async function Home() {
  const title = 'Exploring the Dimensions of AI';
  const text = 'Deep dives into machine learning, neural networks, and the mathematics behind modern AI systems. From theoretical foundations to practical implementations.';

  const featuredWritings = await WritingService.createInstance().getFeaturedWritings();
  const plainWritings = featuredWritings.map(writing => {
    return writing.toPlainObject();
  });

  const featuredProjects = await ProjectService.createInstance().getFeaturedProjects();
  const plainProjects = featuredProjects.map(project => {
    return project.toPlainObject();
  });

  return (
    <>
      <MainHeroSection title={title} text={text} gradientHeading={true} />

      {/* Projects Section */}
      <FeaturedExperiences featuredProjects={plainProjects} />

      {/* Featured Posts */}
      <FeaturedWritings featuredWritings={plainWritings} />

      {/* Footer */}
      <FooterSection />
    </>
  );
}
