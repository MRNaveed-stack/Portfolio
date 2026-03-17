import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] selection:bg-purple-500/30 font-sans">
      <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900/40 via-[#0a0a0a] to-[#0a0a0a]"></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-bold text-xl tracking-tighter hover:opacity-80 transition-opacity">
            Naveed<span className="text-purple-500">.</span>
          </a>
          <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <a
            href="#contact"
            className="md:hidden px-4 py-2 text-sm font-medium border border-white/10 rounded-lg hover:bg-white/5"
          >
            Contact
          </a>
        </div>
      </nav>

      <main className="pt-16 overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <footer className="border-t border-white/5 py-8 text-center text-neutral-500 text-sm">
        <p className="max-w-6xl mx-auto px-6">
          © {new Date().getFullYear()} Muhammad Naveed Qasim. Built with React & Tailwind.
        </p>
      </footer>
    </div>
  );
}

export default App;
