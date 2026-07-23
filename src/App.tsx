import { useEffect } from "react";
import FloatingNav from "./components/FloatingNav";
import Hero from "./components/Hero";
import QuoteBlock from "./components/QuoteBlock";
import Statement from "./components/Statement";
import Showcase from "./components/Showcase";
import Projects from "./components/Projects";
import SkillsMarquee from "./components/SkillsMarquee";
import Experience from "./components/Experience";
import Journal from "./components/Journal";
import Contact from "./components/Contact";
import ArticlePage from "./components/ArticlePage";
import { usePath } from "./router";

function Home() {
  // Support hash targets after client-side navigation (e.g. returning to #journal).
  useEffect(() => {
    if (window.location.hash) {
      document.querySelector(window.location.hash)?.scrollIntoView();
    }
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <FloatingNav />
      <main>
        <Hero />
        <QuoteBlock />
        <Statement />
        <Showcase />
        <Projects />
        <SkillsMarquee />
        <Experience />
        <Journal />
      </main>
      <Contact />
    </div>
  );
}

function App() {
  const path = usePath();

  const match = path.match(/^\/journal\/([^/]+)\/?$/);
  if (match) {
    return <ArticlePage slug={decodeURIComponent(match[1])} />;
  }

  return <Home />;
}

export default App;
