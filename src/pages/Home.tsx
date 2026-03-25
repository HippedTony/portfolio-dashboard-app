import About from '@/components/About';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';

function Home() {
  return (
    <>
      <Hero />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <About />
        <Projects />
      </div>
    </>
  );
}

export default Home;
