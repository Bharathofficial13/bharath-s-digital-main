import { useReveal } from "@/hooks/useReveal";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CommunitySection from "@/components/Communitysection";
import ToolsAndSystemSection from "@/components/Toolsandsystemsection";
import EventsSection from "@/components/Eventsections";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Index() {
  useReveal();

  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ToolsAndSystemSection />
      <EventsSection /> 
      <CommunitySection />
      
      
      {/* <EducationSection /> */}
      
      {/* <SkillsSection /> */}
      <ServicesSection />
      
      <ContactSection />
      <Footer />
    </>
  );
}