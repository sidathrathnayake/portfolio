import ScrollProgress from "@/components/landing/ScrollProgress";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import TechMarquee from "@/components/landing/TechMarquee";
import About from "@/components/landing/About";
import TechStack from "@/components/landing/TechStack";
import Experience from "@/components/landing/Experience";
import Projects from "@/components/landing/Projects";
import Education from "@/components/landing/Education";
import ExtraActivities from "@/components/landing/ExtraActivities";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Education />
        <ExtraActivities />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
