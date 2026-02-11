import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import SkillSection from "./components/SkillSection";

function App() {
  return (
    <main className="max-w-7xl mx-auto px-6 ">
      <Header />
      <HeroSection />
      <ProjectSection />
      <SkillSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

export default App;
