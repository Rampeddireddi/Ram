import { portfolioData } from "./data/portfolioData";
import CursorGlow from "./components/CursorGlow";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import ExperienceSection from "./sections/ExperienceSection";
import CertificationsSection from "./sections/CertificationsSection";
function App() {
  return (
    <div className="relative isolate min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <CursorGlow />
      <main className="relative z-10 mx-auto grid w-full max-w-7xl gap-8 px-6 py-8 lg:grid-cols-[minmax(320px,420px)_1fr] lg:gap-12 lg:py-12">
        <aside className="lg:sticky lg:top-8 lg:h-[calc(100vh-4rem)]">
          <HeroSection data={portfolioData} />
        </aside>
        <div className="space-y-16 pb-12 lg:pr-4">
          <AboutSection />
          <SkillsSection skills={portfolioData.skills} />
          <ProjectsSection projects={portfolioData.projects} />
          <ExperienceSection experiences={portfolioData.experiences} />
          <CertificationsSection certifications={portfolioData.certifications} achievements={portfolioData.achievements} />
          <ContactSection contact={portfolioData.contact} />
        </div>
      </main>
    </div>
  );
}

export default App;
