import {HeroSection} from "@/app/components/hero/HeroSection/HeroSection";
import {ArticleList} from "@/app/components/article/ArticleList/ArticleList";
import {ProjectList} from "@/app/components/project/ProjectList/ProjectList";
import {FooterSection} from "@/app/components/footer/FooterSection/FooterSection";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Featured Posts */}
      <ArticleList />

      {/* Projects Section */}
      <ProjectList />

      {/* Footer */}
      <FooterSection />
    </>
  );
}
