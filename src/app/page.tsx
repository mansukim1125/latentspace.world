import {MainHeroSection} from "@/components/hero/MainHeroSection/MainHeroSection";
import {FeaturedWritings} from "@/components/writing/FeaturedWritings/FeaturedWritings";
import {ProjectList} from "@/components/project/ProjectList/ProjectList";
import {FooterSection} from "@/components/footer/FooterSection/FooterSection";
import {WritingService} from "@/service/writings/writing.service";

export default async function Home() {
  const title = 'Exploring the Dimensions of AI';
  const text = 'Deep dives into machine learning, neural networks, and the mathematics behind modern AI systems. From theoretical foundations to practical implementations.';

  const featuredWritings = await WritingService.createInstance().getFeaturedWritings();
  const plainWritings = featuredWritings.map(writing => {
    return writing.toPlainObject();
  });

  return (
    <>
      <MainHeroSection title={title} text={text} gradientHeading={true} />

      {/* Featured Posts */}
      <FeaturedWritings featuredWritings={plainWritings} />

      {/* Projects Section */}
      <ProjectList />

      {/* Footer */}
      <FooterSection />
    </>
  );
}
