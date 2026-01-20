import Hero from "./components/Hero";
import BackgroundFX from "./components/BackgroundFX";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <BackgroundFX />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
