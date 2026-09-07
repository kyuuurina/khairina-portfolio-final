import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
// import Experience from "./components/Experience";
import Journal from "./components/Journal";
// import Contact from "./components/Contact";
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
      <Navbar />
      <main>
        <Hero />
        <Projects />
        {/* <Experience /> */}
        <Journal />
      </main>
      {/* <Contact /> */}
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
