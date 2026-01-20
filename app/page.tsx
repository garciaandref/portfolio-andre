import Hero from "./components/Hero";
import BackgroundFX from "./components/BackgroundFX";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <BackgroundFX />
      <Hero />
      <AboutMe />
      <Projects />
      <Footer />
    </main>
  );
}
