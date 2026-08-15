import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedWork from '@/components/FeaturedWork';
import SelectedProjects from '@/components/SelectedProjects';
import Building from '@/components/Building';
import About from '@/components/About';
import Journey from '@/components/Journey';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';

function App() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="relative min-h-screen bg-ink-950">
      <Navbar />
      <main>
        <Hero />
        <FeaturedWork />
        <SelectedProjects />
        <Building />
        <About />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
