import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import SkillSection from "./components/SkillSection";
import type { PortfolioDataInterface } from "./types/types";

import data from "./data/data.json";

const DATA = data as PortfolioDataInterface;

function App() {
  return (
    <main className="max-w-7xl mx-auto px-6 max-sm:px-2">
      <Header data={DATA.header} />
      <HeroSection data={DATA.hero_section} />
      <ProjectSection data={DATA.project_section} />
      <SkillSection data={DATA.skill_section} />
      <AboutSection data={DATA.about_section} />
      <ContactSection data={DATA.contact_section} />
      <Footer />
    </main>
  );
}

export default App;
