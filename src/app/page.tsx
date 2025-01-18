import {MainHeroSection} from "@/components/hero/MainHeroSection/MainHeroSection";
import {WritingList} from "@/components/writing/WritingList/WritingList";
import {ProjectList} from "@/components/project/ProjectList/ProjectList";
import {FooterSection} from "@/components/footer/FooterSection/FooterSection";

export default function Home() {
  const title = 'Exploring the Dimensions of AI';
  const text = 'Deep dives into machine learning, neural networks, and the mathematics behind modern AI systems. From theoretical foundations to practical implementations.';

  return (
    <>
      <MainHeroSection title={title} text={text} gradientHeading={true} />

      {/* Featured Posts */}
      <WritingList />

      {/* Projects Section */}
      <ProjectList />

      {/* Footer */}
      <FooterSection />
    </>
  );
}
