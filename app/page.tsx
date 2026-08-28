import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Industries from "./components/Industries";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import HowIWork from "./components/HowIWork";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300">
      <Navbar />
      <main id="main-content" className="flex-1">
        <Hero />
        <About />
        <Services />
        <Industries />
        <Projects />
        <TechStack />
        <HowIWork />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
