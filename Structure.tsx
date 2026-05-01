import React from "react";

export default function HomePage() {
  return (
    <main className="bg-bg-primary text-text-primary min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <OtherProjects />
      <HowIWork />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

function Navbar() {
  return (
    <nav className="w-full px-6 md:px-12 lg:px-24 py-4 border-b border-border sticky top-0 bg-bg-primary/80 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <span className="font-bold text-lg">Tony.dev</span>
        <div className="hidden md:flex gap-6 text-text-secondary">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Fullstack Developer
        </h1>
        <p className="text-text-secondary mt-4 max-w-xl">
          I build scalable web applications with modern technologies like React and Spring Boot.
        </p>
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <button className="bg-accent px-6 py-3 rounded-xl text-white hover:bg-accent-hover w-full md:w-auto">
            View Projects
          </button>
          <button className="border border-border px-6 py-3 rounded-xl hover:bg-bg-tertiary w-full md:w-auto">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  return (
    <section id="projects" className="px-6 md:px-12 lg:px-24 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2].map((p) => (
            <div key={p} className="bg-bg-secondary border border-border rounded-2xl p-6 hover:bg-bg-tertiary transition">
              <h3 className="text-xl font-medium">Project {p}</h3>
              <p className="text-text-secondary mt-2">
                Short description of the project and what problem it solves.
              </p>
              <div className="mt-4 flex gap-4 text-sm text-accent">
                <a href="#">Live</a>
                <a href="#">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OtherProjects() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8">Other Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((p) => (
            <div key={p} className="bg-bg-secondary border border-border rounded-xl p-4">
              <h4 className="font-medium">Project {p}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowIWork() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-16 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">How I Work</h2>
        <div className="grid md:grid-cols-4 gap-6 text-text-secondary">
          {["Plan", "Design", "Build", "Optimize"].map((step) => (
            <div key={step}>
              <h4 className="text-text-primary font-medium">{step}</h4>
              <p className="text-sm mt-2">Short explanation of this step.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="px-6 md:px-12 lg:px-24 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Skills</h2>
        <div className="grid md:grid-cols-3 gap-6 text-text-secondary">
          <div>
            <h4 className="text-text-primary font-medium">Frontend</h4>
            <p>React, Next.js, Tailwind</p>
          </div>
          <div>
            <h4 className="text-text-primary font-medium">Backend</h4>
            <p>Spring Boot, Firebase</p>
          </div>
          <div>
            <h4 className="text-text-primary font-medium">Other</h4>
            <p>Git, CI/CD, Deployments</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-16 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Experience</h2>
        <p className="text-text-secondary max-w-2xl">
          5+ years building production applications, working with teams, and delivering scalable solutions.
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-6 md:px-12 lg:px-24 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-semibold">Get in touch</h2>
        <p className="text-text-secondary mt-2">Open to opportunities and collaborations.</p>
        <button className="mt-6 bg-accent px-6 py-3 rounded-xl text-white hover:bg-accent-hover">
          Contact Me
        </button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-8 border-t border-border text-text-muted text-sm text-center">
      © {new Date().getFullYear()} Tony. All rights reserved.
    </footer>
  );
}
