import Navbar from "~/components/layout/Navbar";
import Footer from "~/components/layout/Footer";
import ScrollProgress from "~/components/layout/ScrollProgress";
import Hero from "~/components/portofolio/Hero";
import About from "~/components/portofolio/About";
import Stats from "~/components/portofolio/Stats";
import Services from "~/components/portofolio/Services";
import Timeline from "~/components/portofolio/Timeline";
import Skills from "~/components/portofolio/Skills";
import Projects from "~/components/portofolio/Projects";
import Testimonials from "~/components/portofolio/Testimonials";
import Process from "~/components/portofolio/Process";
import FAQ from "~/components/portofolio/FAQ";
import Contact from "~/components/portofolio/Contact";
import AnimatedBackground from "~/components/layout/AnimatedBackground";
import MouseParallax from "~/components/layout/MouseParallax";

export default function PortfolioPage() {
  return (
    <main className="relative overflow-hidden bg-[#FFF9F0]">
      {/* BASE GRID */}
      <div className="grid-bg z-0" />

      {/* NOISE */}
      <div className="noise-bg z-1" />

      {/* PARALLAX + CURSOR */}
      <MouseParallax />

      {/* MAIN ANIMATED BG */}
      <AnimatedBackground />

      {/* SCROLL BAR */}
      <ScrollProgress />

      {/* CONTENT */}
      <div className="relative z-10">
        <Navbar />

        <Hero />

        <About />

        <Stats />

        <Services />

        <Timeline />

        <Skills />

        <Projects />

        <Testimonials />

        <Process />

        <FAQ />

        <Contact />

        <Footer />
      </div>
    </main>
  );
}
